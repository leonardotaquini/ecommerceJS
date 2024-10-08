import { model, Schema } from "mongoose";

const productSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true},
    price: { type: Number, required: true},
    category: { type: String, required: true },
    stock: { type: Number, required: true },
    image: { type: String, required: true }
},
{ timestamps: true }
);

const Product = model("Product", productSchema);

export default Product;
