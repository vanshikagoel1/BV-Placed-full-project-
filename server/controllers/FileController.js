const FileModel = require("../models/FileModel");
const MAX_FILE_SIZE = 20 * 1024 * 1024;


module.exports.fileUploadController = async (req, res, next) => {
  try {
    const myFile = req.file;
    const smartId = req.params.id;
    const size = myFile.size || myFile.buffer.length;
    const contentType = myFile.mimetype || "application/pdf";
    const filename = myFile.originalname || `file-${Date.now()}.pdf`;

    if (size <= MAX_FILE_SIZE) {
      const isFileCheck = await FileModel.findOne({smartId})
      if(isFileCheck){
        await FileModel.updateOne({smartId},{data: myFile.buffer,size,filename})
        res.status(200).json({
            status: true,
            filename,
            message: "File updated successfully.",
          });
      }
      else{
        await FileModel.create({
            data: myFile.buffer,
            smartId,
            size,
            contentType,
            filename,
          });
          res.status(200).json({
            status: true,
            filename,
            message: "File uploaded successfully.",
          });
      }
     
    }
    else {
        res.json({
            status: false,
            message: "file too large to upload",
          });
    }
  } catch (err) {
    console.error(err);
    res.status(400).send({ error: err.message  });
  }
};

module.exports.getFile = async(req,res)=>{
  try {
    const smartId = req.user.id;
    console.log(smartId);
    const file = await FileModel.find({smartId:req.user.id})
    console.log(file);
    res.json(file);
  } catch (error) {
    console.log(error);
    res.json(error)
  }
}
// module.exports.getAllFilesController = async (req, res, next) => {
//   try {
//     const files = await FileModel.find({}, { _id: 1, filename: 1 });
//     res.json({ files });
//   } catch (err) {
//     console.error(err);
//     res.status(400).send({ error: err.message });
//   }
// };

// module.exports.getPdfByIdController = async (req, res, next) => {
//   try {
//     const file = await FileModel.findOne({ _id: req.params.id });
//     res.json({ status: true, file });
//   } catch (err) {
//     console.error(err);
//     res.status(400).send({ error: err.message });
//   }
// };

// module.exports.deleteAllPdfsController = async (req, res, next) => {
//   try {
//     const file = await FileModel.deleteMany({});
//     res.json({ status: true, msg: "deleted all" });
//   } catch (err) {
//     console.error(err);
//     res.status(400).send({ error: err.message });
//   }
// };

// module.exports.deleteByIdController = async (req, res, next) => {
//   try {
//     const file = await FileModel.deleteOne({ _id: req.params.id });
//     res.json({ status: true, msg: "deleted single pdf" });
//   } catch (err) {
//     console.error(err);
//     res.status(400).send({ error: err.message });
//   }
// };
