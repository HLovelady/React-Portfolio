import React from "react";
import Card from "../components/Card";
import data from "../data";


function Projects() {
    return (
        <div className="project_cards">
            <Card data={data}/>
        </div>
    );
}

export default Projects;