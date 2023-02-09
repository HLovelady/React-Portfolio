import React from "react";


function Card(props) {
    console.log(props) // ---> { bingo: { } }

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
            >
            <h1>{props.bingo.title}</h1>

        </div>
    );
}

export default Card;