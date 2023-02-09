import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import data from "../data";


function Projects() {

    const [selected, setSelected] = useState({});
    const [show, setShow] = useState(false);

    const [dataset, setDataset] = useState(data);

    useEffect(() => {
        // fetch API 
        // fetch SERVER ROUTES

    }, []);

    return (
        <div className="project_cards">
            {
                dataset.map(item => (
                    //console.log(item);
                 // something logic happenin on item   
                    <Card bingo={item} className={item.id} setSelected={setSelected}/>
                ))
            }


            {/* { selected ? (
            <DetailCard data={selected} /> )
            : <></> } */}
        </div>
    );
}

export default Projects;