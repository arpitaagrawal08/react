import React ,{useState,useContext} from "react";
import UserContext from "../context/UserContext";
export default function Login(){
const [username,setuser]=useState('')
const [password,setpass]=useState('')
const {setUser}=useContext(UserContext)

//data bhejne ki baat
    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({username,password})
    }
    return(
        <>
    <h2>Login</h2>
    <input type='text' value={username} 
    onChange={(e)=> setuser(e.target.value)}
    placeholder="username"/>
    <input type='text' value={password} 
    onChange={(e)=> setpass(e.target.value)} placeholder="Password"/>
<button onClick={handleSubmit}>Submit</button>
        </>
    )
}