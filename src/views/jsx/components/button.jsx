const React = require('react')
const appAction = require('../../../actions/app_action.js')

class Button extends React.Component {
  render() {
    return(
      <button id="my-button" onClick={this.onClick}>click me!</button>
    )
  }

  onClick() {
    appAction.updateName('fuga')
  }
}
module.exports = Button
