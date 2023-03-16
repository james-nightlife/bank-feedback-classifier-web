/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react';
import { FiCode, FiMenu, FiX } from "react-icons/fi";
import './Header.scss'

function Header() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <div className="header">
            <div className="header-con">
                <div className="element-con">
                    <div className="logo-container">
                    <a href= "#"> Hello <FiCode/></a> 
                    </div>
                    <ul className= {click ? "menu active" : "menu"}>
                        <li className="menu-link" onClick={closeMobileMenu}>
                            <a href="#">ABOUT</a>
                        </li>
                        <li className="menu-link" onClick={closeMobileMenu}>
                            <a href="#">CONTACT</a>
                        </li>
                    </ul>
                    <div className="mobile-menu" onClick={handleClick}>
                        {click ?(
                            <FiX/>
                        ) : (
                            <FiMenu/>
                        )}

                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Header