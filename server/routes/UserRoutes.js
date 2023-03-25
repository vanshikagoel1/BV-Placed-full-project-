const router = require('express').Router();
const { signup, temp, login } = require('../controllers/UserController')
const fetchuser = require('./middleware/FetchUser')


router.post("/signup", signup);
router.post("/login", login);
router.get("/temp", fetchuser, temp); //example of using middleware

module.exports = router;