const mongoose = require('mongoose');

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
  profilePicture: String,
  firstName: String,
  lastName: String,
  dob: String,
  fatherName: String,
  motherName: String,
  college: String,
  course: String,
  stream: String,
  semester: String,
});

const ListSchema = new mongoose.Schema({
  id: String,
  name: String,
  marks1: String,
  marks2: String,
});

module.exports = {
  Admin: mongoose.model('Admin', AdminSchema),
  Student: mongoose.model('Student', StudentSchema),
  List: mongoose.model('List', ListSchema),
};
