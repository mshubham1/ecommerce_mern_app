const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controllers");
const auth = require("../middleware/auth");

router.post('/register', authController.signup);
router.post('/login', authController.login);
router.get('/get_user', auth, authController.get_user);


module.exports = router;
