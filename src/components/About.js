import React from "react";

const styles = {
  green: {
    color: "#4dba87",
  },
};

function About() {
  return (
    <div
      className="second-card"
      style={{
        display: "grid",
        placeItems: "center",
        marginTop: "20px",
        gridTemplateRows: "auto",
        width: "500px",
        placeContent: "center",
        padding: "20px",
        textAlign: "center"
      }}
    >
      <h2 className="title">LET ME INTRODUCE MYSELF</h2>

      <p style={{ marginTop: "30px" }}>
        I recently completed the &nbsp;
        <i style={styles.green}>Full Stack Web Development Boot Camp</i>

        &nbsp; through the &nbsp;
        <i style={styles.green}>University of Texas</i>
      </p>

      <p style={{ marginTop: "30px" }}>
        My field of interest is &nbsp;
        <i style={styles.green}>Frontend Development</i>
        &nbsp; utilizing &nbsp;
        <i style={styles.green}>React framework.</i>
      </p>
      <p>I also have experience working with </p>
      <i>HTML, CSS, Javascript, Node.JS, Express.JS, SQL, & APIs</i>
    </div>
  );
}

export default About;
