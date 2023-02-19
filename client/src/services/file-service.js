
import { api } from "./index.js"
export const uploadFiles=(files=[])=>{
    const formData=new FormData()
    files.forEach(file=>formData.append('files',file))

    let config={
        headers:{
            "Content-Type":"multipart/form-data"
        }
    }
    return api.post('/user/files/upload',formData,config).then((res)=>res.data)
} 

export const getFiles=()=>{
    
    return api.get('/user/files/upload').then((res)=>res.data)
} 