import './App.css';
import React, { Component } from 'react';
import Header from './Components/Header';
import CardsContainer from './Components/CardsContainer';
import AboutUs from './Components/AboutUs'
import FeaturesSection from './Components/FeaturesSection';
import Footer from './Components/Footer';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
    };
    this.onHandleShowForm = this.onHandleShowForm.bind(this);
  }

  onHandleShowForm(value) {
    this.setState({ showForm: value });
  }

  render() {
    return (
      <div className="app-container">
        {/* Parallax Header */}
        <div className="parallax-header">
          <Header />
        </div>

        {/* Main Content */}
        <div className="main-content">
          <AboutUs />
          <FeaturesSection />
          <CardsContainer
            showForm={this.state.showForm}
            onHandleShowForm={this.onHandleShowForm}
          />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    );
  }
}