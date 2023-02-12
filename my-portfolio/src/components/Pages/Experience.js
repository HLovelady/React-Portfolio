import React, { useState } from "react";
// import jsPDF from 'jspdf'
import Work from "../../components/Work";
import workData from "../../workData";

function Experience() {
  const [dataset, setDataset] = useState(workData);

  return (
    <div className="experience">
      <h1 className="title">Experience</h1>
      <div className="experience-content" style={{width:'75%'}}>
        <div className="work-history">
          <h2>Work History.</h2>
          <div className="job">
            {dataset.map((item) => (
              //console.log(item);
              // something logic happenin on item
              <Work
                work={item}
                className={item.id}
                setSelected={setDataset}
                key={item.id}
              />
            ))}
          </div>
        </div>
        <div className="skills"></div>
        <div className="education"></div>

        <button
          className="resume"
          style={{
            textAlign: "center",
            backgroundColor: "#2D2E32",
            borderColor: "none",
          }}
        >
          <a
            className="resume"
            href="../images/H-Lovelady-Resume.pdf"
            download="Haylee Lovelady Resume.pdf"
          >
            Download Me!
          </a>
        </button>
      </div>
    </div>
  );
}

export default Experience;
