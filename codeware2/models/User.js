const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

 const UserSchema  = new mongoose.Schema({
  name: {type: String, require: true},
  email: {type: String, require: true, unique: true},
  password: {type: String, require: true},
}, {Timestamps: true });
mongoose.models = {}
export default  mongoose.model("User", UserSchema);