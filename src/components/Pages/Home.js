import React from "react";
import Header from "../Header";
// import Projects from "../Projects";
import About from "../About";

function Home() {
  return (
    <div style={{ minHeight: "83vh"}}>
      {/* <Navbar /> */}
      <Header />
      {/* <Projects /> */}
      <About />
    </div>
  );
}

export default Home;
