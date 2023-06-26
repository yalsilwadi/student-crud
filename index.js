const express = require("express");
const mongoose = require("mongoose");
const { engine } = require("express-handlebars");
const studentController = require("./controller/studentController");
const connectToDB = require("./config/db");

const app = express();

// Connect to MongoDB using Mongoose
connectToDB();

app.use(express.json());

// Configure Handlebars as the view engine
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

// Routes
app.get("/", (req, res) => {
  res.render("home", { title: "Home" });
});

// Mount student routes
app.get("/students", studentController.getAllStudents);
app.post("/api/students", studentController.createStudent);
app.get("/api/students/:id", studentController.getStudentById);
app.put("/api/students/:id", studentController.updateStudent);
app.delete("/api/students/:id", studentController.deleteStudent);

// Start the server
app.listen(5000, () => console.log("Server running on port 5000"));