const postTask = require('../query/query');

module.exports.postTask = async (req,res) => {
  try {
    await postTask.set(req.body);
    res.status(201);
    res.send(postTask);
  } catch (e) {
    console.log("e", e); // eslint-disable-line no-console
    res.sendStatus(500);
  }
};