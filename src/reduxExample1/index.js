// index.js
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import CounterComponent, { rootReducer } from './combine';

const store = createStore(rootReducer);

const Index = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <CounterComponent />
      </Provider>
    </div>
  );
};

export default Index;