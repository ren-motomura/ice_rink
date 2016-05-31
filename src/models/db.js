require('sqlite3')
const path = require('path')
const Sequelize = require('sequelize')
const fs = require('fs')

const sequelize = new Sequelize(
  'application',
  'root',
  null,
  {dialect: 'sqlite', storage: path.join(__dirname, '..', '..', 'db', 'database.sqlite')}
)

fs.readdirSync(__dirname).forEach( filename => {
  if (/.js$/.test(filename) && filename != path.basename(__filename))
    sequelize.import(__dirname + '/' + filename)
})

Object.keys(sequelize.models).forEach( modelName => {
  sequelize.models[modelName].sync()
})

module.exports = sequelize
