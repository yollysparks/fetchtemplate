import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import jokeFacade from "./jokeFacade";


ReactDOM.render(<App facade={jokeFacade} />, document.getElementById('root'));
