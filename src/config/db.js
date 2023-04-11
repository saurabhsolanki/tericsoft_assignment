const mongoose=require("mongoose")
mongoose.set("strictQuery", true);
require("dotenv").config();
const url = process.env.URL;
const connect=()=>{
    console.log('db connect success')
    return mongoose.connect(url)
}


module.exports = connect