const router = require('express').Router()
const { fileUploadController } = require('../controllers/FileController');
const upload = require('./middleware/upload');


router.post('/uploadFile/:id', upload.single('pdf'), fileUploadController)










module.exports = router;
