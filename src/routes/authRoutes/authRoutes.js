const express = require('express');
const router = express.Router();
const authController = require('../../controllers/authController/authController');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.post('/register', authController.register);

router.post('/login', authController.login);

router.post('/upload-image', upload.single('image'), authController.uploadFile);

router.post("/api/create-checkout-session", authController.makePaymaneMethod)




module.exports = router;
