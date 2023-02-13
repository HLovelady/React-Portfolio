import React from "react";
import headShot from '../images/headshot.png';


function Header() {
    return (
        <header>
            <div className="pic-bio">
                <img src={headShot} height={300} alt="haylee" className="headshot" /> 
                <div className="bio">
                    <h2>Hi, I'm Haylee!</h2>
                </div>
            </div>
        </header>
    );
}

export default Header;