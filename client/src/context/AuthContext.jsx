import React, { useContext, useEffect, useState } from 'react'
import "../firebase"

import { GoogleAuthProvider,getAuth,signInWithPopup,onAuthStateChanged,signOut} from "firebase/auth";


const authProvider = new GoogleAuthProvider();

const AuthContext=React.createContext({})
const auth=getAuth()

const useAuth=()=>{
    return useContext(AuthContext)
}
export default function AuthContextProvider({children}) {
    const[user,setUser]=useState()
    const login=(callback=()=>{})=>{
        console.log("Login from Auth context")
        signInWithPopup(auth,authProvider).then(res=>{
            if(res){
                callback(res)
                const user=res.user
                setUser(user)
            }
        })
    }

    useEffect(()=>{
      const unsubscribe= onAuthStateChanged(auth,(user)=>{
         
         setUser(user)
        })

       return ()=>{
            unsubscribe()
        }
    },[])
    const logout=()=>{
        console.log("logout from Auth context")
        signOut(auth)
    }

  return (
    <AuthContext.Provider  value={{login,logout,user}}>
    {children}
    </AuthContext.Provider>
  )
}


export {
    useAuth
}
