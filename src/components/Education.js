import React from "react";

function Education(props) {
  return (
    <div
      className="education-experience"
      style={{ display: "flex", alignItems: "baseline" }}
    >
      <div className="education-date" style={{ textAlign: "right" }}>
        <h4>{props.education.date}</h4>
      </div>
      <div className="education-content">
        <h3>{props.education.title} {props.education.degree}</h3>
        <h4>{props.education.school} - {props.education.city}</h4>

      </div>
    </div>
  );
}

export default Education;
