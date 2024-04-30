const mongoose = require('mongoose');

const imageSizesSchema = new mongoose.Schema({
  ImageSize: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});
