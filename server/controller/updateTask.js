const updateId = require('../query/query');

module.exports.updateTask = async(req,res) => {
  await updateId.update(req.params.id, req.body);
  res.send("Task updated");
};