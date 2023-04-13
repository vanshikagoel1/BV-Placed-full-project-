const router = require('express').Router()
const { fileUploadController,getFile } = require('../controllers/FileController');
const upload = require('./middleware/upload');
const fetchuser = require('./middleware/FetchUser')


router.post('/uploadFile/:id', upload.single('pdf'), fileUploadController)
router.get('/getFile/:id', fetchuser, getFile)










module.exports = router;
