const appDispacher = require('../dispatchers/app_dispatcher.js')
const EventEmitter = require('events')

class NameStore extends EventEmitter {
  constructor(name) {
    super()
    this.name = name
    this.dispacher = appDispacher
    this.dispacher.register( payload => {
      if (payload.actionType == 'name-update') {
        this.name = payload.name
        this.emit('change')
      }
    })
  }
}

module.exports = new NameStore('hoge')
