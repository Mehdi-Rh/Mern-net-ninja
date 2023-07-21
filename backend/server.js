require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors =require('cors')

// express app
const app = express();

const workoutsRoutes = require("./routes/workouts");

// middleware
app.use(express.json());
app.use(cors())

app.use((req, res, next) => {
  console.log("req.path ", req.path);
  console.log("req.method ", req.method);
  next();
});

// routes
app.use("/api/workouts", workoutsRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("Connecting to db & listening on port ", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
