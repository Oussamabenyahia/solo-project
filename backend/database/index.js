const mongoose = require("mongoose");
const mongoUri = "mongodb://127.0.0.1/JobSeekers";
mongoose.connect(mongoUri, { useUnifiedTopology: true, useNewUrlParser: true }).then(()=>{console.log("db mongo connected")}).catch(err=>console.log(err));


module.exports = mongoose

