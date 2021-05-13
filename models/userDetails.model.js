const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserDetailSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, ref: 'UserCredential' },
  likedVideos: [
    { videoId: { type: String, ref: 'Video' } }
  ],
  history: [
    { videoId: { type: String, ref: 'Video' } }
  ],
  notes: [
    {
      note: String,
      videoId: { type: String, ref: 'Video' }
    }
  ],
  playlists: [
    {
      title: String,
      videos: [{ videoId: { type: String, ref: 'Video' } }]
    }
  ],
});

const UserDetail = mongoose.model('UserDetail', UserDetailSchema);

module.exports = { UserDetail };