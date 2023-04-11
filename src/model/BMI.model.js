const mongoose=require("mongoose")


const bmiSchema = new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId,  ref:"Auth", required:true},
    height:{type:String, required:true,},
    weight:{type:String, required:true,},
    bmi:{type:String, required:true,}
})


const  BMI=mongoose.model("bmi", bmiSchema)
module.exports=BMI