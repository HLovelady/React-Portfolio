import React, { useState } from 'react';
import Home from "../components/Pages/Home";
import Project from "../components/Pages/Project";
import Experience from "../components/Pages/Experience";
import Contact from "../components/Pages/Contact";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/App.css';


function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Project') {
      return <Project />;
    }
    if (currentPage === 'Experience') {
      return <Experience />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    // return <Home />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}

    </div>



  );
}

export default App; 