let express=require('express')
let router=express.Router()
let {createUser,fileUpload,getFile}=require("../Controllers/userController")
let multer=require('multer')
let {authentication} =require('../MiddleWare/auth')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        const name=`${Date.now()}_${file.originalname}`
      cb(null, name)
    }
  })
  
  const fileUploadMiddleware = multer({ storage: storage })

 

router.post('/user/register',createUser)

router.post('/user/files/upload',fileUploadMiddleware.any(),authentication, fileUpload)

 router.get("/user/files/upload",authentication,getFile)

// for worng route================ =============>

router.all('/*/', async function (req, res) {
    return res.status(404).send({ status: false, message: "Page Not Found" })
})

module.exports=router