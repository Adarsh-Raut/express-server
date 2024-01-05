const Product = require('../models/productModels');

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const prodId = req.params.id;
    const product = await Product.findById(prodId);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const updateProductById = async (req, res) => {
  try {
    const prodId = req.params.id;
    const product = await Product.findByIdAndUpdate(prodId, req.body);
    if (!product) {
      return res
        .status(404)
        .json({ message: `Cannot find product with id ${prodId}` });
    }
    const updatedProduct = await Product.findById(prodId);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProductById = async (req, res) => {
  try {
    const prodId = req.params.id;
    const product = await Product.findByIdAndDelete(prodId);
    if (!product) {
      res
        .status(404)
        .json({ message: `Cannot find the product with id ${prodId}` });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProductById,
  deleteProductById,
};
