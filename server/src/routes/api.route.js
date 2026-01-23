const express = require('express');
const router = express.Router();

const PageConfigApi = require('../api/pageconfig.api')();

router.get("/pageconfigs", PageConfigApi.Index);

module.exports = router;