'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import Icons from '../common/Icons';

const DesignedBuild = ({ engShow }) => {
    const swiperRef = useRef();

    const slides = [
        '/assets/images/webp/designed-slider-one.webp',
        '/assets/images/webp/designed-slider-two.webp',
        '/assets/images/webp/designed-slider-three.webp',
        '/assets/images/webp/designed-slider-four.webp',
        '/assets/images/webp/designed-slider-one.webp',
        '/assets/images/webp/designed-slider-two.webp',
        '/assets/images/webp/designed-slider-three.webp',
        '/assets/images/webp/designed-slider-four.webp',
    ];

    return (
        <div className='py-14 md:py-16 lg:py-20 relative bg-white max-w-[1600px] mx-auto'>
            {/* Background Image */}
            <Image
                height={324}
                width={1440}
                className='w-full absolute bottom-0 left-0 right-0'
                alt='bg'
                src={"/assets/images/svg/bg-parllelgram.svg"}
            />

            <div className='max-w-[1240px] px-4 mx-auto xl:px-0 relative z-10'>
                <div className={`flex flex-col gap-8 justify-between items-end pb-10 md:pb-12 lg:pb-[50px] ${engShow ? "md:flex-row-reverse" : "md:flex-row"}`}>
                    <div className={`max-w-[726px] ${engShow ? "text-right" : "text-left"}`}>
                        <h2 className='text-3xl leading-125 lg:text-4xl xl:text-[45px] relative font-medium text-black pt-5'>
                            {engShow
                                ? "مصمم لسهولة الاستخدام، مبني خصيصًا لك"
                                : "Designed for Ease, Built for You"}
                                <span>
                                    <Image
                                    height={70} 
                                    width={70}
                                    alt='gif-animtaion'
                                    src={"/assets/images/gif/animation.gif"}
                                    className={`w-[70px] h-[70px] absolute  -z-[1] ${engShow ? "-top-10 sm:top-0 sm:-left-10 lg:left-0":"-right-0 sm:top-0 top-10 md:-right-16"}`}
                                    />
                                </span>
                        </h2>
                        <p className='text-black/65 text-base font-normal pt-2.5 leading-156'>
                            {engShow
                                ? "استكشف المعالم والكنوز المخفية والنكهات المحلية باستخدام تطبيق ذكي يخصص رحلتك في دبي - إطلالات على الأفق والأماكن الثقافية وأطعمة الشوارع، كل ذلك في مكان واحد."
                                : "Explore landmarks, hidden gems, and local flavors with a smart app that personalizes your Dammam, Makkah, Madinah, Abha, etc journey—skyline views, cultural spots, and street food, all in one place."}
                        </p>
                    </div>
                    <div className='flex gap-2.5'>
                        <button
                            onClick={() => swiperRef.current?.slidePrev()}
                            className="bg-black hover:bg-dark-pink duration-300 w-12 h-10 md:w-[54px] md:h-[44px] rounded-[5px] flex justify-center items-center cursor-pointer"
                        >
                            <Icons icon={"prevArrow"} />
                        </button>
                        <button
                            onClick={() => swiperRef.current?.slideNext()}
                            className="bg-black hover:bg-dark-pink duration-300 w-12 h-10 md:w-[54px] md:h-[44px] rounded-[5px] flex justify-center items-center cursor-pointer"
                        >
                            <Icons icon={"nextArrow"} />
                        </button>
                    </div>
                </div>
                <div className='relative'>
                    <Swiper
                        modules={[Autoplay]}
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        slidesPerView={4}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        speed={700}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 4 },
                        }}
                    >
                        {slides.map((src, index) => (
                            <SwiperSlide key={index}>
                                <div className='flex justify-center'>
                                    <Image
                                        src={src}
                                        alt={`screen-${index}`}
                                        width={285}
                                        height={549}
                                        className=''
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default DesignedBuild;
