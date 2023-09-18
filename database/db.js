const mongoose = require("mongoose");

const connectToDb = () => {
  mongoose.connect(
    "mongodb+srv://Guireg:bjGagxhk!aHA9D8@apicluster.tqi2k5w.mongodb.net/",
  ).then(()=>
    console.log("Mongodb Connected!"))
    .catch((err) => console.log("erro no Db", err));
};

module.exports = connectToDb;
