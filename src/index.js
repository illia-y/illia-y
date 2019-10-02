import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import MainApp from './App';

const App = () => (
  <Provider store={store}>
    <MainApp />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
