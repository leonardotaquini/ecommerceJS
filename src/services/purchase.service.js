import Purchase from "../models/purchase.js";

export class PurchaseService {
  constructor() {

    this.createPurchase = this.createPurchase.bind(this);
    this.getPurchaseById = this.getPurchaseById.bind(this);
    this.getPurchaseByUser = this.getPurchaseByUser.bind(this);
    this.updatePurchaseStatus = this.updatePurchaseStatus.bind(this);
    this.deletePurchase = this.deletePurchase.bind(this);


  }

  async createPurchase(userId, products) {
    const totalAmount = products.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    );
    const purchase = new Purchase({
      user: userId,
      products,
      totalAmount,
    });
    await purchase.save();
    return purchase;
  }

  async getPurchaseById(purchaseId) {
    return Purchase.findById(purchaseId).populate("products.product");
  }

  async getPurchaseByUser(userId) {
    return Purchase.find({ user: userId }).populate("products.product");
  }

  async updatePurchaseStatus(purchaseId, status) {
    const purchase = await Purchase.findById(purchaseId);
    if (!purchase) {
      throw new Error("Purchase not found");
    }
    purchase.status = status;
    await purchase.save();
    return purchase;
  }

  async deletePurchase(purchaseId) {
    return Purchase.findByIdAndDelete(purchaseId);
  }
}


