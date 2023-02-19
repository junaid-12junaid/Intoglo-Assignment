import axios from "axios"
import { getUserTokenFromLocalStroage } from "../utils/localStroage"

const api=axios.create({
    baseURL:'http://localhost:3001'
})

api.interceptors.request.use((config)=>{
    console.log("in Intercepter",config)
    config.headers.authorization=getUserTokenFromLocalStroage()
    return config
})
export {
    api
}