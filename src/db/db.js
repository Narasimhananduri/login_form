const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/empform')
    .then(() => {
        console.log('Connected to the MongoDB database');
    })
    .catch((error) => {
        console.error('Error connecting to the MongoDB database:', error.message);
    });
