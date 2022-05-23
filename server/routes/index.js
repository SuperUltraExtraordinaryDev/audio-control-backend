// node_modules
const router = require("express").Router();

// sub routes
const audioRoute = require("./audio.route");

router.use("/audios", audioRoute);

module.exports = router;
