// Core
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// Instruments
import store from '../../core/store';

// Containers
import App from './App';

render(
    <Provider store = { store }>
        <App />
    </Provider>,
    document.getElementById('root'),
);
