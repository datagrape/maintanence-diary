const taskService = require('../services/taskService');

exports.createTask = async (req, res, next) => {
    const {
        name,
        userId,
        guid,
        groupName,
        groupId,
        activityName,
        activityId,
        member,
        dueDate,
        type,
        status,
        location,
        taskId,
        link,
        completeddate,
        updatedBy,
        url
    } = req.body;
    if (!name || !groupName || !activityName || !member || !dueDate || !type) {
        return res.status(400).json({ error: 'Mandatory fields are required' });
    }
    if (!taskId) {
        return res.status(400).json({ error: 'taskId is required' });
    }
    if ((userId === undefined || userId === null || userId === '') && (!guid || !String(guid).trim())) {
        return res.status(400).json({ error: 'userId or guid is required' });
    }
    if (!(userId === undefined || userId === null || userId === '') && guid && String(guid).trim()) {
        return res.status(400).json({ error: 'Provide only one of userId or guid' });
    }
    try {
        await taskService.createTask({
            name,
            userId,
            guid,
            groupName,
            groupId,
            activityName,
            activityId,
            member,
            dueDate,
            type,
            status,
            location,
            taskId,
            link,
            completeddate,
            updatedBy,
            url
        });
        res.json({ message: 'Task created successfully' });
    } catch (error) {
        next(error);
    }
};

exports.getTaskByUser = async (req, res, next) => {
    const { userId, guid } = req.body;
    if ((userId === undefined || userId === null || userId === '') && (!guid || !String(guid).trim())) {
        return res.status(400).json({ error: 'userId or guid is required' });
    }
    if (!(userId === undefined || userId === null || userId === '') && guid && String(guid).trim()) {
        return res.status(400).json({ error: 'Provide only one of userId or guid' });
    }
    try {
        const tasks = await taskService.getTaskByUser(userId, guid);
        res.json(tasks);
    } catch (error) {
        next(error);
    }
};
