import React from 'react';
import Slider from 'react-slick';
const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: Boolean,
  };

  return (
    <div className='mt-20'>
      <Slider {...settings}>
        <div className='block-1'>
          <div className='flex items-center justify-center h-[36rem]'>
            <div className='z-50 text-center pt-[10rem] sm:pt-0'>
              <span className='text-sm text-white uppercase py-2'>new</span>
              <h2 className='text-xl text-white uppercase py-2'>
                Our Clothes are the best
              </h2>
              <button className='bg-white text-gray-900 px-4 py-2'>
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div className='block-2'>
          <div className='flex items-center justify-center h-[36rem]'>
            <div className='z-50 text-center pt-[10rem] sm:pt-0'>
              <span className='text-sm text-white uppercase py-2'>new</span>
              <h2 className='text-xl text-white uppercase py-2'>
                Our Clothes are the best
              </h2>
              <button className='bg-white text-gray-900 px-4 py-2'>
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
