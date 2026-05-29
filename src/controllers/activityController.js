const activityService = require('../services/activityService');

exports.createActivity = async (req, res, next) => {
    const { name, userId, guid } = req.body;
    if (!name) {
        return res.status(400).json({ error: 'Activity name is required' });
      }
    if ((userId === undefined || userId === null || userId === '') && (!guid || !String(guid).trim())) {
        return res.status(400).json({ error: 'userId or guid is required' });
    }
    if (!(userId === undefined || userId === null || userId === '') && guid && String(guid).trim()) {
        return res.status(400).json({ error: 'Provide only one of userId or guid' });
    }
    try {
        await activityService.createActivity(name, userId, guid);
        res.json({ message: 'Activity created successfully' });
    } catch (error) {
        next(error);
    }
};

exports.getActivityByUser = async (req, res, next) => {
    const { userId, guid } = req.body;
    if ((userId === undefined || userId === null || userId === '') && (!guid || !String(guid).trim())) {
        return res.status(400).json({ error: 'userId or guid is required' });
    }
    if (!(userId === undefined || userId === null || userId === '') && guid && String(guid).trim()) {
        return res.status(400).json({ error: 'Provide only one of userId or guid' });
    }
    try {
        const activities = await activityService.getActivityByUser(userId, guid);
        res.json(activities);
    } catch (error) {
        next(error);
    }
};

exports.deleteActivityById = async (req, res, next) => {
    const { id, userId, guid } = req.body;
    if ((userId === undefined || userId === null || userId === '') && (!guid || !String(guid).trim())) {
        return res.status(400).json({ error: 'userId or guid is required' });
    }
    if (!(userId === undefined || userId === null || userId === '') && guid && String(guid).trim()) {
        return res.status(400).json({ error: 'Provide only one of userId or guid' });
    }
    try {
        await activityService.deleteActivityById(id, userId, guid);
        res.status(204).send();
    } catch (error) {
        next(error);
    }
};
