import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = ({ engShow }) => {
    return (
        <div className='mx-auto max-w-[1250px] px-4 xl:px-0 pt-[42px]'>
            <h1 className="text-white leading-120 text-center max-w-[951px] mx-auto text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-bold mb-2.5">
                {engShow ? "رفيق سفرك الذكي في الرياض وجدة والعلا" : "Your Smart Travel Companion in Riyadh, Jeddah, & AlUlA"}
            </h1>
            <p className='text-white ff_e text-xl md:text-[22px] lg:text-2xl leading-125 text-center'>
                {engShow ? "استكشف المعالم الشهيرة والكنوز المخفية والنكهات المحلية - كل ذلك في تطبيق واحد." : "Explore iconic landmarks, hidden gems, and local flavors—all in one app."}
            </p>
            <div className='flex gap-4 items-center justify-center pt-[30px] pb-12'>
                <Link href='/' target='_blank'>
                    <Image src={"/assets/images/svg/play-store.svg"}
                        height={54}
                        width={164}
                        alt='play-store'
                        className='w-[120px] md:w-[164px] cursor-pointer'
                    />
                </Link>
                <Link href='/' target='_blank'>
                    <Image src={"/assets/images/svg/app-store.svg"}
                        height={54}
                        width={164}
                        alt='app-store'
                        className='w-[120px] md:w-[164px] cursor-pointer'
                    />
                </Link>

            </div>
            <div className='flex justify-center'>
                <Image src={"/assets/images/webp/hero-img.webp"}
                    width={863}
                    height={511}
                    alt='hero-img'
                    className='max-w-[863px] w-full'
                />
            </div>
        </div>
    )
}

export default Hero