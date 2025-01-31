import React, { Component } from 'react'
import AboutUs from './AboutUs'
import Form from './Form'
import Card from './Card'

export default class CardsContainer extends Component {
    render() {
        return (
            <>
                
                <div class="row p-2 m-2" id="body-container">
                    <div class="col-3 p-5 pt-4 pb-3 mb-3 lh-lg" id="aboutUs">
                        <AboutUs/>
                    </div>

                    <div class="col-9">
                        <div class="row" id="addNew">
                        <button type="button" className="btn btn-success col-2" id='post-a-card' onClick={() => this.props.onHandleShowForm(true)}>Post a Card</button>
                        </div>
                        <div class="row " id="cards-container">
                            <Card/>
                        </div>
                    </div>
                </div>
                <div>{this.props.showForm && <Form onHandleShowForm = {this.props.onHandleShowForm} /> }</div>
            </>
        )
    }
}