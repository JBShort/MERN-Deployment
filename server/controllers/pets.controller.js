const Pets = require("../models/pets.model");

module.exports = {
    // find all pets
    findAll: (req, res) => {
        Pets.find()
            .then(allPets => {
                console.log(allPets);
                res.json(allPets);
            })
            .catch(err => {
                console.log("error: ", err);
                res.status(400).json(err);
            })
    },

    // find single pet
    findOne: (req, res) => {
        Pets.findOne({ _id: req.params.id })
        .then(singlePet => {
            console.log("Single Pet:", singlePet);
            res.json(singlePet);
        })
        .catch(err => {
            console.log("error: ", err);
            res.status(400).json(err);
        })
    },

    // create pet
    create: (req, res) => {
        Pets.create(req.body)
            .then(newPet => {
                console.log("Created new pet: ", newPet);
                res.json(newPet);
            })
            .catch(err => {
                console.log("error: ", err)
                res.status(400).json(err);
            })
    },

    // update pet
    update: (req, res) => {
        Pets.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
            .then(updatedPet => {
                console.log("updated pet: ", updatedPet);
                res.json(updatedPet);
            })
            .catch(err => {
                console.log("Error on updating: ", err)
                res.status(400).json(err);
            })
    },

    // delete a pet
    deleteSingle: (req, res) => {
        console.log("yeeting: ", req.params.id);
        Pets.deleteOne({_id: req.params.id})
            .then(result => res.json({result: result}))
            .catch(err => res.status(400).json({message: "deletion error", error: err}))
    }
}