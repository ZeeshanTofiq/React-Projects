import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);