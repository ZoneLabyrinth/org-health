import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store/index';
// import 'regenerator-runtime/runtime';
import IndexPage from './IndexPage';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <IndexPage />
        </Router>
    </Provider>,
    document.getElementById('root'),
);
