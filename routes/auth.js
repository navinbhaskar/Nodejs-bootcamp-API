const express = require('express');
const { register, login, logout, getMe, forgotpassword, resetpassword, updateDetails, updatePassword } = require('../controllers/auth');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);
router.get('/me', protect, getMe);
router.put('/updatedetails', protect, updateDetails);
router.post('/forgotpassword', forgotpassword);
router.put('/updatepassword', protect, updatePassword);
router.put('/resetpassword/:resettoken', resetpassword);

module.exports = router;
