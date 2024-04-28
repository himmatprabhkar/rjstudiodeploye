import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom"
import { HeaderEditUpload } from '../../layout/headerEditUpload/headerEditUpload';
import { LandingSelectButtons } from '../../components/landingSelectButtons/LandingSelectButtons.comonent';
import { CustomSize } from '../../components/customSize/CustomSize.component';
import { ImageSizes } from '../../components/imageSizes/ImageSizes.components';
import { EditFrame } from '../../components/EditFrames/EditFrame.components';
import { MotifBorder } from '../../components/motifBorder/MotifBorder.component';
import ImageFrame from '../../components/ImageFrames/ImageFrame.frame';
import { SwiperImages1 } from '../../components/swiperImages/Swiper.component1';
import { Loader } from '../../components/loader/Loader.component';
import { AutomaticImageSize } from '../../components/automaticSizeImage/AutomaticImageSize.component';
// import '../../assets/css/ImageContainer.css'

export const EditlPhoto = () => {
  const navigate = useNavigate();
  const url = useSelector(state => state.uploadImage.url);
  const imageStatus = useSelector(state => state.imageStatus.imageStatus);
  const zoom = useSelector(state => state.imageSizeZoom.imageSizeZoom);
  const imageCustomHeight = useSelector(state => state.imageCustomSizeZoom.imageCustomHeight);
  const imageCustomWidth = useSelector(state => state.imageCustomSizeZoom.imageCustomWidth);
  const getFrameBorderCss = useSelector(state => state.selectFrameCss.imageBorderCss);
  const getFrameBorderBorder = useSelector(state => state.selectFrameCss.allCssBorder);
  const getMotifBorder = useSelector(state => state.selectMotifBorder.selectedMotifBorder);

  const [selectedFrame, setSelectedFrame] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [imageSize, setImageSize] = useState({ width: null, height: null });
  


  const getSelectedPhoto = (sf) => {
    setSelectedFrame(sf)
  }

  const motifBorderCss = [{
    outline: '',
    outlineOffset: ''
  },
  {
    outline: '4px solid #fff',
    outlineOffset: '-28px',
    padding: '28px'
  },
  {
    outline: '8px solid #fff',
    outlineOffset: '-28px',
    padding: '28px'

  },
  {
    outline: '12px solid #fff',
    outlineOffset: '-28px',
    padding: '28px'

  },
  {
    outline: '18px solid #fff',
    outlineOffset: '-28px',
    padding: '28px'

  },
  {
    outline: '21px solid #fff',
    outlineOffset: '-28px',
    padding: '28px'

  },
  {
    outline: '25px solid #fff',
    outlineOffset: '-28px',
    padding: '28px'
  }]

  // useEffect(() => {
  //   setIsLoading(true);
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000);
  // }, [getMotifBorder, zoom]);

  const handleImageLoad = (event) => {
    console.log('event.target.naturalWidth', event.target.naturalWidth)
    console.log('event.target.naturalHeight', event.target.naturalHeight)
    setImageSize({
      width: event.target.naturalWidth,
      height: event.target.naturalHeight
    });
  };

  const imageOrientation = getImageOrientation(url);

  const containerClassName = imageOrientation === 'horizontal' ? 'horizontal' : 'vertical';



  return (
    <>
      <HeaderEditUpload />
      <div className='container-fluid'>
        <div className="row align-items-center mb-5">
          <div style={{ backgroundColor: '' }} className="col-lg-7 ps-0 position-sticky">

            {imageStatus === 3 ? (
              <>
                {isLoading ? <Loader /> : <div className="upload-overlay">
                  <div className="inner-img">
                    {/* <div style={getFrameBorderBorder[2]}>
                      <img src={url} alt="Your Image" />
                    </div> */}
                    <img onLoad={handleImageLoad} height={imageStatus == 4 ? containerClassName === 'vertical' ? '200px' : '100%' : imageCustomHeight} width={imageStatus == 4 ? containerClassName === 'vertical' ? '200px' : '100%' : imageCustomWidth} style={{ transition: 'all 0.8s', transform: `scale(${zoom})`, ...getFrameBorderBorder[getFrameBorderCss], ...motifBorderCss[getMotifBorder] }} src={url} alt="Selected Image" />
                    {/* <SwiperImages1 getSelectedPhoto={(sf) => getSelectedPhoto(sf)} imageProps={url} height={imageCustomHeight} width={imageCustomWidth} /> */}
                  </div>
                </div>}
              </>
            ) : <div className="upload-overlay">
              <div className="inner-img">
                {url && (
                  <div className={`${containerClassName}`} >
                    {isLoading ? <Loader /> :
                      <img onLoad={handleImageLoad} height={imageStatus == 4 ? containerClassName === 'vertical' ? '200px' : '100%' : imageCustomHeight} width={imageStatus == 4 ? containerClassName === 'vertical' ? '200px' : '100%' : imageCustomWidth} style={{ transition: 'all 0.8s', transform: `scale(${zoom})`, ...getFrameBorderBorder[selectedFrame], ...motifBorderCss[getMotifBorder] }} src={url} alt="Selected Image" />
                    }
                  </div>
                )}
              </div>
            </div>}

          </div>
          {imageStatus === 0 && (<LandingSelectButtons />)}
          {imageStatus === 1 && (<ImageSizes />)}
          {imageStatus === 2 && (<CustomSize />)}
          {imageStatus === 3 && (<EditFrame />)}
          {imageStatus === 4 && (<MotifBorder />)}
        </div>
      </div>
    </>
  )
}


const getImageOrientation = (imageUrl) => {
  const image = new Image();
  image.src = imageUrl;

  return image.width > image.height ? 'horizontal' : 'vertical';
};