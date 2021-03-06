const {Schema} = require("mongoose")

let userSchema = new Schema({
  firstname: {type: String, required: true, minlength: 3, maxlength: 50},
  lastname: {type: String, required: true, minlength: 3, maxlength: 200},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true, minlength: 8, maxlength: 500},
  profile: {type: String, required: false, default: 'user'},
  enabled: {type: Boolean, default: true},
  created_at: {type: Date, default: Date.now}
});

module.exports = userSchema
