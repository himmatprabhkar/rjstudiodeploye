const mongoose = require('mongoose');

const frameSchema = new mongoose.Schema({
  size: String,
  type: String,
  frame_url: String,
  quantity: Number,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});
