// combine.js
import React from 'react';
import { connect } from 'react-redux';
import { combineReducers } from 'redux';

export const increment = () => ({
  type: 'INCREMENT',
});

export const decrement = () => ({
  type: 'DECREMENT',
});

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state  + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  counter: counterReducer,
});

const CounterComponent = ({ count, increment, decrement }) => {
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  count: state.counter,
});

const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);

