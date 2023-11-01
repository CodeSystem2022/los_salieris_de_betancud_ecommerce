import { Schema, model } from "mongoose";

const OrderSchema = new Schema(
  {
    userId: { type: String, required: true },
    products: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    amount: { type: Number, required: true },
    status: { type: String, default: "pending" },
    total: { type: Number, required: true },
  },
  { timestamps: true }
);

export default model("Order", OrderSchema);
