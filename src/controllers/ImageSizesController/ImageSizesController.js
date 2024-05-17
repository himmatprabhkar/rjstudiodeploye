const ImageSizes = require('../../models/ImageSizes/ImageSizes')

exports.getFrameSizes = async(req, res) => {

    const getSizes = await ImageSizes.find();

    if(getSizes){
        res.status(200).json({
            success: true,
            getSizes
        })
    
    }
}