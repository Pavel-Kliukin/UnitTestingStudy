'use srtict'

module.exports = class ProductStorage {

  #storage
  constructor(data){
    if(!data) throw new Error ('data storage missing')
      this.#storage=data
  }

  //METHODS

  get_total_price_of_products_by_type(type) {

    if (type !== undefined) {
      let cumulative_price = 0
      let matches_found = false
  
      for (const product of this.#storage) {
        if (product.type !== undefined && product.type === type) {
          matches_found = true
          cumulative_price += product.price * product.stock
        }
      }

      if (matches_found) {
        return cumulative_price
      } else {
        throw new Error('nothing found with given')
      }

    } else throw new Error('missing parameter')
  }

  get_info(searchKey) {
    if (searchKey !== undefined){
      for (const product of this.#storage) {
        if (product.productNumber === searchKey){
          return product.info
        } 
      }
      return null
    } else return null
  }

  get_a_product_matching_productNumber(searchKey) {
    if (searchKey !== undefined) {
      for (const product of this.#storage) {
        if (product.productNumber === searchKey){
          return product
        } 
      }
      return null
    } else throw new Error('missing parameter')
  }

  get_All_products_By_type(searchValue) {
    if (searchValue !== undefined) {
      let products_found = []
      for (const product of this.#storage) {
        if (product.type === searchValue){
          products_found.push(product)
        } 
      }
      return products_found
    } else throw new Error('missing parameter')
  }

  get_Price() {
    
  }

}