'use strict'

const ProductStorage = require('./productStorage')
const productsStorage = require('./modifiedDataStorage.json')

const products = new ProductStorage(productsStorage);

console.log('other missing: ', products.get_total_price_of_products_by_type());
console.log('with missing: ', products.get_a_product_matching_productNumber());