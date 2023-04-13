const router = require('express').Router();
const { signup, temp, login,updateUser } = require('../controllers/UserController')
const fetchuser = require('./middleware/FetchUser')


router.post("/signup", signup);
router.patch("/updateUser",updateUser)
router.post("/login", login);
router.post("/update", fetchuser,updateUser);
router.get("/fetchUser", fetchuser, temp); //example of using middleware
// router.post('/fetchUser',fetchUser)

module.exports = router;