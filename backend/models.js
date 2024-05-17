const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
  profilePicture: {
    data: Buffer,
    contentType: String,
  },
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  password: String,
  confirm: String,
});

const StudentSchema = new mongoose.Schema({
  profilePicture: {
    data: Buffer,
    contentType: String,
  },
  firstName: String,
  lastName: String,
  roll: String,
  email: String,
  dob: String,
  gender: String,
  college: String,
  course: String,
  stream: String,
  semester: String,
});

const ListSchema = new mongoose.Schema({
  enrollmentId: String,
  name: String,
  marks1: String,
  marks2: String,
});

const Attendance = new mongoose.Schema({
  enrollmentId: String,
  name: String,
  maths: String,
  science: String,
  english: String,
});

const AnnouncementSchema = new mongoose.Schema({
  subject: String,
  announcement: String,
  file: {
    data: Buffer,
    contentType: String,
  },
});

module.exports = {
  Admin: mongoose.model("Admin", AdminSchema),
  Student: mongoose.model("Student", StudentSchema),
  List: mongoose.model("List", ListSchema),
  Attendance: mongoose.model("Attendance", Attendance),
  Announcement: mongoose.model("Announcement", AnnouncementSchema),
};
