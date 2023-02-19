const jwt = require("jsonwebtoken")

const authentication = function (req, res, next) {
    try {
      let token = req.headers.authorization
      if (!token) return res.status(401).send({ status: false, message: "Please Login" });
        
      
        
        const decodedToken=jwt.verify(token,"Intoglo")
      
            req['decodedToken']=decodedToken
            
            next()

    } catch (error) {
      if (error.message=="invalid token"){  
        return res.status(403).send({ status: false, message: "token is invalid" });
      }
   
        if(error.message=="jwt expired"){
        return res.status(404).send({status:false,message:"Please Login once again, the token has expired"})
      }

        if(error.message=="invalid signature"){
        return res.status(403).send({status:false,message:"token is invalid"})
      }

    return res.status(500).send({ status: false, Error: error.message });
    }
  };
   
module.exports= {authentication}