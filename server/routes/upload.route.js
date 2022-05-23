// node_modules
const router = require("express").Router();

// controllers
const { uploadController } = require("../controllers");

// utils
const { fileUploader } = require("../utils");

router.post("/audio", fileUploader.array("file", 2), uploadController.upload);

module.exports = router;
