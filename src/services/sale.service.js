import Sale from "../models/sale.js";

export class SaleService {
  constructor() {
    this.createSale = this.createSale.bind(this);
    this.getSaleById = this.getSaleById.bind(this);
    this.getSaleByUser = this.getSaleByUser.bind(this);
    this.deleteSale = this.deleteSale.bind(this);
  }

  async createSale(sellerId, products) {
    try {
        const totalAmount = products.reduce( (acc, item) => acc + item.product.price * item.quantity, 0);
        const sale = new Sale({
          seller: sellerId,
          products,
          totalAmount,
        });
        await sale.save();
        return sale;
    } catch (error) {
        throw new Error("Error creating sale");
    }
  }

  async getSaleById(saleId) {
    try {
      return await Sale.findById(saleId).populate("products.product");
    } catch (error) {
      throw new Error("Sale not found");
    }
  }

  async getSaleByUser(sellerId) {
    try {
      return await Sale.find({ seller: sellerId }).populate("products.product");
    } catch (error) {
      throw new Error("Sale not found");
    }
  }

  async deleteSale(saleId) {
    try {
      return await Sale.findByIdAndDelete(saleId);
    } catch (error) {
      throw new Error("Error deleting sale");
    }
  }
}
