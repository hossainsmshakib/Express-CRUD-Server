const db = require('../model/index');

module.exports.get = async () => {
  const task = await db.ballot.findAll();
  return task;
};

module.exports.set = async (task) => {
    try {
      const createTask = await db.ballot.create({
        title: task.title,
        time: task.time,
        count: task.count,
      });
      return createTask;
    } catch (e) {
      console.log(e);
    }
  };

  module.exports.delete = async (id) => {
    await db.ballot.destroy({
        where: {
          id: id,
        },
    });
};

module.exports.update = async (id, up) => {
    try {
      const updatedtask = await db.ballot.update(up, {
        where: {
          id: id,
        },
      });
      return updatedtask;
    } catch (error) {
      console.log("Id not found");
    }
};