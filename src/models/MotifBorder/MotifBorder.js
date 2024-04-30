const mongoose = require('mongoose');

const motifBorderSchema = new mongoose.Schema({
  motif_size: String,
  size: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});
