
const TOKEN_KEY="ACCESS_TOKEN_EXPRESS_SERVER"

export const saveUserTokenToLocalStroage=(token)=>{
    localStorage.setItem(TOKEN_KEY,JSON.stringify(token))
}


export const getUserTokenFromLocalStroage=()=>{
const token=localStorage.getItem(TOKEN_KEY)
   
   try {
    return  JSON.parse(token)
   } catch (error) {
    return ""
   }
}