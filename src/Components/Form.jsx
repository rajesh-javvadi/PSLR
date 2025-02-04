import React, { Component } from 'react';

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      solution: '',
      option: 'Other',
      notes: '',
      references: '',
    };
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  componentDidMount() {
    if (this.props.card) {
      this.setState({ ...this.props.card });
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.card !== this.props.card) {
      this.setState({
        question: this.props.card?.question || '',
        solution: this.props.card?.solution || '',
        option: this.props.card?.option || 'Other',
        notes: this.props.card?.notes || '',
        references: this.props.card?.references || '',
      });
    }
  }

  onSubmitHandler(event) {
    event.preventDefault();
    const cardData = { ...this.state };

    if (this.props.cardIndex !== null) {
      this.props.onEditCard(cardData, this.props.cardIndex);
    } else {
      this.props.onAddCard(cardData);
    }

    this.props.onHandleShowForm(false);
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <form className="p-3 m-3 form-popup w-75" onSubmit={this.onSubmitHandler}>
        <div className="mb-3">
          <label htmlFor="question" className="form-label">Question❔</label>
          <input
            type="text"
            className="form-control"
            id="question"
            name="question"
            value={this.state.question}
            onChange={this.handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="solution" className="form-label">Solution</label>
          <input
            type="text"
            className="form-control"
            id="solution"
            name="solution"
            value={this.state.solution}
            onChange={this.handleChange}
          />
        </div>
        <div className="mb-2">Content Type</div>
        <select
          className="form-select mb-3"
          name="option"
          value={this.state.option}
          onChange={this.handleChange}
        >
          <option value="TypeScript">TypeScript</option>
          <option value="JavaScript">JavaScript</option>
          <option value=".NET WEB API">.NET WEB API</option>
          <option value="C#">C#</option>
          <option value="HTML && CSS">HTML && CSS</option>
          <option value="Other">Other</option>
        </select>
        <div className="mb-3">
          <label className="form-label">Notes</label>
          <textarea
            className="form-control"
            name="notes"
            value={this.state.notes}
            onChange={this.handleChange}
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">References</label>
          <textarea
            className="form-control"
            name="references"
            value={this.state.references}
            onChange={this.handleChange}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          {this.props.card ? 'Update' : 'Submit'}
        </button>
        <button
          className="btn btn-success ms-3"
          onClick={() => this.props.onHandleShowForm(false)}
        >
          Cancel
        </button>
      </form>
    );
  }
}

export default Form;