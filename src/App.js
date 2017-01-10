import React, { Component } from 'react';
import GuestList from './GuestList';
import AddGuest from './AddGuest';
import logo from './logo.svg';
import './App.css';

/**
 * 1. Our Data
 * 2. Stuff that happens to our Data
 * 3. Stuff that the renderer does
 */

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      cohort: 'DM-16!',
      guests: [
        'Jeremy',
        'Brack',
        'Brett',
        'Pepperoni',
        'Ashleigh'
      ],
      newGuest: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleAddGuest = this.handleAddGuest.bind(this);
  }

  handleChange(event) {
    this.setState({
      newGuest: event.target.value
    })
  }

  handleAddGuest(newGuest) {
    var newGuestList = this.state.guests;

    newGuestList.push(newGuest)

    this.setState({
      guests: newGuestList
    })
  }

  componentWillMount() {
    console.log('component will mount!');
    let guestMemory = JSON.parse(localStorage.getItem('guest-list'));
    if (guestMemory) {
      this.setState({
        guests: guestMemory
      })
    }
  }

  shouldComponentUpdate() {
    console.log('Should component update?');
    return this.state.guests.length % 2 === 0;
  }

  componentWillUpdate() {
    console.log('component will update');
    localStorage.setItem('guest-list', JSON.stringify(this.state.guests));
  }

  render() {
    console.log('rendering!');
    var guests = this.state.guests.map((guest, i) => {
      return (
        <li key={i}>{guest}</li>
      )
    })

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React, {this.state.cohort}</h2>
        </div>

        <GuestList guests={this.state.guests}/>

        <AddGuest addNewGuest={this.handleAddGuest} guests={this.state.guests} />
      </div>
    );
  }

  componentDidMount() {
    console.log('component did mount!');
  }

  componentDidUpdate() {
    console.log('component did update!');
  }
}

export default App;
