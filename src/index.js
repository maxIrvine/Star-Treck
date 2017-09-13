import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {
    ADD_MEMBER,
    BEAM_MEMBER
} from './actions'

import crewMembers from './reducers';

import { createStore } from 'redux';

const store = createStore(crewMembers);

window.store = store;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
