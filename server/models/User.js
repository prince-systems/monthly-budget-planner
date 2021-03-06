const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  id: String,
  authType: String,
  name: String,
  dateCreated: Date
});

mongoose.model('users', userSchema);
