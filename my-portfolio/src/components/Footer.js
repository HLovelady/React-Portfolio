import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import  {AiFillGithub} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div 
      styles={{ 
        position: "fixed", 
        bottom: 0, 
        width: "100%", 
        display: "flex", 
        flex:"space-between"}}>
      <ul className="footer-icons">
        {/* GitHub Icon Link */}
        <li className="social-icons">
          <a
            href="https://github.com/HLovelady"
            style={{ color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub />
          </a>
        </li>
         {/* LinkedIn Icon Link */}
        <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/haylee-lovelady/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
      </ul>
    </div>
  );
}

export default Footer;
