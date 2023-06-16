const express = require("express");

const app = express();

// routes
// mostly work with JSON at the beginning

const students = [
  {
    name: "Yasser",
    email: "y@gmail.com",
    age: 26,
    imageUrl:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
];
// Render home page
app.get("/", (req, res) => {
  res.send("Home page");
});
// Show all students
app.get("/api/students", (req, res) => {
  res.json(students);
  //   res.render("students", { students });
});

// Create a student
app.post("/api/students", (req, res) => {
    const { name, email, age, imageUrl } = req.body;
    const newStudent = { name, email, age, imageUrl };
    students.push(newStudent);
    res.status(201).json(newStudent);
  });
  
// Edit a student
app.put("/api/students/:id", (req, res) => {
    
  });

// Get a specific student
app.get("/api/students/:id", (req, res) => {
    
  });
  
// Delete a student
app.delete("/api/students/:id", (req, res) => {
    
  });

app.listen(5000, () => console.log("Server running on port 5000"));