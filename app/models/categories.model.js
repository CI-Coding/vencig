const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
    address: String ,
    question1: String,
    question2: String,
    question3: String,
    question4: String,
    question5: String,
    rewards: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Approved-Address', CategorySchema);
