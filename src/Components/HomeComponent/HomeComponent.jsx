import React from 'react';
import './HomeComponent.css'; // Import the CSS file
import img from '../../assets/Images/sec.jpeg'; // Adjust the path as needed

const HomeComponent = () => {
  return (
    <React.Fragment>
      <div className="background-container" style={{ backgroundImage: `url(${img})` }}>
        <div className="overlay">
          <h1 className="title">Welcome to Our College</h1>
          <h3 className="subtitle">Your future starts here. Learn more about our programs and events.</h3>
        </div>
      </div>
    </React.Fragment>
  );
}

export default HomeComponent;