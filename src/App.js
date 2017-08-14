import React, { Component } from "react";
import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import Counter from "./Counter";
import CounterForm from "./CounterForm";


const CounterPage = (num) => (
  <Counter num={num} />
);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div>
            <Header />
          </div>
          <div className="App-Main">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/counter1" component={() => CounterPage(1)} />
              <Route path="/counter2" component={() => CounterPage(2)}  />
              <Route path="/counterform"  component={CounterForm} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
