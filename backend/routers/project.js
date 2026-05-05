const express = require("express");
const router = express.Router();
const {getproject} = require("../component/project.js");

router.get('/project', getproject);

module.exports = router;