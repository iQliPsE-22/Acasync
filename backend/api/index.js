const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Allow anyone for the request
const multer = require("multer"); // Allow image to be uploaded to the database
const { Admin, Student, List, Announcement } = require("../models");
const connectToDatabase = require("../db"); // Adjust the path as needed

connectToDatabase();

const server = express();
server.use(cors());
server.use(bodyParser.json());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// ROUTES
server.post("/student", upload.single("profilePicture"), async (req, res) => {
  try {
    console.log("Received request body:", req.body);
    console.log("Received file:", req.file);
    const {
      firstName,
      lastName,
      email,
      dob,
      roll,
      gender,
      college,
      course,
      stream,
      semester,
    } = req.body;
    const student = new Student({
      profilePicture: {
        data: req.file.buffer,
        contentType: req.file.mimetype,
      },
      firstName,
      lastName,
      email,
      dob,
      roll,
      gender,
      college,
      course,
      stream,
      semester,
    });
    await student.save();
    res.status(201).json({ message: "Student created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error creating student" });
  }
});

server.post("/admin", upload.single("profilePicture"), async (req, res) => {
  try {
    const { firstName, lastName, email, phone, password, confirm } = req.body;

    const admin = new Admin({
      profilePicture: {
        data: req.file.buffer,
        contentType: req.file.mimetype,
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
    const { enrollmentId, name, marks1, marks2 } = req.body;
    const list = new List();
    list.enrollmentId = enrollmentId;
    list.name = name;
    list.marks1 = marks1;
    list.marks2 = marks2;

    const ans = await list.save();
    console.log(ans);
    res.status(201).json({ message: "List item created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error creating list item" });
  }
});

server.delete("/list/:enrollmentId", async (req, res) => {
  try {
    const { enrollmentId } = req.params;
    await List.deleteOne({ enrollmentId });
    res.status(200).json({ message: "List item deleted successfully" });
    console.log(enrollmentId + ":Deleted");
  } catch (error) {
    res.status(500).json({ error: "Error deleting list item" });
  }
});

server.post("/announcement", upload.single("file"), async (req, res) => {
  try {
    const { subject, announcement } = req.body;
    console.log("Received request body:", req.body);
    console.log("Received file:", req.file);

    const announcementData = new Announcement({
      subject,
      announcement,
      file: {
        data: req.file.buffer,
        contentType: req.file.mimetype,
      },
    });

    await announcementData.save();
    res.status(201).json({ message: "Announcement created successfully" });
  } catch (error) {
    console.error("Error creating attendance:", error);
    res.status(500).json({ error: "Error creating Announcement" });
  }
});
server.get("/announcement", async (req, res) => {
  try {
    const items = await Announcement.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: "Error fetching announcement data" });
  }
});
// CRUD - Create Student

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

server.get("/", (req, res) => {
  res.send("Server started and database is connected");
});


server.listen(8080, () => {
  console.log("Server started on port 8080");
});
