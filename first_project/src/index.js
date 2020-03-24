import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

ReactDom.render(
    <Provider store={createStore(reducer)}>
        <App />
    </Provider>,
    document.getElementById('root')
);