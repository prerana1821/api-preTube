const express = require('express');
const router = express.Router();
const { extend } = require("lodash");
const { UserDetail } = require("../models/userDetails.model");

router.get("/", async (req, res) => {
  try {
    const userDetails = await UserDetail.find({});
    res.status(200).json({ userDetails, success: true, message: "Successful" })
  } catch (error) {
    res.status(404).json({ success: false, message: "Error while retrieving details", errorMessage: error.message })
  }
})

router.param("userId", async (req, res, next, userId) => {
  try {
    const user = await UserDetail.findById(userId);
    if (!user) {
      return res.status(400).json({ success: false, message: "unable to find user" });
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(400).json({ success: false, message: "unable to send user" })
  }
})

router.route('/:userId/history')
  .get(async (req, res) => {
    const { user } = req;
    const updatedObj = await user.populate('history.videoId').execPopulate();
    return res.json({ history: updatedObj.history, success: true })
  })
  .post(async (req, res) => {
    const { user } = req;
    const video = req.body;
    user.history.push({ videoId: video.videoId });
    await user.save();
    const newVideo = user.history.find(item => item.videoId == video.videoId)
    return res.status(201).json({ addedVideo: newVideo, success: true, message: "Successful" });
  })
  .delete(async (req, res) => {
    const { user } = req;
    const { videoId } = req.body;
    const video = user.history.find(item => item.videoId == videoId)
    if (video) {
      user.history.pull({ _id: video._id });
      await user.save();
      return res.status(200).json({ deletedVideo: video, success: true, message: "Successful" });
    } else {
      return res.status(404).json({ succes: false, message: "The video id you requested doesn't exists" });
    }
  })

router.route('/:userId/likedVideos')
  .get(async (req, res) => {
    const { user } = req;
    const updatedObj = await user.populate('likedVideos.videoId').execPopulate();
    return res.json({ likedVideos: updatedObj.likedVideos, success: true })
  })
  .post(async (req, res) => {
    const { user } = req;
    const video = req.body;
    user.likedVideos.push({ videoId: video.videoId });
    await user.save();
    const newVideo = user.likedVideos.find(item => item.videoId == video.videoId)
    return res.status(201).json({ addedVideo: newVideo, success: true, message: "Successful" });
  })
  .delete(async (req, res) => {
    const { user } = req;
    const { videoId } = req.body;
    const video = user.likedVideos.find(item => item.videoId == videoId)
    if (video) {
      user.likedVideos.pull({ _id: video._id });
      await user.save();
      return res.status(200).json({ deletedVideo: video, success: true, message: "Successful" });
    } else {
      return res.status(404).json({ succes: false, message: "The video id you requested doesn't exists" });
    }
  })

router.route('/:userId/notes')
  .get(async (req, res) => {
    const { user } = req;
    return res.json({ notes: user.notes, success: true })
  })

router.route('/:userId/notes/:videoId')
  .post(async (req, res) => {
    const { user } = req;
    const { videoId } = req.params;
    const { note } = req.body;
    user.notes.push({ videoId: videoId, note: note });
    const savedNotes = await user.save();
    return res.json({ notes: user.notes, success: true })
  })
  .delete(async (req, res) => {
    const { user } = req;
    const { videoId } = req.params;
    const note = user.notes.find(item => item.videoId == videoId)
    if (note) {
      user.notes.pull({ _id: note._id });
      await user.save();
      return res.status(200).json({ note: note, success: true, message: "Successful" });
    } else {
      return res.status(404).json({ succes: false, message: "The video id you requested doesn't exists" });
    }
  })

router.route('/:userId/notes/:videoId/:noteId')
  .post(async (req, res) => {
    const { user } = req;
    const { noteId } = req.params;
    const updateNote = req.body;
    const note = user.notes.find(item => item._id == noteId)
    if (note) {
      const newUpdatedNote = extend(note, updateNote);
      await user.save();
      return res.status(200).json({ note: newUpdatedNote, success: true, message: "Note Updated Successfully" })
    } return res.status(404).json({ success: false, message: "The note id you requested doesn't exists" });
  })

router.route('/:userId/playlists')
  .get(async (req, res) => {
    const { user } = req;
    return res.json({ playlists: user.playlists, success: true })
  })
  .post(async (req, res) => {
    const { user } = req;
    const { title } = req.body;
    user.playlists.push({ title: title, videos: [] });
    await user.save();
    return res.status(201).json({ playlists: user.playlists, success: true, message: "Successful" });
  })

router.route('/:userId/playlists/:playlistId')
  .post(async (req, res) => {
    const { user } = req;
    const { playlistId } = req.params;
    const updatePlaylist = req.body;
    const playlist = user.playlists.find(item => item._id == playlistId);
    console.log(playlist);
    if (playlist) {
      const updatedPlaylist = extend(playlist, updatePlaylist)
      await user.save();
      return res.status(201).json({ playlists: updatedPlaylist, success: true, message: "Successful" });
    }
  })
  .delete(async (req, res) => {
    const { user } = req;
    const { playlistId } = req.params;
    const playlist = user.playlists.find(item => item._id == playlistId);
    if (playlist) {
      user.playlists.pull({ _id: playlist._id });
      await user.save();
      return res.status(200).json({ playlist: playlist, success: true, message: "Successful" });
    } else {
      return res.status(404).json({ succes: false, message: "The video id you requested doesn't exists" });
    }
  })

router.route('/:userId/playlists/:playlistId/:videoId')
  .post(async (req, res) => {
    const { user } = req;
    const { playlistId, videoId } = req.params;
    const playlist = user.playlists.find(item => item._id == playlistId);
    if (playlist) {
      const updatedVideoPlaylist = playlist.videos.filter((item) => item.videoId !== videoId);
      const updatedPlaylist = extend(playlist, { videos: updatedVideoPlaylist })
      await user.save();
      return res.status(201).json({ playlists: updatedPlaylist, success: true, message: "Successful" });
    }
  })

module.exports = router;