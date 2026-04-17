const Student = require("../models/studentModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// 🔐 Generate Token
const generateToken = (id) => {
  return jwt.sign({ id }, "secretkey", { expiresIn: "7d" });
};

// ✅ SIGNUP
exports.signup = async (req, res) => {
  try {
    const { name, email, age, qualification, password } = req.body;

    const existingUser = await Student.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // 🔥 HASH PASSWORD
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await Student.create({
      name,
      email,
      age,
      qualification,
      password: hashedPassword,
    });

    res.status(201).json({
      msg: "Signup successful",
      token: generateToken(user._id),
    });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

// ✅ LOGIN
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Student.findOne({ email });

    if (!user) {
      return res.status(400).json({ msg: "User not found" });
    }

    // 🔥 COMPARE PASSWORD
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    res.json({
      msg: "Login successful",
      token: generateToken(user._id),
    });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};


// 👤 GET PROFILE
exports.getProfile = async (req, res) => {
  res.json(req.user);
};

//update user profile

exports.updateProfile = async (req, res) => {
  try {
    const user = await Student.findByIdAndUpdate(
      req.user._id,
      req.body,
      { new: true }
    ).select("-password");

    res.json(user);
  } catch {
    res.status(500).json({ msg: "Update failed" });
  }
};

// profile picture
exports.uploadProfilePic = async (req, res) => {
  const user = await Student.findByIdAndUpdate(
    req.user._id,
    { profilePic: req.file.filename },
    { new: true }
  );

  res.json(user);
};

//update password
exports.changePassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  const user = await Student.findById(req.user._id);

  const isMatch = await bcrypt.compare(oldPassword, user.password);

  if (!isMatch) return res.status(400).json({ msg: "Wrong password" });

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(newPassword, salt);

  await user.save();

  res.json({ msg: "Password updated" });
};

//email verification
exports.verifyEmail = async (req, res) => {
  const user = await Student.findByIdAndUpdate(
    req.user._id,
    { isVerified: true },
    { new: true }
  );

  res.json({ msg: "Email verified" });
};