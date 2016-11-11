// es6
import React from 'react'
import ReactDOM from 'react-dom'
import Chat from './components/chat.jsx'

// // es5
// var React = require('react');
// var ReactDOM = require('react-dom');
// var Chat = require('./components/chat.jsx');

ReactDOM.render(
  React.createElement(Chat),
  document.getElementsByClassName('react-section')[0]
)
