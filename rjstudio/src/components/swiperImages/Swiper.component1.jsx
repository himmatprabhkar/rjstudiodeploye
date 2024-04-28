import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { useSelector } from 'react-redux';


// const importImages = () => {
//   let images = [];
//   for (let i = 1; i <= 7; i++) {
//     images.push(require(`../../assets/images/img_${i}.jpg`));
//   }
//   return images;
// };

export const SwiperImages1 = (props) => {
  const getFrameBorderCss = useSelector(state => state.selectFrameCss.imageBorderCss);
  const getFrameBorderBorder = useSelector(state => state.selectFrameCss.allCssBorder);
  const zoom = useSelector(state => state.imageSizeZoom.imageSizeZoom);
  const [selectedFrame, setSelectedFrame] = useState(0);

  const handleSlideChange = (swiper) => {
 
    const currentIndex = swiper.activeIndex;
    
    props.getSelectedPhoto(currentIndex);
  };


  return (
    <div className="">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
        onSlideChange={(swiper) => handleSlideChange(swiper)}
      >
        {[1,2,3,4,5,6].map((image, index) => (
          <SwiperSlide key={index}>
            <img onChange={()=> setSelectedFrame(index)} src={props.imageProps} alt={`slide_image_${index}`} style={getFrameBorderBorder[index]} />
          </SwiperSlide>
        ))}

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

