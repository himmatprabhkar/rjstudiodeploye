const express = require('express');
const router = express.Router();

const framSizeConfroller = require('../../controllers/ImageSizesController/ImageSizesController');

router.get('/get-frame-sizes',framSizeConfroller.getFrameSizes );

module.exports = router;