const router = require('express').Router();
const { signup, temp, login } = require('../controllers/UserController')
const fetchuser = require('./middleware/FetchUser')


router.post("/signup", signup);
router.post("/login", login);
router.get("/fetchUser", fetchuser, temp); //example of using middleware
// router.post('/fetchUser',fetchUser)

module.exports = router;