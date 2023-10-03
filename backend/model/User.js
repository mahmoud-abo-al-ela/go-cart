import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name."],
  },
  email: {
    type: String,
    required: [true, "Please enter your email."],
    validate: {
      validator: validator.isEmail,
      message: "Please provide valid email.",
    },
  },
  password: {
    type: String,
    required: [true, "Please enter your password."],
    minLength: [6, "Password length should be greater than 6."],
    select: false,
  },
  role: {
    type: String,
    default: "user",
  },
  avatar: {
    type: String,
    required: [true, "Please upload an image."],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

UserSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.createJWT = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};

UserSchema.methods.comparePassword = async function (enteredPassword) {
  const match = await bcrypt.compare(enteredPassword, this.password);
  return match;
};

export default mongoose.model("User", UserSchema);
