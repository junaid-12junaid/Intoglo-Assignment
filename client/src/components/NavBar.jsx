import React, { useContext, useState } from "react";
import { AuthContext, useAuth } from "../context/AuthContext";

import { loginSuccess } from "../services/auth-service";
import { saveUserTokenToLocalStroage } from "../utils/localStroage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function NavBar(){

    const {login,logout,user}=useAuth()
    const handleLogin=()=>{

       login((res)=>{
       
       const {email,displayName,uid,photoURL,phoneNumber}=res.user
      
       const payload={
        email,displayName,uid,photoURL,phoneNumber
       }
       loginSuccess(payload).then(res=>{
      
        saveUserTokenToLocalStroage(res.accessToken)
       })
       })
    }
    const handleLogout=()=>{

       logout()
    }

   function DispalyProfile(){
    
    
    return (
      <div>
        <h1>User Profile</h1>
        <div className='mt-3'>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>email</th>
                <th>photoURL</th>
  
                </tr>
                </thead>
            <tbody>
     
                      <tr >
                      <td>{user.displayName}</td>
                          <td>{user.email}</td>
                          <td>{user.photoURL}</td>
                          
                          </tr>
                  
  
              
            </tbody>
          </table>
          
          </div>
      </div>
    )
    }

    return(
      <Router>
        <nav className="navbar navbar-expand bg-dark navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">File Uploader</a>

    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        {
            user&&(
                <a className="nav-link "  > Hello {user.displayName}</a>
            )
        }
        {
          user&&(
            <a className="nav-link " onClick={DispalyProfile}><Link to="/profile">Profile </Link></a>
          )
        }
        {
          user&&(
            <a className="nav-link " onClick={DispalyProfile}><Link to="/">Home Page </Link></a>
          )
        }
        {!user && (
            <a className="nav-link active" aria-current="page" onClick={handleLogin} >Login</a>
        )}
        {
            user&&(
                <a className="nav-link active" aria-current="page" onClick={handleLogout} >Logout</a>
            )
        }
        
      </div>
    </div>
  </div>
</nav>

<Switch>

  <Route path="/profile"><DispalyProfile/></Route>
</Switch>

</Router>


    )
}