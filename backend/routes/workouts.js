const express = require('express');

const router = express.Router();


// To Get All Workouts 
router.get('/', (req, res) => {
    res.json({mssg: 'Get All Workouts'});

})

// To get a single Workout
router.get('/:id', (req, res) => {

    res.json({mssg: 'Single Workout'})
})


// To Create New Workout
router.post('/', (req, res) => {

    res.json({mssg: 'Create New Workout'})
})

// To Update a single Workout
router.patch('/:id', (req, res) => {

    res.json({mssg: 'Update Workout'})
})


// To Delete a single Workout
router.delete('/:id', (req, res) => {

    res.json({mssg: 'Delete Workout'})
})


module.exports = router;