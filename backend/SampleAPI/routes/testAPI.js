const express = require("express");
const router = express();
const students = ["Ali", "Ahmad", "Ali"];
router.get("/", (req, res) => {
  res.send(students);
});

module.exports = router;
