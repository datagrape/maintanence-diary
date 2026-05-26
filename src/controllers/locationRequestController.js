const locationRequestService = require('../services/locationRequestService');

exports.respond = async (req, res, next) => {
  try {
    const result = await locationRequestService.respondToLocationRequest(req.body || {});

    return res.status(201).json({
      success: true,
      message: 'Location request response saved',
      response: result.response,
      request: result.requestNotification
    });
  } catch (error) {
    next(error);
  }
};

exports.send = async (req, res, next) => {
  try {
    const result = await locationRequestService.sendLocationRequestNotification(req.body || {});
    return res.status(201).json({
      success: true,
      message: 'Location request notification sent',
      request: result.request,
      fcm: result.fcmResponse
    });
  } catch (error) {
    next(error);
  }
};
