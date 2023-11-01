import { MercadoPagoConfig, Payment, MerchantOrder, Preference } from 'mercadopago';

import { FAILURE_PAID_URL, MERCADOPAGO_API_KEY, SUCCESS_PAID_URL, WEBHOOK_NOTIFICATION_URL } from '../config/constants.js';
import { saveOrder } from '../services/order.js';


const MP_CONFIG = new MercadoPagoConfig({
  accessToken: MERCADOPAGO_API_KEY,
});

export const createOrder = async (req, res) => {
  try {
    const preference = new Preference(MP_CONFIG);
    const result = await preference.create({
      body: {
        items: req.body.items.map(item => {
          return { ...item, currency_id: 'ARS'}
        }),
        notification_url: WEBHOOK_NOTIFICATION_URL,
        additional_info: {
          user_id: req.user.id,
        },
        back_urls: {
          success: SUCCESS_PAID_URL,
          failure: FAILURE_PAID_URL,
        }
      },
    });
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: 'Algo salió mal.!' });
  }
};

/* 
* Maneja las notificaciones de MP del flujo de pago,
* al realizarse con éxito se guarda la orden en la base de datos,
* y se actualiza el stock de los productos
*/
export const receiveWebhook = async (req, res) => {
  const _payment = req.query;
  const payment = new Payment(MP_CONFIG);
  try {
    if (_payment.type === 'payment') {
      const pago = await payment.get({ id: _payment['data.id'] });
      const order = new MerchantOrder(MP_CONFIG);
      const _order = await order.get({ merchantOrderId: pago.order.id });
      const items = _order.items;
      
      const additional_info = JSON.parse(_order.additional_info)
      let order_items = []
      let order_amount_itmes = 0
      let order_total_price = 0
      // Se crean los parámetros necesarios para guardar la orden
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        order_amount_itmes += item.quantity
        order_total_price += item.unit_price * item.quantity
        order_items.push({
          productId: item.id,
          quantity: item.quantity,
        })
      }
      await saveOrder(additional_info.user_id, order_items, order_amount_itmes, order_total_price)
    }
    return res.sendStatus(201);
  } catch (error) {
    return res.status(500).json({ message: 'Algo salió mal.!' });
  }
};
