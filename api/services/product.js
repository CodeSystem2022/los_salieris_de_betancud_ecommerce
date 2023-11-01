import Product from '../models/Product.js';

/* 
* Valida si el producto cuenta con stock suficiente
** 
* @param productId (String)
**
* @param quantity (Number)
**
* @return product (Product) si hay sufuciente stock,
* sino lanza un error.
*/
export const validateProductStock = async (productId, quantity) => {
  const product = await Product.findById(productId);
  const inStock = product.stock - quantity > 0;
  if (!inStock) {
    throw new Error('Stock insuficiente');
  }
  return product
};

export const decreaseProdductStock = async (product, quantity) => {
  product.quantity -= quantity;
  await product.save();
};

export const createProductDB = async (data) => {
  const newProduct = new Product(data);
  return await newProduct.save();
}

export const updateProductDB = async (productId, data) => {
  return await Product.findByIdAndUpdate(productId, data, { new: true });
}

export const deleteProductDB = async (productId) => {
  await Product.findByIdAndDelete(productId);
}

export const getProductDBById = async (productId) => {
  return await Product.findById(productId);
}

export const getProductDBByTitle = async (title) => {
  return await Product.findOne({title});
}

export const getAllProductsDB = async () => {
  return await Product.find();
}

export const getProductsDBByCategory = async (category) => {
  return await Product.find({ categories: { $in: [category] } });
}
