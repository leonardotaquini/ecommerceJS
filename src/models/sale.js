import mongoose from 'mongoose';

const saleSchema = new mongoose.Schema({
    seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    products: [{
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
        quantity: { type: Number, required: true }
    }],
    totalAmount: { type: Number, required: true },
    saleDate: { type: Date, default: Date.now }
});

const Sale = mongoose.model('Sale', saleSchema);

export default Sale;
