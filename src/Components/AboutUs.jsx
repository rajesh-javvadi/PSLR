import React, { Component } from 'react';
// import './AboutSection.css';

export default class AboutUs extends Component {
  render() {
    return (
      <section className="about-section parallax-section">
        <div className="about-content">
          <h2>About PSLR</h2>
          <p>
            PSLR is a platform designed to help you document and organize your
            technical learning journey. Whether you're solving problems, taking
            notes, or referencing materials, PSLR makes it easy to keep track of
            everything in one place.
          </p>
        </div>
      </section>
    );
  }
}