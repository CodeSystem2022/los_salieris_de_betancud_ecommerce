import {
  createProductDB,
  deleteProductDB,
  getAllProductsDB,
  getProductDBById,
  getProductsDBByCategory,
  updateProductDB,
} from '../services/product.js';

export const createProduct = async (req, res) => {
  try {
    const img = req.files?.img;
    if (img) {
      const path = './media/products/' + img.name;
      img.mv(path, (err) => {
        if (err) {
          return res.status(500).json({ message: 'Error al subir la imagen.' });
        }
      });
      req.body.img = path.replace('./', '/');
    }
    const products = await createProductDB(req.body);
    res.status(200).json(products);
  } catch (err) {
    res.status(400).json(err);
  }
};

export const updateProduct = async (req, res) => {
  try {
    const img = req.files?.img;
    if (img) {
      const path = './media/products/' + img.name;
      img.mv(path, (err) => {
        if (err) {
          return res.status(500).json({ message: 'Error al subir la imagen.' });
        }
      });
      req.body.img = path.replace('./', '/');
    }
    const updatedProduct = await updateProductDB(req.params.id, { $set: req.body });
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const deleteProduct = async (req, res) => {
  try {
    await deleteProductDB(req.params.id);
    res.status(200).json('Product has been deleted...');
  } catch (err) {
    res.status(404).json({ message: 'Product not found' });
  }
};

export const getProduct = async (req, res) => {
  try {
    const product = await getProductDBById(req.params.id);
    if (!product) {
      throw new Error();
    }
    return res.status(200).json(product);
  } catch (err) {
    return res.status(404).json({ message: 'Product not found' });
  }
};

export const getAllProducts = async (req, res) => {
  const qCategory = req.query.category;
  try {
    let products;

    if (qCategory) {
      products = await getProductsDBByCategory(qCategory);
    } else {
      products = await getAllProductsDB();
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
};
