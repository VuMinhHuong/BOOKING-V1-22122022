const { Router } = require("express");
const express = require("express");
const router = express.Router();
const userController = require("../controllers/users.controller");

router.get("/", userController.getAll);

module.exports = router;
