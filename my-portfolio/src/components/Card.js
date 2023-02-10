import React from "react";



function Card(props) {
    console.log(props.bingo.image) // ---> { bingo: { } }
console.log(props.bingo)
    const handleClick = (event) => {
        console.log("Clicked");

        console.log(event.target);
        console.log(event.target.textContent);
        let objData = event.target.textContent;
        console.log(objData);
        props.setSelected(objData);

    }

    return (

        <div 
            className="card" 
            onClick={handleClick}
            style={{ backgroundImage: `url(${props.bingo.image})`
                 }}
            >
            <h1>{props.bingo.title}</h1>
            <p className="tech">Tech Focus: {props.bingo.tech}</p>
            <p className="area">Focus Area: {props.bingo.area}</p>
            <img className="proj-img" src= {props.bingo.image} alt={props.bingo.title} />

        </div>
    );
}

export default Card;