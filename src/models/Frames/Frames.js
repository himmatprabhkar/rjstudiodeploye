const mongoose = require("mongoose");

const frameSchema = new mongoose.Schema({
  frameName: { type: String, required: true }, // Frame name like "Classic Black"
  frameDescription: { type: String, required: true }, // Description like "A timeless black frame."
  frameWidth: { type: Number, required: true }, // Width of the frame
  frameDepth: { type: Number, required: true }, // Depth of the frame
  frameCategory: { type: String, required: true }, // Frame category like "Classic"
  frameImage: { type: String, required: true }, // Image file name or URL
  
  sides: {
    sideUp: { type: String, required: true }, // URL or path for side up image
    sideDown: { type: String, required: true }, // URL or path for side down image
    sideLeft: { type: String, required: true }, // URL or path for side left image
    sideRight: { type: String, required: true }, // URL or path for side right image
    topLeft: { type: String, required: true }, // URL or path for top left image
    topRight: { type: String, required: true }, // URL or path for top right image
    bottomLeft: { type: String, required: true }, // URL or path for bottom left image
    bottomRight: { type: String, required: true }, // URL or path for bottom right image
  },
});

module.exports = mongoose.model("FrameSchema", frameSchema);
