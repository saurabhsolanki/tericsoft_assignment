const userdb = require('../model/User.model')
const jwt = require('jsonwebtoken')

exports.isAuth = async(req,res,next) =>{
    
      try {
        const token = req.headers.token;
        console.log("aitjtplem",token)
        if(token){
            const verifytoken = jwt.verify(token, 'SECRET1234');
                console.log("verifytoken",verifytoken)
        const rootUser = await userdb.findOne({_id:verifytoken._id});
        
        if(!rootUser) {throw new Error("user not found")}

        req.token = token
        req.rootUser = rootUser
        req.userId = rootUser._id

        next();
        }else{
            console.log("error")
        }
      } catch (error) {
        console.log(error)
      }
}