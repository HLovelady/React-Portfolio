import React, { useState } from "react";


function Card(props) {

  return (
    // <div
    //   className="card"
    //   onClick={handleClick}
    //   // style={{
    //   //   backgroundImage: ``,
    //   // }}
    // >
    <div
      className="card"
      style={{
        justifyContent: "center",
        padding: "10px",
        width:"300px",
        height:"400px",
      }}
    >
      <h1
        style={{ display: "flex", fontSize: "20px", justifyContent: "center" }}
      >
        {props.bingo.title}
      </h1>
      <img
        src={props.bingo.image}
        alt={props.bingo.title}
        className="proj-img"
        style={{ width: "300px" }}
      />
      <p className="tech">
        <strong>Tech Focus:</strong>
        {props.bingo.tech}
      </p>
      <p className="area">
        <strong>Focus Area: </strong>
        {props.bingo.area}
      </p>

      <button
        onClick=""
        className="github"
        style={{
          display:"grid",
          placeItems:"center",
          textAlign: "center",
          backgroundColor: "#2D2E32",
          borderColor: "white",
          borderRadius: "5px",
          borderWidth: "2px",
          marginBottom: "5px"
        }}
      >
        <a
          className="github"
          href={props.bingo.gitHub}
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
