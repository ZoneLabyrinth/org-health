import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Core from '@antv/f2';
import store from './store/index';
// import 'regenerator-runtime/runtime';
import IndexPage from './IndexPage';
import IndexRank from './pages/ranking/IndexRank';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <IndexPage />
        </Router>
    </Provider>,
    document.getElementById('root'),
);
