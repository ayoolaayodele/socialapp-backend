const express = require('express');
const {
  signup,
  signin,
  signout,
  forgotPassword,
  resetPassword,
  socialLogin,
} = require('../controllers/auth');
const { userById } = require('../controllers/user');
const {
  userSignupValidator,
  passwordResetValidator,
} = require('../validator/index');

const router = express.Router();

// Note: postController destructured

router.post('/signup', userSignupValidator, signup);

// Signin dont need validation
router.post('/signin', signin);

// Signout
router.get('/signout', signout);

// password forgot and reset routes
router.put('/forgot-password', forgotPassword);
router.put('/reset-password', passwordResetValidator, resetPassword);

//  social login
router.post('/social-login', socialLogin);

// Any route containing : userId our app will first exec userById
router.param('userId', userById);

module.exports = router;
