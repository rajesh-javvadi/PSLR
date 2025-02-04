import React, { Component } from 'react';

export class Card extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    const { card, onEdit, onDelete } = this.props;
    return (
      <div className="card shadow col-4 m-2 hover-effect">
        <div className='card-content content'>
          <h5 className="card-header heading">Learning Card ({card.option})</h5>
          <div className="card-body">
            <h5 className="card-title">Question❔</h5>
            <p className="card-text">{card.question}</p>
            <h5 className="card-title">Solution</h5>
            <p className="card-text">{card.solution}</p>
            <h5 className="card-title">Notes</h5>
            <p className="card-text">{card.notes}</p>
            <h5 className="card-title">References</h5>
            <p className="card-text">{card.references}</p>
          </div>
          <div>
            <button className="btn btn-success m-3 mt-1 me-0" onClick={onEdit}>
              Edit
            </button>
            <button className="btn btn-danger m-3 mt-1" onClick={onDelete}>
              Delete
            </button>
          </div>
        </div>

        {/* <div className="card-footer text-body-secondary">2 days ago</div> */}
      </div>
    );
  }
}

export default Card;