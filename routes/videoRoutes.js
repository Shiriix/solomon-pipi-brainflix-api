const express = require("express");

const {
  getAllVideos,
  getSelectedVideo,
  postNewVideo,
} = require("../controllers/videoController");

const router = express.Router();

router.get("/", getAllVideos);
router.get("/:videoId", getSelectedVideo);
router.post("/", postNewVideo);

module.exports = router;
