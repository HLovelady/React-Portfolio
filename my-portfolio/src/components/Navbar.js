import React from 'react';
import '../styles/App.css';

const styles = {
// //     card: {
// //       margin: 20,
// //       background: '#e8eaf6',
// //     },
// //     heading: {
// //       background: '#9a74db',
// //       minHeight: 50,
// //       lineHeight: 3.5,
// //       fontSize: '1.2rem',
// //       color: 'white',
// //       padding: '0 20px',
// //     },
// *Potential style*      
green: {
   color: '#4dba87',
 }
};
  
  // In Navbar, we can assign a style from an object by using curly braces
  function Navbar() {
    return (
      <nav className="flex light-bg justify-space">
        <div>Haylee Lovelady</div>

        <ul className="flex white">
          <li style={styles.green}>
              <div>{"< Home />"}</div>
          </li>
          <li>
              <div>About Me.</div>
          </li>
        </ul>
      </nav>
    );
  }
  
  export default Navbar;
  