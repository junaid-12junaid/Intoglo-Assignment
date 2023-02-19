import React from "react";
import LoginMessage from "../components/LoginMessage";
import { useAuth } from "../context/AuthContext";
import FilesPage from "./FilesPage";

export default function HomePage(){
    const {user}=useAuth()
    return user? <FilesPage/>:<LoginMessage/>
    
}