import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Counter.css';

class Counter extends Component {
    constructor(props) {
      super(props);

      this.increment = this.increment.bind(this);
      this.decrement = this.decrement.bind(this);
      this.reset = this.reset.bind(this);

      let startVal = props.value;
      if (!startVal) {
        startVal = 0;
      }
      this.state = {
        counter: startVal,
      };
    }
    componentWillReceiveProps(nextProps) {
        console.log('Counter.componentWillReceiveProps', nextProps);

        let startVal = nextProps.value;
        if (!startVal) {
          startVal = 0;
        }
        this.setState({
          counter: startVal,
        });
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Counter.shouldComponentUpdate', this.props, nextProps, this.state, nextState);
        return true;
    }
    increment() {
      console.log('increment()', this);

      this.setState({
        counter: this.state.counter + 1,
      })
    }

    decrement() {
      console.log('decrement()', this)

      var negativeNumbers = this.state.counter - 1;

      if (negativeNumbers < 1) {
        negativeNumbers = 0;
      }

      this.setState({
        counter: negativeNumbers,
      })
    }

    reset() {
      console.log('reset()', this);
      this.setState({
        counter: 0,
      })
    }

    render() {
      const { title } = this.props;
      console.log(this.props);
      const { value } = this.props;
      const { counter } = this.state;
      
      return (
        <div>
              <p className="counter-name">
              {title}: {counter}
              </p>
            <button onClick={this.decrement}>-</button>
            <button onClick={this.increment}>+</button>
            <button onClick={this.reset}>Reset</button>
       </div>
        );
    }
}

Counter.propTypes = {
  title: PropTypes.string.isRequired,
};

Counter.defaultProps = {
  title: 'Counter',
  value: 0,
};

export default Counter;