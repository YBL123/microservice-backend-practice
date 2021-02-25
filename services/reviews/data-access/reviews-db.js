const Review = require('../../../models/review')

const makeReviewsDb = ({}) => {
  return Object.freeze({
    findSingleUserReviews,
    insert,
  });
};

const findSingleUserReviews = async ({ userId }) => {
  try {
    const query = Review.find({ user: userId });
    const reviews = await query;
    return reviews;
  } catch (err) {
    console.log(err);
  }
};

const insert = async ({ reviewValue, comment, userId }) => {
  try {
    const query = Review.create({ reviewValue, comment, user: userId });
    const review = await query;
    return review;
  } catch (err) {
    console.log(err);
  }
};

module.exports = makeReviewsDb;
