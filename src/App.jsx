import './App.css';

import React, { Component } from 'react'
import Header from './Components/Header';
import CardsContainer from './Components/CardsContainer';

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       showForm : false,
    }
    this.onHandleShowForm = this.onHandleShowForm.bind(this);
  }

  onHandleShowForm(value) {
    this.setState({showForm:value});
  }

  render() {
    return (
      <>
        <Header/>
        <CardsContainer showForm = {this.state.showForm} onHandleShowForm = {this.onHandleShowForm} />
      </>
    )
  }
}

