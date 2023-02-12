import React, {useState} from "react";
import projectData from "../../Data/projectData";

function Project() {
    return (
      <div className="projectContainer">
        <img></img>
        <h2>Project Name</h2>
        <div className="project-content">
            <p>GitHub Link</p>
            <p>Deployed App Link</p>
            <p>About Project</p>
        </div>
      </div>
    );
  }
  
  export default Project;