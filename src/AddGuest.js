import React, { Component } from 'react';

class AddGuest extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newGuest: 'spiderman'
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should add guest re render?', nextState, nextProps);
    return nextState.newGuest !== this.state.newGuest;
  }

  componentWillUpdate() {
    console.log('Add Guest will re render');
  }

  handleChange(event) {
    // Change state to whatever the user is typing in.
    this.setState({
      newGuest: event.target.value
    })
  }

  handleClick() {
    this.props.addNewGuest(this.state.newGuest);

    this.setState({
      newGuest: ''
    })
  }

  render() {
    return (
      <div>
        {this.props.children}
        <input 
          value={this.state.newGuest}
          placeholder='New guest name here'
          onChange={this.handleChange} />
        <button
          onClick={this.handleClick}>Add Guest</button>
      </div>
    )
  }
}

export default AddGuest