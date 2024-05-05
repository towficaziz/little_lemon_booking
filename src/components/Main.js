// Main.js
import React from "react";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import Header from "./Header"; // Import Header component
import Booking from "./Booking";

const Main = () => {
    return (
        <main>
            <Router> {/* Wrap Header component in Router */}
                <Header />
                <Booking />
            </Router>
        </main>
    );
}

export default Main;
