const {Photo} = require('../models/photo.js')

const handlePromise = function ( fn ) {
  return fn
  .then(data => data)
  .catch(error => error)
};

const find = query => {
  return handlePromise(
    Photo.find(query)
  )
}

const findById = (id) => {
  return find({id}).then(data => data.pop())
}

module.exports = {find, findById}
