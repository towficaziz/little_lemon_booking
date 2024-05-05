import React from "react";
import logo from "../images/Logo.png";

const Nav=() =>{
    return(
        <nav>
            <img src={logo} alt="Little Lemon Logo" ></img>
            <ul>
                <li><a>HOME</a></li>
                <li><a>ABOUT</a></li>
                <li><a>MENU</a></li>
                <li><a>RESERVATION</a></li>
                <li><a>ORDER ONLINE</a></li>
                <li><a>LOGIN</a></li>

            </ul>
        </nav>
    )
}

export default Nav;