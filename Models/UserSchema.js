const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
      },
      email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
      },
      mobile: {
        type: String,
        required: true,
      },
      details:{
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      avatar: {
        type: mongoose.Schema.Types.Mixed,
      },
      role: {
        type: String,
        enum: ["Admin", "User", "NGO"],
        default: "user",
      },
    },
    {
      timestamps: true,
    }
);
module.exports = UserSchema;

