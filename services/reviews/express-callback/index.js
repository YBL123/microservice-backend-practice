const makeExpressCallback = (controller) => {
  return (req, res, next) => {
    const httpRequest = {
      body: req.body, 
      query: req.query,
      params: req.params,
      methods: req.methods,
      path: req.path,
      headers: {
        "Content-Type": req.get("Content-Type"),
        Referer: req.get("Referer"),
        "User-Agent": req.get("User-Agent")
      }
    }
    controller(httpRequest)
    .then(httpResponse => {
      if (httpResponse.headers) {
        res.set(httpResponse.headers)
      }
      res.status(httpResponse.statusCode).json(httpResponse.body)
    })
    .catch(err => res.status(500).json({ err: 'Server error' }))
  }
}

module.exports = makeExpressCallback