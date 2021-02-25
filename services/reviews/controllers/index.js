const makeGetReviews = require('./get-reviews')
const reviewsService = require('../use-cases/index')
const makeExpressCallback = require('../express-callback/index')

const getReviews = makeGetReviews({listReviews: reviewsService.listReviews})

const reviewController = Object.freeze({
  getReviews
})

module.exports = reviewController