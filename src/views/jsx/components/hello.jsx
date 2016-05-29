const React = require('react')
const nameStore = require('../../../stores/name_store.js')

class Hello extends React.Component {
  constructor(props) {
    super(props)
    this.nameStore = nameStore
    this.nameStore.on('change', () => {
      this.setState({name: this.nameStore.name})
    })
    this.state = {name: this.nameStore.name}
  }

  render() {
    return(
      <h1>Hello {this.state.name}!</h1>
    )
  }

  componentWillUnmount() {
    dispacher.unregister(this.dispacherToken)
  }
}
module.exports = Hello
