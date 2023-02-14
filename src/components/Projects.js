import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import data from "../Data/projectData";
import Project from "./Pages/Project";



function Projects(props) {
  const [selected, setSelected] = useState({});
  const [show, setShow] = useState(false);
  const [showImage, setShowImage] = useState();
  const handleMouseEnter = () => setShowImage(true)
  const handleMouseLeave = () => setShowImage(false)

  const [project, setProject] = useState();

const projectpage = props

const [dataset, setDataset] = useState(data);

const handleClick = () => {
  setProject('')
  console.log('project clicked');
}


  useEffect(() => {
    // fetch API
    // fetch SERVER ROUTES
  }, []);





  return (
    <div
      className="project_cards stacked"
      style={{
        display: "grid",
        justifyItems: "center",
        rowGap: "30px",
        gridTemplateColumns: "1fr 1fr",
        Margin: "5px",
      }}
    >
      <div className="card-click" onClick={()=>{
        handleClick('')
      }}>
      {dataset.map((item) => (
        //console.log(item);
        // something logic happenin on item
        <Card
          bingo={item}
          className={item.id}
          setSelected={setSelected}
          key={item.id}
          />

      ))}


      {/* { selected ? (
            <Card data={selected} /> )
            : <></> } */}
    </div>  
    </div>
  );
}

export default Projects;
