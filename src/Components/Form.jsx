import React, { Component } from 'react'

export class Form extends Component {

  constructor(props) {
    super(props)
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }
  onSubmitHandler(event) {
    event.preventDefault();
  }
  render() {
    return (
      <form className=' p-3 m-3 form-popup'>
        <div className="mb-3">
          <label htmlFor="question" className="form-label">Enter your Question❔</label>
          <input type="text" className="form-control" id="question" name='question'  />
        </div>
        <div className="mb-3">
          <label htmlFor="solution" className="form-label">Enter your Solution</label>
          <input type="text" className="form-control" id="solution" name='solution' />
        </div>
        <div className='mb-2'>Choose your content type language</div>
        <select className="form-select mb-3"  name='option'>
          <option value="TypeScript">TypeScript</option>
          <option value="JavaScript">JavaScript</option>
          <option value=".NET WEB API">.NET WEB API</option>
          <option value="C#">C#</option>
          <option value="HTML && CSS">HTML && CSS</option>
          <option selected value="Other">Other</option>
        </select>
        <div className="mb-3">
          <label className="form-label">Notes</label>
          <textarea className="form-control"  name='notes'></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">References</label>
          <textarea className="form-control"  name='references'></textarea>
        </div>
        <button type="submit" className="btn btn-primary" onSubmit={this.onSubmitHandler}>Submit</button>
        <button className='btn btn-success ms-3' onClick={() => this.props.onHandleShowForm(false)}>Cancel</button>
      </form>
    )
  }
}

export default Form