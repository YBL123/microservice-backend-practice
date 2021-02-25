const makeReview = require('../review/index')

const makeAddReview = ({reviewDb}) => {
  return async function addReview (reviewData) {
    const review = makeReview(reviewData)

    return reviewDb.insert({
      reviewValue: review.getReviewValue(),
      comment: review.getComment(),
      user: review.getUser()
    })
  }
}

module.exports = makeAddReview