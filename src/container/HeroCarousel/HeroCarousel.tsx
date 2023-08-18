"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/grid';

// import './styles.css';

// import required modules
import { FreeMode, Navigation, Thumbs, Grid } from 'swiper/modules';
import Image from 'next/image';

export default function App() {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

    const mainSlides: string[] = [
        'https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/s-8.jpg',
        'https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/s-1.jpg',
        'https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/s-2.jpg',
        'https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/s-3.jpg',
        'https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/s-4.jpg',
        'https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/s-5.jpg',
        'https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/s-6.jpg',
        'https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/s-7.jpg',
    ]
    const Slides: string[] = [
        'https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/slider-8-1.jpg',
        'https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/slider-1.jpg',
        'https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/slider-2.jpg',
        'https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/slider-3.jpg',
        'https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/slider-4-1.jpg',
        'https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/slider-5.jpg',
        'https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/slider-6.jpg',
        'https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/slider-7.jpg',
    ]



    return (
        <div className="h-[calc(100vh-82px)] relative ">
            <Swiper

                spaceBetween={1}
                // navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}

            >

                {
                    Slides.map(slide => (
                        <SwiperSlide >
                            <div className='px-[38px] h-screen  bg-no-repeat bg-cover' style={{ backgroundImage: `url('${slide}')` }}>
                                <div className='container flex flex-col justify-center h-full items-start'>

                                    <h3 className='text-white text-[72px] font-mont  font-bold'>American Dream</h3>
                                    <p className='py-2 text-white text-lg'>2017 | Comedy | 1hr 55min</p>
                                    <div className='w-fit flex gap-3 text-white'>
                                        <button className='px-7 py-3 font-bold text-lg bg-[#24baef] rounded-sm'>Watch Now</button>
                                        <button className='px-7 py-3 border rounded-sm text-lg font-bold'> + Play Now</button>
                                    </div>
                                    {/* <Image className='h-[150vh] w-[200vw] object-fill' src={slide} alt="" width={1920} height={1080} /> */}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <div className='flex flex-wrap items-center justify-center absolute w-[50%] h-[280px] bottom-12 right-[66px] '>

                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={5}
                    // freeMode={true}
                    grid={{
                        rows: 2,

                    }}
                    watchSlidesProgress={true}
                    modules={[Grid, FreeMode, Navigation, Thumbs,]}
                >
                    {
                        mainSlides.map(slide => (
                            <SwiperSlide>
                                <Image className='w-[220px] h-[120px]' src={slide} alt="" width={235} height={140} />
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
            </div>
        </div >
    );
}
