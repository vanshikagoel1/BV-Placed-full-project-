const mongoose = require("mongoose");

mongoose.set('strictQuery', false);


const connectToMongo = () => {
  mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology : true,
  })
  .then(() => console.log("App connected to Mongo Successfully"))
  .catch((err) => console.log(err.message))
};

module.exports = connectToMongo;
