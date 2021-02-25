const buildMakeReview = require('./review')

const makeReview = buildMakeReview()
// const makeReview = buildMakeReview({sanitizeComment})

// const sanitizeComment = (comment) => {
//   return comment
// }

module.exports = makeReview

