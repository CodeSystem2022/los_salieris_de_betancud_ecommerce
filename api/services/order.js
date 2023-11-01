import { now } from 'mongoose';

import Order from '../models/Order.js';
import { decreaseProdductStock, validateProductStock } from './product.js';


/* 
* Crea un registro de una nueva compra en la BD
**
* @param userID (String)
**
* @param items (product[]): Lista de productos que se van a comprar
**
* @param total_amount (Number): Cantidad total de productos comprados
**
* @param total_price (Number): Precio total de la compra
*/
export const saveOrder = async (userId, items, total_amount, total_price) => {
  const db_order = new Order({
    userId: userId,
    products: items,
    amount: total_amount,
    status: 'paid',
    total: total_price,
  });
  await db_order.validate();
  items.forEach(async (item) => {
    const product = await validateProductStock(item.productId, item.quantity)
    await decreaseProdductStock(product, item.quantity)
  })
  await db_order.save();
};


export const createOrderDB = async (data) => {
  const order = new Order(data);
  return await order.save(data);
}

export const updateOrderDB = async (orderId, data) => {
  return await Order.findByIdAndUpdate(orderId, data, { new: true })
}

export const deleteOrderDB = async (orderId) => {
  await Order.findByIdAndDelete(orderId);
}

export const getUserOrdersDB = async (userId) => {
  return await Order.find({ userId: userId });
}

export const getAllOrdersDB = async () => {
  return await Order.find();
}

export const getToDayOrdersDB = async () => {
  return await Order.find({createdAt: {
    $gte: new Date(now().setHours(0,0,0,0)),
    $lt: new Date(now().setHours(23,59,59,999))
  }});
}

export const getOrderByIdDB = async (orderId) => {
  return await Order.findById(orderId);
}