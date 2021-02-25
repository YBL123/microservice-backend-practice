const makeListReview = ({reviewDb}) => {
  return async function listReviews ({userId}) {
    if (userId === undefined || !userId) {
        throw new Error('missing userId')
    }
      const reviews = await reviewDb.findSingleUserReviews({userId})
      return reviews
  }
}

module.exports = makeListReview