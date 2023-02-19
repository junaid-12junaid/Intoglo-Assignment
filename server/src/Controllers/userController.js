const userModel = require("../Models/userModel")
const { isValid,isvalidMobile, isValidName, isvalidEmail, keyValid } = require('../Validator/validation')
const fileModel=require('../Models/fileModel')



const jwt = require('jsonwebtoken')

const createUser = async function (req, res) {
    try {
        const data = req.body
       
        if (!keyValid(data)) return res.status(400).send({ status: false, message: "Please Enter data to Create the User" })
       

        const { displayName, email,phoneNumber,photoURL,uid } = data

        const res1={}
        if (!isValid(displayName)) return res.status(400).send({ status: false, message: "displayName is mandatory and should have non empty String" })

        if (!isValidName.test(displayName)) return res.status(400).send({ status: false, message: "Please Provide displayName in valid formate and Should Starts with Capital Letter" })

        res1.displayName=displayName

        if (!isValid(email)) return res.status(400).send({ status: false, message: "email is mandatory and should have non empty String" })

        if (!isvalidEmail.test(email)) return res.status(400).send({ status: false, message: "email should be in  valid Formate" })

        res1.email=email

        if(phoneNumber!==null){
            if (!isvalidMobile.test(phoneNumber)) return res.status(400).send({ status: false, message: "phoneNumber should be in  valid Formate" })

        if (await userModel.findOne({ phoneNumber })) return res.status(400).send({ status: false, message: "This phoneNumber is already Registered Please give another phoneNumber or Login" })

            res1.phoneNumber=phoneNumber
        }

        
        
       
        if (!isValid(uid)) return res.status(400).send({ status: false, message: "uid is mandatory and should have non empty String" })

        res1.uid=uid
        res1.photoURL=photoURL
        let user=await userModel.findOne({ email })
        if (!user){
            
              user = await userModel.create(res1)
        } 

        const token = jwt.sign({
            userId: user._id.toString(),
            uid:user.uid
        }, "Intoglo", { expiresIn: '25h' })

        res.setHeader("x-api-key", token)

      

       return res.status(200).send({ status: true, message: "User login successfull", accessToken:token })

    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
}

const fileUpload = async function (req, res) {
    try {
        let userId=req.decodedToken.userId
        const files=req.files.map(({mimetype,originalname,filename,path,size})=>{
            return {
                mimetype,originalname,filename,path,size,userId
            }
        })
  
        let data=await fileModel.create(files)

        return res.status(200).send({message:"uploading file created",data:data})
    } catch (error) {
        console.log(error.message)
        return res.status(500).send({ status: false, message: error.message })
        
    }
}




const getFile = async function (req, res) {
    try {
        
  
        let data=await fileModel.find()

        return res.status(200).send({message:"getting the  files",data:data})
    } catch (error) {
        console.log(error.message)
        return res.status(500).send({ status: false, message: error.message })
        
    }
}

 





module.exports = { createUser ,fileUpload,getFile}