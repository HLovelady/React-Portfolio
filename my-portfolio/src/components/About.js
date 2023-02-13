import React from "react";

const styles = {
    green: {
      color: "#4dba87",
    },
  };


function About() {
    return (
        <div>
            <h2 className="title">LET ME INTRODUCE MYSELF</h2>
            <p>My field of Interest's are in 
               
                
                <i style={styles.green}>Frontend Development</i>
                
                utilizing 
                <i style={styles.green}>React framework.</i> 
                
                </p>
        </div>
    );
}

export default About;