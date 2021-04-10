//category.controller.js will have following methods :

const Category = require('../models/categories.model.js');
var WAValidator = require('wallet-address-validator');

// Create and Save a new Category
exports.create = (req, res) => {

};

// Retrieve and return all categories from the database.
exports.findAll = (req, res) => {
	Category.find()
    .then(categories => {
        res.send(categories);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something went wrong."
        });
    });
};

// Find a single category with a id
exports.findOne = (req, res) => {
	Category.findById(req.params.categoryId)
    .then(category => {
        if(!category) {
            return res.status(404).send({
                message: "Category does not exist"
            });            
        }
        res.send(category);
    }).catch(err => {        
        return res.status(500).send({
            message: "Something went wrong."
        });
    });
};

// Update a category identified by the id in the request
exports.update = (req, res) => {
	if(!req.body.address) {
        return res.status(400).send({
            message: "Fields can not be empty"
        });
    }
     // Find category and update it with the request body
    Category.findByIdAndUpdate(req.params.categoryId, {
        address: req.body.address,
        rewards: req.body.rewards
    }, {new: true})
    .then(category => {
        if(!category) {
            return res.status(404).send({
                message: "Category does not exist"
            });
        }
        res.send(category);
    }).catch(err => {        
        return res.status(500).send({
            message: "Something went wrong"
        });
    });
};
// Delete a category with the specified categoryId in the request
exports.delete = (req, res) => {
    Category.findByIdAndRemove(req.params.categoryId)
   .then(category => {
       if(!category) {
           return res.status(404).send({
               message: "Category does not exist"
           });
       }
       res.send({message: "Category deleted successfully!"});
   }).catch(err => {      
       return res.status(500).send({
           message: "Something went wrong"
       });
   });
};
exports.create = async(req, res) => {
   
	if(!req.body.address) {
        return res.status(400).send({
            message: "Fields can not be empty"
        });
    }
    

    

   const address =  await Category.findOne({ address: req.body.address }).exec();

    if (address) {
        address.question1= req.body.question1, 
        address.question2= req.body.question2, 
        address.question3= req.body.question3, 
        address.question4= req.body.question4, 
        address.question5= req.body.question5,
        address.rewards = req.body.rewards
        address.save().then(()=> { return res.sendStatus(200)})
        console.log(req.body);
     } else {
        // Create a Category
        const category = new Category({
            address: req.body.address, 
            question1: req.body.question1, 
            question2: req.body.question2, 
            question3: req.body.question3, 
            question4: req.body.question4, 
            question5: req.body.question5, 
            rewards: req.body.rewards
        });
        // console.log(req);

        // Save Category in the database
    category.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something went wrong."
        });
    });
     }


    

    
};
