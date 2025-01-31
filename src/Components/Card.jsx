import React, { Component } from 'react'

export class Card extends Component {
    render() {
        return (
            <div class="card shadow col-4">
                <h5 class="card-header">Learning Card</h5>
                    <div class="card-body">
                        <h5 class="card-title">Question❔</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <div>
                    <button className='btn btn-success m-3 mt-1 me-0'>Edit</button>
                    <button className='btn btn-danger m-3 mt-1'>Delete</button>
                    </div>
                    <div class="card-footer text-body-secondary">
                        2 days ago
                    </div>
            </div>
        )
    }
}

export default Card