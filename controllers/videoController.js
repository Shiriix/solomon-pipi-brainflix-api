const uuid = require("uuid");
const { readVideo, writeVideo } = require("../utils/helpers");

const getAllVideos = (req, res) => {
  const videos = readVideo();
  res.status(200).send(videos);
};

const getSelectedVideo = (req, res) => {
  const videoId = req.params.videoId;
  const videoArr = readVideo();

  const selectedVideo = videoArr.find((video) => {
    return video.id === videoId;
  });

  res.status(200).send(selectedVideo);
};

const postNewVideo = (req, res) => {
  const newVideo = {
    id: uuid.v4(),
    title: req.body.title,
    channel: "",
    image: "",
    description: req.body.description,
    views: "1337",
    likes: "69",
    duration: "2:25",
    video: "",
    timestamp: 1691644662000,
  };
  writeVideo(newVideo);
  res.status(200).send(newVideo);
};

module.exports = { getAllVideos, getSelectedVideo, postNewVideo };
