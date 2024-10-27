// models/User.js
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    lastname: {
      type: String,
    },
    firstname: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    fromGoogle: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      enum: ['admin', 'student', 'blogger', 'author', 'tutor'],
      default: 'user',
    },
    resetPasswordToken: {
      type: String,
    },
    resetPasswordTokenExpiry: {
      type: Date,
    },
    lastSignedOut: {
      type: Date,
    },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model('User', UserSchema);
