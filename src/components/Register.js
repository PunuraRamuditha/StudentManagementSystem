import React, { useEffect, useState } from "react";
import "./Register.css"
import { useNavigate } from "react-router";
import Login from "./Login";


const Register = ({closeModal}) => {
    const [fname, setFullName] = useState(null);
    const [email, setEmail] = useState(null);
    const [grade, setGrade] = useState(null);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "fullname"){
            setFullName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "grade"){
            setGrade(value);
        }
        if(id === "username"){
            setUsername(value);
        }
        if(id === "password"){
            setPassword(value);
        }
      }
      const handleSubmit  = () => {
        console.log(fname,email,grade,username,password);
        if (fname && email && grade && username && password){
          fetch(' http://localhost:8000/Data' , {
              method: "POST",
              headers: {"Content-type" : "application/json"},
              body: JSON.stringify({ fname, email, grade, username, password})
          }).then(() => navigate("/Home"))
     }
    }

    const[modelOpen, setModelOpen] = useState(false)


  return (
    
    <div className="model-container"
    onClick={(e) => {
        if (e.target.className === "model-container")closeModal();}}>
    <div className='model'>
        <form>
            <div className='form-group'>
                <h2>Register</h2>
            </div>
                <div className='form-group'>
                    <label htmlFor="fname">Full Name</label>
                    <input type="text" value={fname} onChange = {(e) => handleInputChange(e)} id="fullname" placeholder="Enter your Full Name"/>
                </div>
                <div className='form-group'>
                    <label htmlFor="email">Email</label>
                    <input type="text" value={email} onChange = {(e) => handleInputChange(e)} id="email" placeholder="Enter your Email"/>
                </div>
                <div className='form-group'>
                    <label htmlFor="grade">Grade</label>
                    <input type="text" value={grade} onChange = {(e) => handleInputChange(e)} id="grade" placeholder="Enter your Grade"/>
                </div>
                <div className='form-group'>
                    <label htmlFor="username">Username</label>
                    <input type="text" value={username} onChange = {(e) => handleInputChange(e)} id="username" placeholder="Enter username"/>
                </div>
                <div className='form-group'>
                        <label htmlFor="password">Password</label>
                        <input type="password" value={password} onChange = {(e) => handleInputChange(e)} id="password" placeholder="Enter Password"/>
                </div>
                <div className='form-group'>
                        <label htmlFor="password">Confirm Password</label>
                        <input type="password" value={password} onChange = {(e) => handleInputChange(e)} id="password" placeholder="Confirm Password"/>
                </div>
                <button onClick={()=>handleSubmit()} type="submit" class="btnregister">Register</button>
               
                    
            </form>
            <button onClick={() => setModelOpen(true)} className="btnlogin">Login</button>    
                    {modelOpen && < Login closeModal={() =>{setModelOpen(false)}}/>}
        </div>
      
    </div>
  );
};

export default Register;
