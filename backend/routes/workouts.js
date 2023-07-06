const express =require('express')

const router = express.Router()

// Get all workouts
router.get('/', (req,res) => {
res.json({mssg: 'Get all workouts'})
})

// Get a specific workout
router.get('/:id',(req,res)=>{
    res.json({mssg: 'Get a specific workout'})
})

// Post a new workout
router.post('/', (req,res) =>{
    res.json({mssg: 'Post a new workout'})
})


// Delete a workout
router.delete('/:id', (req,res) => {
    res.json({mssg: 'Delete a workout'})
})

// Update a workout
router.patch('/:id', (req,res) => {
    res.json({mssg: 'Update a workout'})
})

module.exports = router