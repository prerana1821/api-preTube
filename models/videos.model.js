const mongoose = require('mongoose');
const { videos } = require("../data");
const { Schema } = mongoose;

const VideoSchema = new Schema({
  _id: String,
  thumbnail: String,
  name: String,
  date: String,
  category: String,
});

const Video = mongoose.model('Video', VideoSchema);

const addVideosToDB = () => {
  videos.forEach(async (video) => {
    const NewVideo = new Video(video);
    const savedVideo = await NewVideo.save();
    console.log(savedVideo);
  })
}

module.exports = { Video, addVideosToDB };