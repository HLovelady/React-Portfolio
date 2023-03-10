import React, { useState } from "react";
// import jsPDF from 'jspdf'
import Work from "../../components/Work";
import workData from "../../Data/workData";
import Education from "../../components/Education";
import educationData from "../../Data/educationData";
import Skills from "../../components/Skills";
import Footer from "../../components/Footer";
import skillsData from "../../Data/skillsData";
import Button from 'react-bootstrap/Button';
import Pdf from "../../images/Haylee_Lovelady_Resume.pdf";

function Experience() {
  const [workdataset, setWorkDataset] = useState(workData);
  const [skillsdataset, setSkillsDataset] = useState(skillsData);
  const [schooldataset, setSchoolDataset] = useState(educationData);

  return (
    <>
    <div
      className="experience"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection:"column",

      }}
    >

      <h1 className="title">Experience</h1>
      <button
        className="resume"
        style={{
          // display: "grid",
          textAlign: "center",
          backgroundColor: "#2D2E32",
          borderColor: "white",
          borderRadius: "5px",
          borderWidth:"2px",
          margin:"15px"
        }}
      >
        <a
          className="resume"
          // href="../../images/Haylee_Lovelady_Resume.pdf"
          href={Pdf}
          download="Haylee Lovelady Resume.pdf"
          style={{
            fontWeight: "lighter",
            fontFamily: "Roboto Mono"
          }}
        >
          Download Me!
        </a>
      </button>
      </div>
      <div
        className="resume-container"
        style={{  
        display: "grid",
        gridTemplateColumns:"1fr 2fr",
        gridGap:"20px",
        padding:"0 50px",
        gridAutoRows:"1fr",

        }}
      >
        {/* Skills section */}
        <div
          className="skills-experience"

        >
          <h2>Developed Skills.</h2>
          <div
            className="experience-content skills"
            style={{ 
              borderRadius: "8px",
              textAlign: "center",  
            }}
          >
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

          {/* Work experience section */}
         
        </div>
        
      
      <div>
          <div
            className="work-history"
 
          >
            <h2>Work History.</h2>
            <div className="experience-content" style={{ borderRadius: "8px"}}>
              {workdataset.map((item) => (
                //console.log(item);
                // something logic happening on item
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
            <div className="experience-content" style={{ borderRadius: "8px"}}>
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
      </div>
    </div>
    </>
  );
}

export default Experience;
