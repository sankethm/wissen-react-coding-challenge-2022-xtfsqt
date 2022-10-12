import React from 'react';
import { render } from 'react-dom';
import './style.css';
import { LoginPage } from './loginPage';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <LoginPage />
      </div>
    </Provider>
  );
};

render(<App />, document.getElementById('root'));
