import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';

function BdayList() {
  return <>
    <App />
  </>
}

ReactDOM.render(<BdayList />, document.getElementById('root'));