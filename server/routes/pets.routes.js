const PetsController = require("../controllers/pets.controller");

// this is backend routing for axios and/or postman. Your actual web app routing is in App.js
module.exports = app => {
    app.get('/api/pets', PetsController.findAll);
    app.get('/api/pets/:id', PetsController.findOne);
    app.post('/api/new', PetsController.create);
    app.put('/api/pets/update/:id', PetsController.update);
    app.delete('/api/pets/delete/:id', PetsController.deleteSingle);
}