import React from "react";
// import jsPDF from 'jspdf'

function Experience() {
  return (
    <div className="experience">
      <h1 className="title">Experience</h1>
<div>
      <div className="work-history">
        <h2>Work History.</h2>
        <div className="job">
          <div>
            <h4>04.2022 - Current</h4>
          </div>
          <div className="work">
            <h3>Advanced Support Consultant & Configuration Specialist</h3>
            <p>
              <strong>Bonterra Tech</strong> Austin, Tx
            </p>
          </div>
        </div>
      </div>
      <div className="skills"></div>
      <div className="education"></div>

      <button className="resume" style={{textAlign: 'center', backgroundColor: '#2D2E32', borderColor: 'none'}}>
        <a className="resume" href="../images/H-Lovelady-Resume.pdf" download="Haylee Lovelady Resume.pdf">
          Download Me!
        </a>
      </button>


    </div>
    </div>
  );
}

export default Experience;