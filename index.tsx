import React from 'react';
import { render } from 'react-dom';
import './style.css';
import { LoginPage } from './loginPage';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <div className="container">
      <Provider store={store}>
        <LoginPage />
      </Provider>
    </div>
  );
};

render(<App />, document.getElementById('root'));
