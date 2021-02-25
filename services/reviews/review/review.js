const buildMakeReview = () => {
  return function makeReview ({ reviewValue, comment, user, editReviewValue = null }) {
    if (!reviewValue) {
      throw new Error('missing review value')
    }
    if (!comment) {
      throw new Error('missing review comment')
    }
    if (!user) {
      throw new Error('missing review user')
    }

    if (typeof comment !== 'string') {
      throw new Error('comment must be a string')
    }

    return Object.freeze({
      getReviewValue: () => reviewValue,
      getComment: () => comment,
      getUser: () => user,
      editReviewValue: () => reviewValue = editReviewValue
    })
  }
}

module.exports = buildMakeReview