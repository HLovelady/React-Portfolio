import React, { useState } from "react";
// import jsPDF from 'jspdf'
import Work from "../../components/Work";
import workData from "../../Data/workData";
import Education from "../../components/Education";
import educationData from "../../Data/educationData";
import Skills from "../../components/Skills";
import skillsData from "../../Data/skillsData";

function Experience() {
  const [workdataset, setWorkDataset] = useState(workData);
  const [skillsdataset, setSkillsDataset] = useState(skillsData);
  const [schooldataset, setSchoolDataset] = useState(educationData);

  return (
    <div className="experience">
      <h1 className="title">Experience</h1>
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
      <div className="resume-container" style={{ width: "75%", justifyContent:"center"}}>
        {/* Work experience section */}
        <div className="work-history">
          <h2>Work History.</h2>
          <div className="experience-content">
            {workdataset.map((item) => (
              //console.log(item);
              // something logic happenin on item
              <Work
                work={item}
                className={item.id}
                setSelected={setWorkDataset}
                key={item.id}
              />
            ))}
          </div>
        </div>

        {/* Education experience section */}
        <div className="education-history">
          <h2>Education History.</h2>
          <div className="experience-content">
            {schooldataset.map((item) => (
              //console.log(item);
              // something logic happenin on item
              <Education
                education={item}
                className={item.id}
                setSelected={setSchoolDataset}
                key={item.id}
              />
            ))}
          </div>
        </div>

        {/* Skills section */}
        <div className="skills-experience">
          <h2>Developed Skills.</h2>
          <div className="experience-content skills">
            {skillsdataset.map((item) => (
              //console.log(item);
              // something logic happenin on item
              <Skills
                skills={item}
                className={item.id}
                setSelected={setSkillsDataset}
                key={item.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
