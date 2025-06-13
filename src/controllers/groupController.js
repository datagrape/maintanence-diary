const groupService = require('../services/groupService');

exports.createGroup = async (req, res, next) => {
    const { name, userId } = req.body;
    if (!name) {
        return res.status(400).json({ error: 'Group name is required' });
      }
    try {
        await groupService.createGroup(name, userId);
        res.json({ message: 'Group created successfully' });
    } catch (error) {
        next(error);
    }
};

exports.getGroupByUser = async (req, res, next) => {
    const { userId } = req.body;
    try {
        const groups = await groupService.getGroupByUser(userId);
        res.json(groups);
    } catch (error) {
        next(error);
    }
};

exports.deleteGroupById = async (req, res, next) => {
    const { id } = req.body;
    try {
        const user = await groupService.deleteGroupById(id);
        res.status(204).send();
    } catch (error) {
        next(error);
    }
};