const fs = require("fs");
const { Module } = require("module");

const readVideo = () => {
  try {
    const fileContent = fs.readFileSync("./data/video-details.json");
    return JSON.parse(fileContent);
  } catch (error) {
    console.log(error);
  }
};

const writeVideo = (video) => {
  const videoArr = readVideo();
  videoArr.push(video);
  try {
    fs.writeFileSync("./data/video-details.json", JSON.stringify(videoArr));
  } catch (error) {
    console.log(error);
  }
};

module.exports = { readVideo, writeVideo };
