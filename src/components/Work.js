import React from "react";


function Work (props) {
    return (
        <div className="work-experience" style={{display: 'flex', alignItems:'baseline'}}>
            <div className="work-dates" style={{textAlign:'right'}}>
                <h4>{props.work.date1} -</h4>
                <h4>{props.work.date2}</h4>
            </div>
            <div className="work-content">
                <h3>{props.work.title}</h3>
                <h4>{props.work.company}</h4>
                <h4>{props.work.city}</h4>
            </div>
        </div>
    );
}

export default Work;