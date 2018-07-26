const DB =require('../utils/db.js')
module.exports={
  // 获取商品列表
  list:async ctx =>{
    ctx.state.data = await DB.query("SELECT * FROM product;")
  },

  detail: async ctx => {
    let productId = + ctx.params.id
    let product
    if (!isNaN(productId)) {
      product = (await DB.query('select * from product where product.id=?', [productId]))
    } else {
      product = {}
    }
    ctx.state.data = product;
  }

}

  