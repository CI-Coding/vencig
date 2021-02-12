//category.routes.js

module.exports = (app) => {
    const category = require('../controllers/category.controller.js');

    // Create a new Category
    app.post('/postaddress', category.create);

    // Retrieve all Categorys
    app.get('/getaddress', category.findAll);

    // Retrieve a single Category with categoryId
    app.get('/category/:categoryId', category.findOne);

    // Update a Category with categoryId
    app.put('/category/:categoryId', category.update);

    // Delete a Category with categoryId
    app.delete('/category/:categoryId', category.delete);
}