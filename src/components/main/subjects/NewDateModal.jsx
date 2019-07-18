import React, { Component } from 'react'

export default class NewDateModal extends Component {
  constructor(props) {

    this.state = {
      show: props.show
    }
  }

  close() {
    this.setState({show: false});
  }

  render() {
    return (
      <Modal show={this.state.show}>
        <label for="date">
          Enter new date:
        </label>
        <input
          type="date"
          name="date"
          class="form-control"/>
        <div class="btn-container">
          <button class="btn btn-primary" type="submit">
            Save
          </button>
          <button class="btn btn-primary" onClick={() => this.close()}>
            Close
          </button>
        </div>
      </Modal>
    )
  }
}
