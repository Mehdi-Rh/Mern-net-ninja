const express = require("express");
const Workout = require("../models/workoutModel");
const router = express.Router();

const {
  createWorkout,
  getWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

const requireAuth = require("../middleware/requireAuth");

router.use(requireAuth);

// Get all workouts
router.get("/", getWorkouts);

// Get a specific workout
router.get("/:id", getWorkout);

// POST a new workout
router.post("/", createWorkout);

// Delete a workout
router.delete("/:id", deleteWorkout);

// Update a workout
router.patch("/:id", updateWorkout);

module.exports = router;
