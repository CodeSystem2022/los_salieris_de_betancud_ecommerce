import {
  createOrderDB,
  deleteOrderDB,
  getAllOrdersDB,
  getOrderByIdDB,
  getToDayOrdersDB,
  getUserOrdersDB,
  updateOrderDB,
} from '../services/order.js'

export const createOrder = async (req, res) => {
  try {
    const savedOrder = await createOrderDB(req.body)
    return res.status(200).json(savedOrder)
  } catch (err) {
    return res.status(500).json(err)
  }
}

export const updateOrder = async (req, res) => {
  try {
    const updatedOrder = await updateOrderDB(req.params.id, { $set: req.body })
    return res.status(200).json(updatedOrder)
  } catch (err) {
    return res.status(500).json(err)
  }
}

export const deleteOrder = async (req, res) => {
  try {
    await deleteOrderDB(req.params.id)
    return res.status(200).json('Order has been deleted...')
  } catch (err) {
    return res.status(404).json({ message: 'Order not found' })
  }
}

export const getUserOrders = async (req, res) => {
  try {
    const orders = await getUserOrdersDB(req.params.userId)
    return res.status(200).json(orders)
  } catch (err) {
    return res.status(200).json(err)
  }
}

export const getAllOrders = async (req, res) => {
  try {
    let orders
    if (req.query.toDay) {
      orders = await getToDayOrdersDB()
    } else {
      orders = await getAllOrdersDB()
    }
    return res.status(200).json(orders)
  } catch (err) {
    return res.status(500).json(err)
  }
}

export const getOrder = async (req, res) => {
  try {
    const order = await getOrderByIdDB(req.params.id)
    if (!order) {
      throw new Error()
    }
    return res.status(200).json(order)
  } catch (err) {
    return res.status(404).json({ message: 'Product not found' })
  }
}
