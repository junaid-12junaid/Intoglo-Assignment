
import { api } from "./index.js"
export const loginSuccess=(user)=>{
    return api.post('/user/register',user).then(res=>res.data)
}