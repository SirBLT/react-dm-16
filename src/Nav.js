import React, { Component } from 'react';
import { Link } from 'react-router';

class Nav extends Component {
  render() {
    return (
      <div>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        {this.props.children}
      </div>
    )
  }
}

export default Nav