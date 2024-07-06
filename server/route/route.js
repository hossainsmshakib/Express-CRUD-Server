const express = require('express');
const router = express.Router();

const { getTask } = require("../controller/getTask");
const { postTask } = require("../controller/postTask");
const { deleteTask } = require('../controller/deleteTask');
const { updateTask } = require('../controller/updateTask');

router.get('/read', getTask);
router.post('/create', postTask);
router.put('/update/:id', updateTask);
router.delete('/delete/:id', deleteTask); 

module.exports = router;