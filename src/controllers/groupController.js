const groupService = require('../services/groupService');

exports.createGroup = async (req, res, next) => {
    const { name, userId, guid } = req.body;
    if (!name) {
        return res.status(400).json({ error: 'Group name is required' });
      }
    if ((userId === undefined || userId === null || userId === '') && (!guid || !String(guid).trim())) {
        return res.status(400).json({ error: 'userId or guid is required' });
    }
    if (!(userId === undefined || userId === null || userId === '') && guid && String(guid).trim()) {
        return res.status(400).json({ error: 'Provide only one of userId or guid' });
    }
    try {
        await groupService.createGroup(name, userId, guid);
        res.json({ message: 'Group created successfully' });
    } catch (error) {
        next(error);
    }
};

exports.getGroupByUser = async (req, res, next) => {
    const { userId, guid } = req.body;
    if ((userId === undefined || userId === null || userId === '') && (!guid || !String(guid).trim())) {
        return res.status(400).json({ error: 'userId or guid is required' });
    }
    if (!(userId === undefined || userId === null || userId === '') && guid && String(guid).trim()) {
        return res.status(400).json({ error: 'Provide only one of userId or guid' });
    }
    try {
        const groups = await groupService.getGroupByUser(userId, guid);
        res.json(groups);
    } catch (error) {
        next(error);
    }
};

exports.deleteGroupById = async (req, res, next) => {
    const { id, userId, guid } = req.body;
    if ((userId === undefined || userId === null || userId === '') && (!guid || !String(guid).trim())) {
        return res.status(400).json({ error: 'userId or guid is required' });
    }
    if (!(userId === undefined || userId === null || userId === '') && guid && String(guid).trim()) {
        return res.status(400).json({ error: 'Provide only one of userId or guid' });
    }
    try {
        await groupService.deleteGroupById(id, userId, guid);
        res.status(204).send();
    } catch (error) {
        next(error);
    }
};
