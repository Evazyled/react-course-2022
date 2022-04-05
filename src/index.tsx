import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style/main.scss';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import App from './App';
import userInfoReducer from './store/reducer';

const store = createStore(userInfoReducer, composeWithDevTools(applyMiddleware()));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
