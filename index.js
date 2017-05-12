import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// Reducers
import ContactReducer from './src/reducers/contact';

// Container Components
import Contacts from './src/components/containers/Contacts';

const store = createStore(
    ContactReducer,
    window.devToolsExtension && window.devToolsExtension()
);


ReactDOM.render(
    <Provider store={store}>
        <Contacts />
    </Provider>,
    document.getElementById('app')
);
