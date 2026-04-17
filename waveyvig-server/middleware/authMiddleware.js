const jwt = require("jsonwebtoken");
const Student = require("../models/studentModel");

const protect = async (req, res, next) => {
  let token;

  try {
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, "secretkey");

      req.user = await Student.findById(decoded.id).select("-password");

      next();
    } else {
      res.status(401).json({ msg: "Not authorized, no token" });
    }
  } catch (err) {
    res.status(401).json({ msg: "Token failed" });
  }
};

module.exports = protect;