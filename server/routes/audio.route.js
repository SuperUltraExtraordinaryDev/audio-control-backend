// node_modules
const router = require("express").Router();

// controllers
const { audioController } = require("../controllers");

router.post("/audio", audioController.createAudio);
router.get("/audio", audioController.readAudios);
router.get("/audio/:id", audioController.readCertainAudio);

module.exports = router;
