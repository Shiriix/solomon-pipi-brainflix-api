const uuid = require("uuid");
const { readVideo, writeVideo } = require("../utils/helpers");

const getAllVideos = (req, res) => {
  const videos = readVideo();
  const filteredVideos = videos.map((video) => ({
    id: video.id,
    title: video.title,
    channel: video.channel,
    image: video.image,
  }));
  res.status(200).send(filteredVideos);
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
    channel: "Amari Middleton",
    image: "http://localhost:5051/images/osamason.png",
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
