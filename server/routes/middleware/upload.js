const multer = require("multer");

const upload = multer({ limits: {} });
module.exports = upload