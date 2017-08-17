import React from 'react';
import ReactDOM from 'react-dom';
import Order from './components/Order';
import {createStore} from 'redux';
import reducer from './reducer';
import {Provider} from 'react-redux';
import {OrderContainer} from './components/Order';


const store = createStore(reducer);
store.dispatch({
  type: 'SET_STATE',
  state: {
    currentMenu: [
      'Dumpling, 1',
      'Chili, 4',
      'Rice, 9',
      'Chicken Stew, 2',
      'Lamb Chop, 42',
      'Peanut Saute, 33',
      'Red Noodle, 4',
      'Cream, 6'
    ],
    ordered:[],
    total: 0
  }
});

ReactDOM.render(
  <Provider store={store}>
    <OrderContainer />
  </Provider>,
  document.getElementById('app')
);