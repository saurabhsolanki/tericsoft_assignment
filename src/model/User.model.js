const { mongoose, Schema, model } = require("mongoose")

const AuthSchema = new Schema({
    name:{type: String, required: true},
    email:{type: String, required: true},
    password:{type: String, required: true}
    
})



const User = model("Auth",AuthSchema)
module.exports=User