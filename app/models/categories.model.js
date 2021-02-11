const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
    address: String ,
    rewards: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Approved-Address', CategorySchema);