const express = require("express");
const apiController = require("../controllers/spotifyApi");
const authController = require('../controllers/auth');
const router = express.Router();

// getUserInfo middleware queries db for user data to set access token of spotify api
router.get('/getMe', authController.getUserInfo, apiController.getMe);

router.get('/getPlaylists', authController.getUserInfo, apiController.getUserPlaylists);

module.exports = router;