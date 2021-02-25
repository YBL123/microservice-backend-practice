const reviewDb = require('../data-access/index')
const makeAddReview = require('./add-review')
const makeListReview = require('./list-reviews')

const addReview = makeAddReview({reviewDb})
const listReviews = makeListReview({reviewDb})

const reviewsService = Object.freeze({
  addReview,
  listReviews
})

module.exports = reviewsService