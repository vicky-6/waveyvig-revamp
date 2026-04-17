const express = require("express");
const router = express.Router();

// ✅ IMPORT FIRST
const {
  signup,
  login,
  getProfile,
  updateProfile,
  uploadProfilePic,
  changePassword,
} = require("../controllers/authController");

const protect = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

// ✅ THEN USE ROUTES
router.post("/signup", signup);
router.post("/login", login);

router.get("/profile", protect, getProfile);
router.put("/update", protect, updateProfile);
router.post("/upload", protect, upload.single("image"), uploadProfilePic);
router.put("/change-password", protect, changePassword);

module.exports = router;