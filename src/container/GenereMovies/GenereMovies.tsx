"use client"
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

type Props = {
    text: string,
    isLight: boolean
    reverse: boolean
    isDarker: boolean
}

const GenereMovies = ({ text, isLight, reverse, isDarker }: Props) => {


    const mainSlides: string[] = [
        "https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/36-cztery-lwy-300x450.jpg",
        "https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/3-300x450.jpg",
        "https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/43-only-lovers-left-alive-300x450.jpg",
        "https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/33-a-woman-under-the-influence-300x450.jpg",
        "https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/23-300x450.jpg",
        "https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/13-300x450.jpg",
        "https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/1-300x450.jpg",
        "https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/51-walk-hard-300x450.jpg",
        "https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/50-the-300x450.jpg",
        "https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/49-the-sure-thing-300x450.jpg",
        "https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/48-take-shelter-300x450.jpg",
        "https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/47-sila-spokoju-300x450.jpg",
        "https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/46-she-is-funny-that-way-300x450.jpg",
        "https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/45-rybka-zwana-wanda-300x450.jpg",
        "https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/44-playing-it-cool-300x450.jpg",
        "https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/3-300x450.jpg",
        "https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/43-only-lovers-left-alive-300x450.jpg",
        "https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/37-dangerous-mind-300x450.jpg",
        "https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/35-brothers-bloom-300x450.jpg",
        "https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/32-a-long-way-down-300x450.jpg",
        "https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/30-300x450.jpg",
        "https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/29-300x450.jpg",
        "https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/27-300x450.jpg",
        "https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/25-300x450.jpg",
        "https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/15-300x450.jpg",
        "https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/31-300x450.jpg"
    ];

    const thumbSlides: any[] = [
        // ... your thumb paths
    ];

    return (
        <div className={`${!isLight && !isDarker ? "bg-white" : "bg-[#131722]"} ${isDarker && !isLight ? "bg-[#0E0D12]" : "bg-[#131722]"} `}>

            <div className={`carousel-container container  px-[38px]  `}>

                <div className='grid grid-cols-12 '>
                    <div className={`col-span-9 pt-4 pb-8 ${reverse ? "col-start-4" : "col-start-0"}`}>
                        <div className={`flex gap-3 py-3 items-baseline text-sm text-[#b4bbco] ${isDarker || isLight ? "text-white" : "text-black"}`}>
                            <span className='font-semibold text-base text-[#0f9ed1]'>Today</span>
                            <span>This week</span>
                            <span>Last 30 days</span>
                        </div>
                        <Swiper
                            spaceBetween={10}
                            slidesPerView={6}
                            // thumbs={{ swiper: thumbsSwiper }}
                            navigation={{ nextEl: '.swiper-button-next-t', prevEl: '.swiper-button-prev-t' }}
                        >
                            {mainSlides.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <Image className='w-[165px] h-[245px]' src={image} alt={`Slide ${index} gene`} width={225} height={125} />
                                    <div className='flex flex-col'>
                                        <span className='text-xs text-[#949cb0]'>S02E01</span>
                                        <span className={`text-sm font-mont font-bold ${isDarker || isLight ? "text-white" : "text-black"}`}>Thirsty Birds</span>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className={`col-span-3 ${reverse ? "col-start-1 row-start-1" : "col-start-10"} flex flex-col gap-4 justify-center items-start px-5`}>
                        <span className={`${isDarker || isLight ? "text-white" : "text-black"} font-mont font-bold text-3xl`}>{text}</span>
                        <div className={`flex ${isDarker || isLight ? "text-white" : "text-black"}   select-none gap-4`}>
                            <div className="swiper-button-prev-t z-[1000] flex justify-center items-center rounded-full border w-8 h-8">&#10094;</div>
                            <div className="swiper-button-next-t z-[1000] flex justify-center items-center rounded-full border w-8 h-8">&#10095;</div>
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
        </div>
    );
};

export default GenereMovies;
