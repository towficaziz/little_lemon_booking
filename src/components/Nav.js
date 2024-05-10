import React from "react";
import logo from "../images/Logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Nav=() =>{
    const [activeItem, setActiveItem] = useState('HOME'); // Initialize active menu item

    return (
        <nav className="navigation">
            <div>
                <img src={logo} alt="Little Lemon Logo" />
            </div>
            <div className="menu">
                <ul>
                    <li><Link to="/" onClick={() => setActiveItem('HOME')} className={activeItem === 'HOME' ? 'active' : ''}>Home</Link></li>
                    <li><Link to="/about" onClick={() => setActiveItem('ABOUT')} className={activeItem === 'ABOUT' ? 'active' : ''}>About</Link></li>
                    <li><Link to="/menu" onClick={() => setActiveItem('MENU')} className={activeItem === 'MENU' ? 'active' : ''}>Menu</Link></li>
                    <li><Link to="/Booking" onClick={() => setActiveItem('RESERVATION')} className={activeItem === 'RESERVATION' ? 'active' : ''}>Reservation</Link></li>
                    <li><Link to="/order-online" onClick={() => setActiveItem('ORDER ONLINE')} className={activeItem === 'ORDER ONLINE' ? 'active' : ''}>Order Online</Link></li>
                    <li><Link to="/login" onClick={() => setActiveItem('LOGIN')} className={activeItem === 'LOGIN' ? 'active' : ''}>Login</Link></li>
                </ul>
            </div>
        </nav>
    );
}


export default Nav;


                /* <ul>
                    <li><a>HOME</a></li>
                    <li><a>ABOUT</a></li>
                    <li><a>MENU</a></li>
                    <li><a>RESERVATION</a></li>
                    <li><a>ORDER ONLINE</a></li>
                    <li><a>LOGIN</a></li>

                </ul> */