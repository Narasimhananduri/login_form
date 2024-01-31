const mongoose = require('mongoose');

const empSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    textarea: {
         type: String,
         required: true

    }
});

const empCollection = mongoose.model('empcollection', empSchema);

module.exports = empCollection;
