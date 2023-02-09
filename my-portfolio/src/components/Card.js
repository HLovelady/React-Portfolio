import React from "react";

function Card({data}) {
    return (
        <div className="card">
            <div className="card_body">
                <h3 className="project_name">Project</h3>
                {data.map((user) => (
                    <div className="card_data" key={data.id}>
                        {`${data.image}`}
                </div>
                ))};
            </div>
        </div>
    );
}

export default Card;