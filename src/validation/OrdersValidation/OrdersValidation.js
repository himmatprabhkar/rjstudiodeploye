// OrderValidation.js

const Joi = require('joi');

module.exports.orderValidation = Joi.object({
  user_id: Joi.string().required(), 
  cart_id: Joi.string().required(), 
  products: Joi.array().items(Joi.string()), 
  total_price: Joi.number().min(0).required(), 
  image_url: Joi.string().required(),  
  status: Joi.string().required(),  
  created_at: Joi.date().iso().required(), 
  updated_at: Joi.date().iso().required()
}).options({ stripUnknown: true });
