import React, { useEffect, useState } from "react";
import "./Register.css"



import classes from "./Header.module.scss";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";


const Register = ({closeModal}) => {

   

   
    

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
                    <label htmlFor="fname">First Name</label>
                    <input name="fname" />
                </div>
                <div className='form-group'>
                    <label htmlFor="lname">Last Name</label>
                    <input name="lname" />
                </div>
                <div className='form-group'>
                    <label htmlFor="email">Email</label>
                    <input name="email" />
                </div>
                <div className='form-group'>
                    <label htmlFor="grade">Grade</label>
                    <input name="grade" />
                </div>
                <div className='form-group'>
                    <label htmlFor="username">Username</label>
                    <input name="username" />
                </div>
                <div className='form-group'>
                        <label htmlFor="password">Password</label>
                        <input type="password" input name="password" />
                </div>
                <button type="submit" className='btnregister' >Register</button><br></br>
               
                    
            </form>
            <button onClick={() => setModelOpen(true)} className="btnlogin">Login</button>    
                    {modelOpen && < Login closeModal={() =>{setModelOpen(false)}}/>}
        </div>
      
    </div>
  );
};

export default Register;
