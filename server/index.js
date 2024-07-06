const express = require('express');
const path = require('path');
const app = express();
const router = require('./route/route');
const PORT = 5000;
const db = require('./model');

app.use(express.json());
app.use(router);

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to the backend"
    })
})

app.listen(PORT, () => {
    db.sequelize.sync();
    console.log(`Server is running on http://localhost:${PORT}`);
});