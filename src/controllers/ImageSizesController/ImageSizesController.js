const FrameSizeRatio = require('../../models/FrameSizes/FrameSizes');

exports.getFrameSizes = async(req, res) => {
    const getSizes = await FrameSizeRatio.find();

    if(getSizes){
        res.status(200).json({
            success: true,
            getSizes
        })
    
    }
}