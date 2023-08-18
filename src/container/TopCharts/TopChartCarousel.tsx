import React from 'react';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination, Thumbs, Navigation } from 'swiper/modules';
import Image from 'next/image';

SwiperCore.use([Pagination, Thumbs, Navigation]);

const TopChartCarousel = () => {
    // const [thumbsSwiper, setThumbsSwiper] = React.useState(null);

    const mainSlides: any[] = [
        "https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/17-1.jpg",
        "https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/33-experience.jpg",
        "https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/17-1.jpg",
        "https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/33-experience.jpg",
        "https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/17-1.jpg",
        "https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/33-experience.jpg",
        "https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/17-1.jpg",
        "https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/33-experience.jpg",


        // ... your image paths
    ];

    const thumbSlides: any[] = [
        // ... your thumb paths
    ];

    return (
        <div className="carousel-container">
            <div className='grid grid-cols-12'>
                <div className='col-span-8 py-8'>

                    <Swiper
                        spaceBetween={10}
                        slidesPerView={4}
                        // thumbs={{ swiper: thumbsSwiper }}
                        navigation={{ nextEl: '.swiper-button-nextt', prevEl: '.swiper-button-prevv' }}
                    >
                        {mainSlides.map((image, index) => (
                            <SwiperSlide key={index}>
                                <Image className='' src={image} alt={`Slide ${index}`} width={225} height={125} />
                                <div className='flex flex-col'>
                                    <span className='text-xs text-[#949cb0]'>S02E01</span>
                                    <span className='text-sm font-mont font-bold text-white'>Thirsty Birds</span>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className='col-span-4 flex flex-col gap-4 justify-center items-start px-5'>
                    <span className='text-white font-mont font-bold text-3xl'>Featured TV Episode
                        Premieres</span>
                    <div className='flex  select-none gap-4'>
                        <div className="swiper-button-prevv z-[1000] flex justify-center items-center rounded-full border w-8 h-8">&#10094;</div>
                        <div className="swiper-button-nextt z-[1000] flex justify-center items-center rounded-full border w-8 h-8">&#10095;</div>
                    </div>
                </div>
            </div>


            <Swiper
                // onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={3}
                freeMode={true}
                watchSlidesProgress={true}
            >
                {thumbSlides.map((thumb, index) => (
                    <SwiperSlide key={index}>
                        <img src={thumb} alt={`Thumb ${index}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TopChartCarousel;
