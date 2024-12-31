import React from 'react';
import '../styles/About.css'; // Import your CSS file for styling

const About = () => {
  return (
    <section className="about-us-section">
      <div className="containerabout">
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet leo vitae quam maximus cursus.
        </p>
        <p>
          Duis vehicula odio vitae lacus viverra lacinia. Nam commodo libero eu felis auctor vestibulum.
        </p>
        <button className="btn">Learn More</button>
      </div>
    </section>
  );
}

export default About;
