// const bcrypt = require("bcrypt");
// const subscriptionService = require('../services/subscriptionService');

// exports.subscription = async (req, res, next) => {
//     const {email, subscriptionType } = req.body;
//     if (!email || !subscriptionType ) {
//         return res.status(400).json({ error: "All fields are required" });
//     }
//     try {
//         const updatedUser = await subscriptionService.subscription(email, subscriptionType);
//         return res.status(200).json({
//             message: "Subscription updated successfully",
//             user: updatedUser,
//         });
//     } catch (error) {
//         console.error("Error updating subscription:", error);
//         next(error);
//     }
// };

const bcrypt = require("bcrypt");
const subscriptionService = require('../services/subscriptionService');

function cleanString(value) {
  return typeof value === 'string' ? value.replace(/\x00/g, '') : value;
}


exports.subscription = async (req, res, next) => {
//   const { email, subscriptionType } = req.body;
  let {
     email, subscriptionType
  } = req.body;

  if (!email || !subscriptionType) {
    return res.status(400).json({ error: "All fields are required" });
  }

  email = cleanString(email).toLowerCase();;
  subscriptionType = cleanString(subscriptionType);

  
  // 🔍 Check for null bytes (for debugging)
  for (const [key, value] of Object.entries({ email, subscriptionType })) {
    if (typeof value === 'string' && value.includes('\x00')) {
      console.log(`🚨 Null byte found in field: ${key}`);
    }
  }

  try {
    const updatedUser = await subscriptionService.subscription(email, subscriptionType);
    return res.status(200).json({
      message: "Subscription updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Error updating subscription:", error);
    return res.status(404).json({ error: error.message });
  }
};
