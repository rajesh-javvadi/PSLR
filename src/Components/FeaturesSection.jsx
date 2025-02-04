import React, { Component } from 'react';
// import './FeaturesSection.css';

export default class FeaturesSection extends Component {
  render() {
    return (
      <section className="features-section">
        <h2>Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>📝 Document Solutions</h3>
            <p>Save your problem-solving steps for future reference.</p>
          </div>
          <div className="feature-card">
            <h3>🔍 Organize Notes</h3>
            <p>Categorize your learning materials by topic or language.</p>
          </div>
          <div className="feature-card">
            <h3>📚 Reference Library</h3>
            <p>Store and access important references easily.</p>
          </div>
        </div>
      </section>
    );
  }
}