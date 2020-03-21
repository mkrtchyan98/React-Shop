import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import CartReducer from './components/reducers/cartReducer';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import 'bootstrap/dist/css/bootstrap.css';

const loggerMiddleware = createLogger ();

const store = createStore(CartReducer,applyMiddleware(thunkMiddleware,loggerMiddleware));

ReactDOM.render(<Provider store={store}>
	<App />
	</Provider>, document.getElementById('root'));