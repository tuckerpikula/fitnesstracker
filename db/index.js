module.exports = require('mongoose').connect('mongodb://localhost/fitness_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})