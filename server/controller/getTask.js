const getTask = require('../query/query');

module.exports.getTask = async (req,res) => {
  try {
    const task = await getTask.get();
    res.status(200);
    res.send(task);
  } catch (e) {
    console.log("e", e); // eslint-disable-line no-console
    res.sendStatus(500);
  }
};