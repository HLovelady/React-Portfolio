import React from "react";
import Navbar from "./Navbar";
import headShot from '../images/headshot.png'

function Header() {
    return (
        <header>
            <Navbar />
            <div className="pic-bio">
                <img src={headShot} height={300} alt="haylee" className="headshot" /> 
                <div>bio</div>
            </div>
        </header>
    );
}

export default Header;