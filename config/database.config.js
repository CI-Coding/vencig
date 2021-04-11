const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect("mongodb+srv://hitler-12:hitlersheikh1@cluster0.xrses.mongodb.net/task1")
.then(() => {
    console.log("Connection successfully established");    
}).catch(err => {
    console.log('Could not connect to the database.');
    process.exit();
});
