const locationRequestService = require('../services/locationRequestService');

exports.respond = async (req, res, next) => {
  try {
    const response = await locationRequestService.respondToLocationRequest(req.body || {});

    return res.status(201).json({
      success: true,
      message: 'Location request response saved',
      response
    });
  } catch (error) {
    next(error);
  }
};
