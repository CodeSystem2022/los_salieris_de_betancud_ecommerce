import { Schema, model } from "mongoose";

const ProductSchema = new Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true, },
    img: { type: String, required: false },
    categories: { type: Array, required: false },
    price: { type: Number, required: true },
    stock: { type: Number, required: true }
  },
  { timestamps: true }
);

export default model("Product", ProductSchema);
