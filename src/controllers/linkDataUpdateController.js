const bcrypt = require("bcrypt");
const linkDataUpdateService = require('../services/linkDataUpdateService');

function cleanString(value) {
  return typeof value === 'string' ? value.replace(/\x00/g, '') : value;
}

exports.linkData = async (req, res) => {
  let {
    taskId, link, owner, duedate, group, member, taskname, completeddate, location, subscription, updatedBy
  } = req.body;

  if (!link) {
    return res.status(400).json({ error: "Missing required field: link is required." });
  }

  // 🧼 Sanitize all string inputs
  taskId = cleanString(taskId);
  link = cleanString(link);
  owner = cleanString(owner);
  group = cleanString(group);
  member = cleanString(member);
  taskname = cleanString(taskname);
  completeddate = cleanString(completeddate);
  location = typeof location === 'object' && location !== null
    ? JSON.stringify(location)
    : cleanString(location);
  subscription = cleanString(subscription);
  updatedBy = cleanString(updatedBy);

  
  // 🔍 Check for null bytes (for debugging)
  for (const [key, value] of Object.entries({taskId, link, owner, duedate, group, member, taskname, completeddate, location, subscription, updatedBy })) {
    if (typeof value === 'string' && value.includes('\x00')) {
      console.log(`🚨 Null byte found in field: ${key}`);
    }
  }

  try {
    const linkResponse = await linkDataUpdateService.linkData(
      taskId, link, owner, duedate, group, member, taskname, completeddate, location, subscription,updatedBy
    );

    return res.status(201).json({
      message: "Link created/updated successfully",
      link: linkResponse
    });
  } catch (error) {
    console.error("Error handling link:", error);
    return res.status(500).json({
      error: "An error occurred while creating/updating the link."
    });
  }
};


// exports.getLinkData = async (req, res) => {
//   const { link } = req.query; // Query parameters from the request

//   if (!link) {
//     return res.status(400).json({ error: "Missing required field: link is required." });
//   }

//   try {
//     const linkResponse = await linkDataUpdateService.linkData(
//       link
//     );

//     return res.status(200).json({
//       message: "Link data retrieved successfully",
//       link: linkResponse
//     });
//   } catch (error) {
//     console.error("Error handling link:", error);
//     return res.status(500).json({
//       error: "An error occurred while creating/updating the link."
//     });
//   }
// };

exports.getLinkData = async (req, res) => {
  let { link } = req.query; // Can be a string or array

  if (!link) {
    return res.status(400).json({ error: "Missing required field: link is required." });
  }

  // Convert comma-separated string to array if needed
  if (typeof link === 'string') {
    link = link.split(',').map(l => l.trim());
  }

  try {
    const linkResponse = await linkDataUpdateService.getLinkData(link);

    return res.status(200).json({
      message: "Link data retrieved successfully",
      link: linkResponse
    });
  } catch (error) {
    console.error("Error handling link:", error);
    return res.status(500).json({
      error: "An error occurred while retrieving the link data."
    });
  }
};



exports.getLinkDataWithDeviceToken = async (req, res) => {
  try {
    const linkResponse = await linkDataUpdateService.getLinkDataWithDeviceToken();
    return res.status(200).json({
      message: "Link data with device token retrieved successfully",
      link: linkResponse
    });
  } catch (error) {
    console.error("Error handling link with device token:", error);
    return res.status(500).json({
      error: "An error occurred while retrieving link data with device token."
    });
  }
};


exports.getMemberLinkData = async (req, res) => {
  let { link, otp } = req.query; // Query parameters from the request

  if (!link) {
    return res.status(400).json({ error: "Missing required fields: link is required." });
  }

  // 🧼 Sanitize all string inputs
  link = cleanString(link);
  if (otp) otp = cleanString(otp);

  try {
    const linkResponse = await linkDataUpdateService.getMemberLinkData(link, otp);
    
    console.log("LINK RESPONSE", linkResponse); // 🔍 Add this

    if (linkResponse?.message === "OTP required for paid access") {
      return res.status(400).json({ message: linkResponse.message });
    }

    if (
      linkResponse?.message === "Data not available" ||
      linkResponse?.message === "Link not found" ||
      linkResponse?.message === "Invalid OTP or link"
    ) {
      return res.status(404).json({ message: linkResponse.message });
    }

    return res.status(200).json({
      message: "Link data retrieved successfully",
      link: linkResponse
    });
  } catch (error) {
    console.error("Error handling link:", error);
    return res.status(500).json({
      error: "An error occurred while retrieving the link data."
    });
  }
};

exports.checkLinkAccessed = async (req, res) => {
  let { link } = req.query;
  const deviceToken = req.headers['device-token'] || req.headers['x-device-token'] || null;

  if (!link) {
    return res.status(400).json({ error: "Missing required field: link is required." });
  }

  // 🧼 Sanitize input
  link = cleanString(link);

  try {
    const result = await linkDataUpdateService.checkLinkAccessed(link, { deviceToken });

    if (result?.message === "Link is expired or not found") {
      return res.status(404).json({ message: result.message });
    }

    return res.status(200).json({
      message: "Link is valid and not accessed",
      link: result
    });
  } catch (error) {
    console.error("Error checking link access:", error);
    return res.status(500).json({
      error: "An error occurred while checking the link."
    });
  }
};

exports.getOwnerLinkData = async (req, res) => {
  let {owner } = req.query; // Query parameters from the request

  if (!owner) {
    return res.status(400).json({ error: "Missing required fields: owner is required." });
  }

  // 🧼 Sanitize all string inputs
  owner = cleanString(owner);
  try {
    const linkResponse = await linkDataUpdateService.getOwnerLinkData(
      owner
    );

    return res.status(200).json({
      message: "Link data retrieved successfully",
      link: linkResponse
    });
  } catch (error) {
    console.error("Error handling link:", error);
    return res.status(500).json({
      error: "An error occurred while retrieving the link data."
    });
  }
};

