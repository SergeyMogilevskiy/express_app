

const productsController = (req, res, next) => {
  const { _page: page = 1, _limit: limit = 4 } = req.query;
  const start = page * limit - limit + 1;
  const end = limit * page;

  // productManager
  //   .getProducts(start, end)
  //   .then(data => {
  //     res.setHeader("X-Total-Count", data.length);
  //     res.send(data);
  //   })
  //   .catch(err => {
  //     next(err);
  //   });
};
