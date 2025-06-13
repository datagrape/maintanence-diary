const activityService = require('../services/activityService');

exports.createActivity = async (req, res, next) => {
    const { name, userId } = req.body;
    if (!name) {
        return res.status(400).json({ error: 'Activity name is required' });
      }
    try {
        await activityService.createActivity(name, userId);
        res.json({ message: 'Activity created successfully' });
    } catch (error) {
        next(error);
    }
};

exports.getActivityByUser = async (req, res, next) => {
    const { userId } = req.body;
    try {
        const activities = await activityService.getActivityByUser(userId);
        res.json(activities);
    } catch (error) {
        next(error);
    }
};

exports.deleteActivityById = async (req, res, next) => {
    const { id } = req.body;
    try {
        const user = await activityService.deleteActivityById(id);
        res.status(204).send();
    } catch (error) {
        next(error);
    }
};