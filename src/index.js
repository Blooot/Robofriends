import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleWare from 'redux-thunk';
import App from './containers/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import { searchRobots, requestRobots } from './reducers';

const logger = createLogger();

const rootReducer = combineReducers({ searchRobots, requestRobots })
const store = createStore(rootReducer, applyMiddleware(thunkMiddleWare, logger))


ReactDOM.render(<Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();