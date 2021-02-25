const reviewRouter = require('express').Router();
const { postReview, getAllSingleUserReviews } = require('../controllers/reviews');
const reviewController = require('../services/reviews/controllers/index')
const makeExpressCallback = require('../services/reviews/express-callback/index')
const secureRoute = require('../lib/secureRoute');

reviewRouter.route('/review').post(secureRoute, postReview);
reviewRouter.route('/getSellerReviews').get(getAllSingleUserReviews);
reviewRouter.route('/guy').get(makeExpressCallback(reviewController.getReviews))

module.exports = reviewRouter;
