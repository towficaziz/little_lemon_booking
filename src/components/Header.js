import React from "react";
import { Link } from "react-router-dom";
import '../App.css';
import bannerpic from "../images/restaurantFood.jpg";

const Header =()=>{
    return(
        <header>
            <section>
            <div>
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes servred with a modern twist.</p>
            <Link to="/Booking"><button aria-label="On Click">Reserve Table</button></Link>
            </div>
            <div>
                <img src={bannerpic} />
            </div>
            </section>
        </header>
    )

}

export default Header;