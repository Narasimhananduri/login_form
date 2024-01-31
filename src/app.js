const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const empCollection = require('./model/model');

const template_path = path.join(__dirname, '../template/views');

const app = express();
const port = 3000;

require('./db/db');

app.set('view engine', 'hbs');
app.set('views', template_path);

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/empdata', async (req, res) => {
    const empdata = new empCollection({
        email: req.body.email,
        password: req.body.password,
        textarea: req.body.textarea
    });

 console.log(empdata);

    try {
        const postData = await empdata.save();
        res.send(postData);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
