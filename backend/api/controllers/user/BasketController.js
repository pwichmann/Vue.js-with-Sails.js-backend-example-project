module.exports = {

  /**
   * @param req
   * @param res
   */
  post: (req, res) => {
    let products = req.params('products')

    Basket.create({
      products
    }).exec((error, basket) => {
      if (error) return res.serverError(error)

      sails.log('Created basket', basket)

      if (basket) return res.ok()
    })
  }
}