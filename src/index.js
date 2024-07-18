import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

function getRootElement() {
    return document.getElementById('root');
}
const rootEl = getRootElement();

ReactDOM.createRoot(rootEl).render(<App/>)
