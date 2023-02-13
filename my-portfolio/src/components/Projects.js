import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import data from "../Data/projectData";



function Projects() {
  const [selected, setSelected] = useState({});
  const [show, setShow] = useState(false);

  const [dataset, setDataset] = useState(data);

  const [showImage, setShowImage] = useState();

const handleMouseEnter = () => setShowImage(true)
const handleMouseLeave = () => setShowImage(false)


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
  );
}

export default Projects;
