module.exports = function(sequelize, DataTypes) {
  return sequelize.define("Competitor", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: DataTypes.STRING
  }, {
    classMethods: {
      hello() {
        console.log('hello world!')
      }
    }
  })
}
