const Review = require('../../../models/review');
const makeReviewsDb = require('./reviews-db');

const reviewDb = makeReviewsDb({ Review });

module.exports = reviewDb;

