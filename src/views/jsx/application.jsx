const React = require('react')
const ReactDOM = require('react-dom')
const Hello = require('./components/hello.jsx')
const Button = require('./components/button.jsx')
const SideMenu = require('./components/side_menu.jsx')

class Application extends React.Component {
  render() {
    return(
      <div className='application-container'>
        <SideMenu />
        <div className='main-content'></div>
      </div>
    )
  }
}

ReactDOM.render(
  <Application />
  ,document.getElementById('root-container')
);
