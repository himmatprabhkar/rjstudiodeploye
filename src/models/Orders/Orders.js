const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
  cart_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Cart' },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Products' }],
  total_price: Number,
  image_url: String,
  status: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});
