const express = require("express");
const router = express.Router();
const {getcertificate} = require("../component/certificate.js");

router.get('/certificate', getcertificate);

module.exports = router;