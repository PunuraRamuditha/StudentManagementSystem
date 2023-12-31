import React, { useEffect, useState } from "react";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";


import classes from "./Header.module.scss";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";
import "./Login.css";
import Register from "./Register";


const Header = () => {
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

    // const ctaClickHandler = () => {
    //     menuToggleHandler();
    //    Navgate("/PageCTA")
    // };

    const[modalOpen, setModalOpen] = useState(false)

    return (
        <header className={classes.header}>
            <div className={classes.header__content}>
                <Link to="/" className={classes.header__content__logo}>
                    SMS
                </Link>
                <nav
                    className={`${classes.header__content__nav} ${
                        menuOpen && size.width < 768 ? classes.isMenu : ""
                    }`}
                >
                    <ul>
                        <li>
                            <Link to="/page-one" onClick={menuToggleHandler}>
                                Courses
                            </Link>
                        </li>
                        <li>
                            <Link to="/page-two" onClick={menuToggleHandler}>
                                Student
                            </Link>
                        </li>
                        <li>
                            <Link to="/page-three" onClick={menuToggleHandler}>
                                Enroll
                            </Link>
                        </li>
                    </ul>
                    <button onClick={() => setModalOpen(true)} className="btnlogin">Login</button>
                    </nav>
                    
                    {modalOpen && < Login closeModal={() =>{setModalOpen(false)}}/>}
                    
                <div className={classes.header__content__toggle}>
                    {!menuOpen ? (
                        <BiMenuAltRight onClick={menuToggleHandler} />
                    ) : (
                        <AiOutlineClose onClick={menuToggleHandler} />
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;