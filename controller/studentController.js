const Student = require("../models/student");

// Get all students
exports.getAllStudents = (req, res) => {
  Student.find()
    .then((students) => {
      res.json(students);
    })
    .catch((err) => {
      res.status(500).json({ message: "Error fetching students" });
    });
};

// Create a student
exports.createStudent = (req, res) => {
  const { name, email, age, imageUrl } = req.body;
  const newStudent = new Student({ name, email, age, imageUrl });

  newStudent
    .save()
    .then((student) => {
      res.status(201).json(student);
    })
    .catch((err) => {
      res.status(500).json({ message: "Error creating student" });
    });
};

// Get a specific student
exports.getStudentById = (req, res) => {
  const studentId = req.params.id;

  Student.findById(studentId)
    .then((student) => {
      if (!student) {
        return res.status(404).json({ message: "Student not found" });
      }
      res.json(student);
    })
    .catch((err) => {
      res.status(500).json({ message: "Error fetching student" });
    });
};

// Update a student
exports.updateStudent = (req, res) => {
  const studentId = req.params.id;
  const { name, email, age, imageUrl } = req.body;

  Student.findByIdAndUpdate(studentId, { name, email, age, imageUrl }, { new: true })
    .then((student) => {
      if (!student) {
        return res.status(404).json({ message: "Student not found" });
      }
      res.json(student);
    })
    .catch((err) => {
      res.status(500).json({ message: "Error updating student" });
    });
};

// Delete a student
exports.deleteStudent = (req, res) => {
  const studentId = req.params.id;

  Student.findByIdAndRemove(studentId)
    .then((student) => {
      if (!student) {
        return res.status(404).json({ message: "Student not found" });
      }
      res.json(student);
    })
    .catch((err) => {
      res.status(500).json({ message: "Error deleting student" });
    });
};