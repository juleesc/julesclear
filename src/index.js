import React from 'react';
import './index.css';
import Navbar from './components/Navbar.js'
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'
import * as serviceWorker from './serviceWorker';
ReactDOM.render(<Navbar />, document.getElementById('nav'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
