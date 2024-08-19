import Product from "../models/product.js";
import mongoose from "mongoose";

export class ProductService {
  constructor() {
    this.getProducts = this.getProducts.bind(this);
    this.getProduct = this.getProduct.bind(this);
    this.createProduct = this.createProduct.bind(this);
    this.updateProduct = this.updateProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
  }

  async getProducts(req, res) {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  async getProduct(req, res) {
    const { id } = req.params;
    try {
      const product = await Product.findById(id);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.status(200).json(product);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  async createProduct(req, res) {
    const product = req.body;
    const newProduct = new Product(product);
    try {
      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  }

  async updateProduct(req, res) {
    const { id } = req.params;
    const product = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send("No product with that id");
    }
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });
    res.json(updatedProduct);
  }

  async deleteProduct(req, res) {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send("No product with that id");
    }
    const product = await Product.deleteOne({ _id: id });
    if(product.deletedCount === 0){
      return res.status(404).json("No product with that id");
    }
    res.json({ message: "Product deleted successfully", product });
  }
}
