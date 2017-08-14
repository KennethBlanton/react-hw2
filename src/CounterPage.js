import React, { Component } from "react";

import "./App.css";

import { Link } from "react-router-dom";
import Counter from "./Counter";

class CounterPage extends Component {
  render() {
    const { num } = this.props;

    return (
      <div>
        <Counter num={num} />
      </div>
    );
  }
}

export default CounterPage;
