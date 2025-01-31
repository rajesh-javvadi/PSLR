import React, { Component } from 'react'

export default class LearningCard extends Component {
    render() {
        return (
            <div>
                <div class="card">
                    <h5 class="card-header">Learning Card</h5>
                    <div class="card-body">
                        <h5 class="card-title">Question❔</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <div class="card-footer text-body-secondary">
                        2 days ago
                    </div>
                </div>
            </div>
        )
    }
}
