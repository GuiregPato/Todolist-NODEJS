const mongoose = require("mongoose");
require ('dotenv').config()

const userDB = process.env.userDB
const passDB = process.env.passDB

const connectToDb = () => {
  mongoose.connect(
    `mongodb+srv://${userDB}:${passDB}@apicluster.tqi2k5w.mongodb.net`,
  ).then(()=>
    console.log("Mongodb Connected!"))
    .catch((err) => console.log("erro no Db", err));
};

module.exports = connectToDb;
