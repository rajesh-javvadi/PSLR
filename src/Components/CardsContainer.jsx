import React, { Component } from 'react'
import AboutUs from './AboutUs'
import Form from './Form'

export default class CardsContainer extends Component {
    render() {
        return (
            <>
                <div className='d-flex'>
                    <div className=''><AboutUs /></div>
                    <div className=' ms-3'>
                        <button type="button" className="btn btn-success my-2" onClick={() => this.props.onHandleShowForm(true)}>Post a Card +</button>
                        <div className=''></div>
                    </div>
                </div>
                <div>{this.props.showForm && <Form onHandleShowForm = {this.props.onHandleShowForm} /> }</div>
            </>
        )
    }
}
