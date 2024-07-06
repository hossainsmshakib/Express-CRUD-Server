const deleteId = require('../query/query');

module.exports.deleteTask = async (req,res) => {
  try {
    await deleteId.delete(req.params.id);
    res.status(202);
    res.send("Task deleted");
  } catch (e) {
    console.log("e", e); // eslint-disable-line no-console
    res.sendStatus(500);
  }
};