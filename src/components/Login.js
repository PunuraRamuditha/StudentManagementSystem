import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";


import Register from "./Register";
import "./Login.css";




const Login = ( { closeModal }) => {
    const Navgate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [size, setSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (size.width > 768 && menuOpen) {
            setMenuOpen(false);
        }
    }, [size.width, menuOpen]);

    const menuToggleHandler = () => {
        setMenuOpen((p) => !p);
    };

    const[modalOpen, setModalOpen] = useState(false)

  return (
    <div className="modal-container" 
    onClick={(e) => {
        if (e.target.className === "modal-container")closeModal();}}>
        <div className='modal'>
            <form>
                <div className='form-group'>
                    <h2>Login Form</h2>
                </div>
                    <div className='form-group'>
                        <label htmlFor="username">Username</label>
                        <input name="Username" />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="password">Password</label>
                        <input type="password" input name="password" />
                    </div>
                    <button type="submit" className='btnlogin' >Login</button><br></br>
                    <button onClick={() => setModalOpen(true)} className="btnregister">Register</button>
                    {modalOpen && < Register closeModal={() =>{setModalOpen(false)}}/>}
                    
                
            </form>
        </div>
    </div>
  );
}

export default Login;
