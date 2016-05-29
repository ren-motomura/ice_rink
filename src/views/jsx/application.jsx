const React = require('react')
const ReactDOM = require('react-dom')
const Hello = require('./components/hello.jsx')
const Button = require('./components/button.jsx')

class Application extends React.Component {
  render() {
    return(
      <div id='application-container'>
        <div id='header'></div>
        <div id='side-menu'></div>
        <div id='main-content'></div>
      </div>
    )
  }
}

ReactDOM.render(
  <Application />
  ,document.getElementById('root-container')
);
