import React, { Component } from 'react';

class Track extends Component {

  render() {

    const headingStyle = {
      backgroundColor: "dodgerblue",
      color: "white",
      padding: "10px",
    }

    const pStyle = {
      height: "100px",
      width: "100px",
      display: "inline-block",
      backgroundColor: "red",
      margin: "10px",
    }

    return (
      <div>
        <h3 style={ headingStyle }>Track Header</h3>
        <div>
          <p style={ pStyle }>Module Name</p>
          <p style={ pStyle }>Module Name</p>
          <p style={ pStyle }>Module Name</p>
          <p style={ pStyle }>Module Name</p>
        </div>
      </div>
    )
  }
}

export default Track;
