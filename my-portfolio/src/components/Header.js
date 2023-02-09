import React from "react";
import Navbar from "./Navbar";
import headShot from '../images/headshot.png'

function Header() {
    return (
        <header>
            <Navbar />
            <div>
                <img src={headShot} alt="haylee"  /> 
            </div>
        </header>
    );
}

export default Header;