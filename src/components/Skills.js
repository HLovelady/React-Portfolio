import React from "react";


function Skills (props) {
    return (
        <div className="developed-skills" style={{display: 'flex', alignItems:'baseline'}}>
            <ul className="skills-content">
                <li>{props.skills.skill}</li>
            </ul>
        </div>
    );
}

export default Skills;