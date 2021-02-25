const makeGetReviews = ({listReviews}) => {
  return async function getReviews (httpRequest) {
    const headers = {
      "Content-Type": "application/json" 
    }
    try { 
      const reviews = await listReviews({userId: httpRequest.query.sellerId}) 
      return {
        headers, 
        statusCode: 200, 
        body: reviews
      }

    } catch (err) {
      console.log(err)
      return {
        headers, 
        statusCode: 400, 
        body: {
          error: err.message
        }
      }
    }
  }
}

module.exports = makeGetReviews