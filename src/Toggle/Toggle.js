import React, { Component } from 'react';

import './toggle.css'

export default class Toggle extends Component {
  constructor() {
    super();

    this.state = {

    }


  }

  render() {

  return (
    <div className="toggle-div">
      <h3 className="seven-hour-toggle" onClick={() => {
        this.props.toggleSevenHour();
      }}>7-Hour</h3>
      <h3 className="ten-day-toggle" onClick={() => {
        this.props.toggleTenDay();
      }}>10-Day</h3>
    </div>
  )

  }

}

