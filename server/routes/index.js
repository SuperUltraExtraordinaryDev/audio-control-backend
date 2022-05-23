// node_modules
const router = require("express").Router();

// sub routes
const audioRoute = require("./audio.route");
const uploadRoute = require("./upload.route");

router.use("/audios", audioRoute);
router.use("/upload", uploadRoute);

module.exports = router;
