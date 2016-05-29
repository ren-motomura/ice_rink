const React = require('react')
const ReactDOM = require('react-dom')
const Hello = require('./components/hello.jsx')
const Button = require('./components/button.jsx')

ReactDOM.render(
  <div>
    <Hello />
    <Button />
  </div>
  ,document.getElementById('root')
);
