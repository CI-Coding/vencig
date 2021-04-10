const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect("mongodb+srv://hitler:Scooter786@cluster0.wqdhp.mongodb.net/test")
.then(() => {
    console.log("Connection successfully established");    
}).catch(err => {
    console.log('Could not connect to the database.');
    process.exit();
});