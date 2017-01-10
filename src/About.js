import React, { Component } from 'react';

class About extends Component {
  render() {

    console.log(this.props);
    return (
      <div>
        <h1>This is the about page!</h1>
        <h5>{this.props.params.id}</h5>
      </div>
    )
  }
}

export default About;