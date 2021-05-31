const express = require('express');
const router = express.Router();
const { extend } = require("lodash");
const { UserDetail } = require("../models/userDetails.model");

router.param("userId", async (req, res, next, userId) => {
  try {
    const user = await UserDetail.findById(userId);
    if (!user) {
      return res.status(400).json({ success: false, errorMessage: "unable to find user" });
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(400).json({ success: false, errorMessage: "unable to send user" })
  }
})

router.route('/')
  .get(async (req, res) => {
    const { userId } = req.user;
    const user = await UserDetail.findById(userId);
    if (!user) {
      return res.status(400).json({ success: false, errorMessage: "unable to find user" });
    } else {
      const { history } = await user.populate('history.videoId').execPopulate();
      const { likedVideos } = await user.populate('likedVideos.videoId').execPopulate();
      const { playlists } = await user.populate('playlists.videos.videoId').execPopulate();
      const populatedUser = { ...user, history, likedVideos, playlists };
      return res.json({ userDetails: populatedUser._doc, success: true, message: "Successful" })
    }
  })

router.route('/history')
  .get(async (req, res) => {
    const { userId } = req.user;
    const user = await UserDetail.findById(userId);
    if (!user) {
      return res.status(400).json({ success: false, errorMessage: "unable to find user" });
    } else {
      const updatedObj = await user.populate('history.videoId').execPopulate();
      return res.json({ history: updatedObj.history, success: true })
    }
  })
  .post(async (req, res) => {
    const { videoId } = req.body;
    const { userId } = req.user;
    const user = await UserDetail.findById(userId);
    if (!user) {
      return res.status(400).json({ success: false, errorMessage: "unable to find user" });
    } else {
      user.history.push({ videoId: videoId });
      await user.save();
      const updatedObj = await user.populate('history.videoId').execPopulate();
      const newVideo = updatedObj.history.find(item => item.videoId._id === videoId);
      return res.status(201).json({ addedVideo: newVideo, success: true, message: "Successful" });
    }
  })
  .delete(async (req, res) => {
    const { userId } = req.user;
    const user = await UserDetail.findById(userId);
    if (!user) {
      return res.status(400).json({ success: false, errorMessage: "unable to find user" });
    } else {
      user.history = [];
      await user.save();
      return res.status(200).json({ history: user.history, success: true, message: "Successful" });
    }
  })

router.route('/history/:videoId')
  .delete(async (req, res) => {
    const { videoId } = req.params;
    const { userId } = req.user;
    const user = await UserDetail.findById(userId);
    if (!user) {
      return res.status(400).json({ success: false, errorMessage: "unable to find user" });
    } else {
      const video = user.history.find(item => item.videoId == videoId);
      if (video) {
        user.history.pull({ _id: video._id });
        await user.save();
        return res.status(200).json({ deletedVideo: video, success: true, message: "Successful" });
      } else {
        return res.status(404).json({ succes: false, errorMessage: "The video id you requested doesn't exists" });
      }
    }
  })

router.route('/likedVideos')
  .get(async (req, res) => {
    const { userId } = req.user;
    const user = await UserDetail.findById(userId);
    if (!user) {
      return res.status(400).json({ success: false, errorMessage: "unable to find user" });
    } else {
      const updatedObj = await user.populate('likedVideos.videoId').execPopulate();
      return res.json({ likedVideos: updatedObj.likedVideos, success: true })
    }
  })
  .post(async (req, res) => {
    const { videoId } = req.body;
    const { userId } = req.user;
    const user = await UserDetail.findById(userId);
    if (!user) {
      return res.status(400).json({ success: false, errorMessage: "unable to find user" });
    } else {
      user.likedVideos.push({ videoId: videoId });
      await user.save();
      const updatedObj = await user.populate('likedVideos.videoId').execPopulate();
      const newVideo = updatedObj.likedVideos.find(item => item.videoId._id === videoId);
      return res.status(201).json({ addedVideo: newVideo, success: true, message: "Successful" });
    }
  })

router.route('/likedVideos/:videoId')
  .delete(async (req, res) => {
    const { videoId } = req.params;
    const { userId } = req.user;
    const user = await UserDetail.findById(userId);
    if (!user) {
      return res.status(400).json({ success: false, errorMessage: "unable to find user" });
    } else {
      const video = user.likedVideos.find(item => item.videoId == videoId)
      if (video) {
        user.likedVideos.pull({ _id: video._id });
        await user.save();
        return res.status(200).json({ deletedVideo: video, success: true, message: "Successful" });
      } else {
        return res.status(404).json({ succes: false, errorMessage: "The video id you requested doesn't exists" });
      }
    }
  })

router.route('/notes')
  .get(async (req, res) => {
    const { userId } = req.user;
    const user = await UserDetail.findById(userId);
    if (!user) {
      return res.status(400).json({ success: false, errorMessage: "unable to find user" });
    } else {
      return res.json({ notes: user.notes, success: true })
    }
  })

router.route('/notes/:videoId')
  .post(async (req, res) => {
    const { videoId } = req.params;
    const { note } = req.body;
    const { userId } = req.user;
    const user = await UserDetail.findById(userId);
    if (!user) {
      return res.status(400).json({ success: false, errorMessage: "unable to find user" });
    } else {
      user.notes.push({ videoId: videoId, note: note });
      await user.save();
      const newNote = user.notes.find((item) => item.videoId === videoId);
      return res.status(201).json({ note: newNote, success: true })
    }
  })
  .delete(async (req, res) => {
    const { videoId } = req.params;
    const { userId } = req.user;
    const user = await UserDetail.findById(userId);
    if (!user) {
      return res.status(400).json({ success: false, errorMessage: "unable to find user" });
    } else {
      const note = user.notes.find(item => item.videoId == videoId)
      if (note) {
        user.notes.pull({ _id: note._id });
        await user.save();
        return res.status(200).json({ note: note, success: true, message: "Successful" });
      } else {
        return res.status(404).json({ succes: false, errorMessage: "The video id you requested doesn't exists" });
      }
    }
  })

router.route('/notes/:videoId/:noteId')
  .post(async (req, res) => {
    const { noteId } = req.params;
    const updateNote = req.body;
    const { userId } = req.user;
    const user = await UserDetail.findById(userId);
    if (!user) {
      return res.status(400).json({ success: false, errorMessage: "unable to find user" });
    } else {
      const note = user.notes.find(item => item._id == noteId)
      if (note) {
        const newUpdatedNote = extend(note, updateNote);
        await user.save();
        return res.status(200).json({ note: newUpdatedNote, success: true, message: "Note Updated Successfully" })
      } return res.status(404).json({ success: false, errorMessage: "The note id you requested doesn't exists" });
    }
  })

router.route('/playlists')
  .get(async (req, res) => {
    const { userId } = req.user;
    const user = await UserDetail.findById(userId);
    if (!user) {
      return res.status(400).json({ success: false, errorMessage: "unable to find user" });
    } else {
      return res.json({ playlists: user.playlists, success: true });
    }
  })
  .post(async (req, res) => {
    const { title } = req.body;
    const { userId } = req.user;
    const user = await UserDetail.findById(userId);
    if (!user) {
      return res.status(400).json({ success: false, errorMessage: "unable to find user" });
    } else {
      user.playlists.push({ title: title, videos: [] });
      await user.save();
      const newPlaylist = user.playlists.find((item) => item.title === title);
      return res.status(201).json({ playlist: newPlaylist, success: true, message: "Successful" });
    }
  })

router.route('/playlists/:playlistId')
  .post(async (req, res) => {
    const { playlistId } = req.params;
    const updatePlaylist = req.body;
    const { userId } = req.user;
    const user = await UserDetail.findById(userId);
    if (!user) {
      return res.status(400).json({ success: false, errorMessage: "unable to find user" });
    } else {
      const playlist = user.playlists.find(item => item._id == playlistId);
      if (playlist) {
        const updatedPlaylist = extend(playlist, updatePlaylist)
        await user.save();
        const { playlists } = await user.populate('playlists.videos.videoId').execPopulate();
        const populatedPlaylist = playlists.find(item => item._id == playlistId);
        return res.status(201).json({ playlist: populatedPlaylist, success: true, message: "Successful" });
      }
    }
  })
  .delete(async (req, res) => {
    const { playlistId } = req.params;
    const { userId } = req.user;
    const user = await UserDetail.findById(userId);
    if (!user) {
      return res.status(400).json({ success: false, errorMessage: "unable to find user" });
    } else {
      const playlist = user.playlists.find(item => item._id == playlistId);
      if (playlist) {
        user.playlists.pull({ _id: playlist._id });
        await user.save();
        return res.status(200).json({ playlist: playlist, success: true, message: "Successful" });
      } else {
        return res.status(404).json({ succes: false, errorMessage: "The video id you requested doesn't exists" });
      }
    }
  })

router.route('/playlists/:playlistId/:videoId')
  .delete(async (req, res) => {
    const { playlistId, videoId } = req.params;
    const { userId } = req.user;
    const user = await UserDetail.findById(userId);
    if (!user) {
      return res.status(400).json({ success: false, errorMessage: "unable to find user" });
    } else {
      const playlist = user.playlists.find(item => item._id == playlistId);
      if (playlist) {
        const updatedVideoPlaylist = playlist.videos.filter((item) => item.videoId !== videoId);
        const updatedPlaylist = extend(playlist, { videos: updatedVideoPlaylist })
        await user.save();
        return res.status(200).json({ playlists: updatedPlaylist, success: true, message: "Successful" });
      }
    }
  })

module.exports = router;