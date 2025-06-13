const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const fetch = require("node-fetch");

function generateOTP(length = 6) {
  return Math.floor(100000 + Math.random() * 900000).toString().slice(0, length);
}

exports.linkData = async (
  link,
  owner,
  duedate,
  group,
  member,
  taskname,
  completeddate,
  location,
  subscription
) => {
  const existingLink = await prisma.link.findUnique({ where: { link } });


  // if (existingLink) {
  //   return prisma.link.update({
  //     where: { link },
  //     data: {
  //       completeddate,
  //       location
  //     }
  //   });
  // }
  if (existingLink) {
    // ✅ If both values already exist, just return them
    if (existingLink.completeddate && existingLink.location) {
      return {
        completeddate: existingLink.completeddate,
        location: existingLink.location
      };
    }

    // ✅ Else update the link with new values
    return prisma.link.update({
      where: { link },
      data: {
        completeddate,
        location
      }
    });
  }

  // If subscription is 'paid', send OTPs and update paidmemberdata
  if (subscription == "paid") {
    try {
      const memberObj = typeof member == "string" ? JSON.parse(member) : member;

      for (const name in memberObj) {
        const phoneNumber = memberObj[name];
        const otp = generateOTP();

        // Send OTP via Textbelt
        // await sendFreeOtpTextbelt(phoneNumber, otp);

        // Save link and OTP to paidmemberdata table
        await prisma.paidmemberdata.create({
          data: {
            link,
            otp
          }
        });
        return prisma.link.create({
          data: {
            link,
            owner,
            duedate,
            group,
            member,
            taskname,
            completeddate,
            location,
            subscription
          }
        });
      }
    } catch (error) {
      console.error("Error processing paid members:", error);
    }
  } else {
    return prisma.link.create({
      data: {
        link,
        owner,
        duedate,
        group,
        member,
        taskname,
        completeddate,
        location,
        subscription
      }
    });
  }
};

// Send OTP using Textbelt (free test version)
async function sendFreeOtpTextbelt(phoneNumber, otp) {
  try {
    const response = await fetch("https://textbelt.com/text", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        phone: phoneNumber,
        message: `Your OTP is ${otp}`,
        key: "textbelt" // free test key
      })
    });

    const result = await response.json();
    console.log(`OTP sent to ${phoneNumber}:`, result);
  } catch (error) {
    console.error(`Failed to send OTP to ${phoneNumber}:`, error);
  }
}


// exports.getLinkData = async (link) => {
//   const existingLink = await prisma.link.findUnique({ where: { link } });
//   // If `link` is provided, fetch the specific link
//   if (existingLink) {
//     return prisma.link.findUnique({
//       where: { link: link }
//     });
//   }
// };

exports.getLinkData = async (links) => {
  // Ensure it's an array
  if (!Array.isArray(links)) {
    throw new Error("Expected an array of links");
  }

  return prisma.link.findMany({
    where: {
      link: {
        in: links
      }
    }
  });
};



exports.getMemberLinkData = async (link, otp = null) => {
  const existingLink = await prisma.link.findFirst({ where: { link } });

  if (!existingLink) {
    return { message: "Link not found" };
  }

  // FREE subscription logic
  if (existingLink.subscription == "free") {
    if (existingLink.freecount > 0) {
      await prisma.link.update({
        where: { id: existingLink.id },
        data: { freecount: { decrement: 1 } }
      });

      return existingLink;
    } else {
      return { message: "Data not available" };
    }
  }

  // PAID subscription logic
  if (existingLink.subscription == "paid") {
    if (!otp) {
      return { message: "OTP required for paid access" };
    }

    const paidMember = await prisma.paidmemberdata.findFirst({
      where: {
        link: link,
        otp: otp
      }
    });

    if (!paidMember) {
      return { message: "Invalid OTP or link" };
    }

    if (paidMember.otpcount > 0) {
      await prisma.paidmemberdata.update({
        where: { id: paidMember.id },
        data: { otpcount: { decrement: 1 } }
      });

      return existingLink;
    } else {
      return { message: "Data not available" };
    }
  }

  return { message: "Invalid subscription type" };
};




exports.getOwnerLinkData = async ( owner) => {
  const existingLink = await prisma.link.findFirst({ where: {  owner } });
  // If `link` and `owner` are provided, fetch the specific link
  if (existingLink) {
    return prisma.link.findMany({
      where: { owner }
    });
  }
};