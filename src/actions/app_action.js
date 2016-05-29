const appDispacher = require('../dispatchers/app_dispatcher.js')

class AppAction {
  updateName(name) {
    appDispacher.dispatch({
      actionType: 'name-update',
      name: name
    })
  }
}

module.exports = new AppAction()
