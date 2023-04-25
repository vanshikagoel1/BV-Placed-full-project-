const router = require('express').Router();
const { signup, temp, login,updateUser } = require('../controllers/UserController')
const fetchuser = require('./middleware/FetchUser')

router.get("/fetchUser", fetchuser, temp); 
router.post("/signup", signup);
router.post("/login", login);
router.patch("/update", fetchuser,updateUser);

module.exports = router;