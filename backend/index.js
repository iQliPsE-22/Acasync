const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Allow anyone for the request
const multer = require("multer"); // Allow image to be uploaded to the database
const { Admin, Student, List } = require("./models");
const connectToDatabase = require("./db"); // Adjust the path as needed

connectToDatabase();

const server = express();
// Add the CORS middleware before defining routes
server.use(cors());
server.use(bodyParser.json());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// ROUTES
server.post("/admin", upload.single("profilePicture"), async (req, res) => {
  try {
    const { firstName, lastName, email, phone, password, confirm } = req.body;

    const admin = new Admin({
      profilePicture: {
        data: req.file.buffer, // Store the binary image data
        contentType: req.file.mimetype, // Store the MIME type
      },
      firstName,
      lastName,
      email,
      phone,
      password,
      confirm,
    });

    await admin.save();

    res.status(201).json({ message: "Admin created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error creating admin" });
  }
});

// CRUD - Create List
server.post("/list", async (req, res) => {
  try {
    console.log(req.body);
    const { enrollmentId, name, marks1, marks2 } = req.body;

    const list = new List({
      enrollmentId,
      name,
      marks1,
      marks2,
    });

    await list.save();
    res.status(201).json({ message: "List item created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error creating list item" });
  }
});

// CRUD - Create Student
server.post("/student", async (req, res) => {
  try {
    let student = new Student(); // New object
    student.profilePicture = req.body.profilePicture;
    student.firstName = req.body.firstName;
    student.lastName = req.body.lastName;
    student.dob = req.body.dob;
    student.fatherName = req.body.fatherName;
    student.motherName = req.body.motherName;
    student.college = req.body.college;
    student.course = req.body.course;
    student.semester = req.body.semester;
    const studdoc = await student.save();
    console.log(studdoc);
    res.json(studdoc);
  } catch (error) {
    res.status(500).json({ error: "Error creating student" });
  }
});

// Fetch data from the database
server.get("/admin", async (req, res) => {
  const docs = await Admin.find();
  res.json(docs);
});

server.get("/student", async (req, res) => {
  const docs = await Student.find();
  res.json(docs);
});

server.get("/list", async (req, res) => {
  try {
    const items = await List.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: "Error fetching list data" });
  }
});

server.listen(8080, () => {
  console.log("Server started on port 8080");
});
