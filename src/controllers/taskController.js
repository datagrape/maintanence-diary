const taskService = require('../services/taskService');

exports.createTask = async (req, res, next) => {
    const { name, userId, groupName, groupId, activityName, activityId, member, dueDate, type, location } = req.body;
    if (!name || !groupName || !activityName || !member || !dueDate || !type) {
        return res.status(400).json({ error: 'Mandatory fields are required' });
    }
    try {
        await taskService.createTask(name, userId, groupName, groupId, activityName, activityId, member, dueDate, type, location);
        res.json({ message: 'Task created successfully' });
    } catch (error) {
        next(error);
    }
};

exports.getTaskByUser = async (req, res, next) => {
    const { userId } = req.body;
    try {
        const tasks = await taskService.getTaskByUser(userId);
        res.json(tasks);
    } catch (error) {
        next(error);
    }
};