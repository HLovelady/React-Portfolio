import React, { useState } from "react";

// const [showImage, setShowImage] = useState();

// const handleMouseEnter = () => setShowImage(true)
// const handleMouseLeave = () => setShowImage(false)

function Card(props) {
  // console.log(props.bingo.image); // ---> { bingo: { } }
  // console.log(props.bingo);
  // const handleClick = (event) => {
  //   console.log("Clicked");

  //   console.log(event.target);
  //   console.log(event.target.textContent);
  //   let objData = event.target.textContent;
  //   console.log(objData);
  //   props.setSelected(objData);
  // };

  //   return (

  //     <div
  //       className="card"
  //       onClick={handleClick}
  //       style={{
  //         backgroundImage: `url(${props.bingo.image})`,
  //         backgroundSize: "cover"
  //       }}
  //     >
  //     <div  className=""  style={{
  //         backgroundImage: `url(${props.bingo.image})`,  backgroundSize: "cover"}}></div>
  //       <h1>{props.bingo.title}</h1>
  //       <p className="tech">Tech Focus: {props.bingo.tech}</p>
  //       <p className="area">Focus Area: {props.bingo.area}</p>
  //       <img
  //         className="proj-img"
  //         src={props.bingo.image}
  //         alt={props.bingo.title}
  //       />
  //     </div>
  //   );
  // }

  // export default Card;

  return (
    // <div
    //   className="card"
    //   onClick={handleClick}
    //   // style={{
    //   //   backgroundImage: ``,
    //   // }}
    // >
    <div className="card" style= {{display:"grid", justifyContent: "center",padding: "10px", gridColumn:"1"}}>
      <h1>{props.bingo.title}</h1>
      <img
        src={props.bingo.image}
        alt={props.bingo.title}
        className="proj-img"
        style={{ width: "300px" }}
      />
      <p className="tech"><strong>Tech Focus:</strong>{props.bingo.tech}</p>
      <p className="area"><strong>Focus Area: </strong>{props.bingo.area}</p>

      <button
        className="github"
        style={{
          textAlign: "center",
          backgroundColor: "#2D2E32",
          borderColor: "white",
          borderRadius: "5px",
          borderWidth: "2px",
        }}
      >
        <a
          className="github"
          src={props.bingo.gitHub}
          style={{
            fontWeight: "lighter",
            fontFamily: "Roboto Mono",
            color: "#4dba87",
          }}
        >
          GitHub
        </a>
      </button>
    </div>
  );
}

export default Card;
