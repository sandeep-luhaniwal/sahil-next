import Image from 'next/image'
import React from 'react'

const AboutUs = ({ engShow }) => {
    return (
        <div className='bg-white max-w-[1250px] mx-auto px-4 xl:px-0 py-14 md:py-16 lg:py-20'>
            <div className={`flex flex-col md:flex-row gap-8 md:gap-6 xl:gap-[50px] items-center ${engShow ? "md:flex-row-reverse" : "md:flex-row"}`}>
                <div className='max-w-[524px] md:max-w-[300px] lg:max-w-[384px] xl:max-w-[522px] mx-auto md:mx-0 w-full'>
                    <Image src={"/assets/images/webp/about-us.webp"}
                        width={524}
                        height={539}
                        alt='about-us'
                    />
                </div>
                <div className={`max-w-[678px] lg:max-w-[818px] xl:max-w-[678px] w-full ${engShow ? "text-right" : "text-left"}`}>
                    <p className='text-lg md:text-xl leading-175 text-black uppercase'>
                        {engShow ? " التقويم الثقافي " : "ABOUT US"}
                    </p>
                    <h2 className='text-3xl leading-125 lg:text-4xl xl:text-[45px] font-medium text-black pt-5'>
                        {engShow ? "مُصمم لاستكشاف الرياض وجدة والعلا، مدعوم بالذكاء الاصطناعي، مصمم للمسافر الفضولي" : " Designed to Explore Riyadh, Jeddah, & AlUlA Powered by AI, Built for the Curious Traveller"}
                    </h2>
                    <p className='text-black/65 text-base font-normal pt-2.5 leading-156'>
                        {engShow ? "من المعالم الشهيرة إلى الجواهر الثقافية المخفية، تطبيقنا هو بوابتك لاكتشاف قلب الرياض وجدة والعلا - شخصي وذكي ومحلي جميل." : "From iconic landmarks to hidden cultural gems, our app is your gateway to discovering the heart of Dammam, Makkah, Madinah, Abha, etc. — personalized, intelligent, and beautifully local."}
                    </p>
                    <div className={`flex lg:flex-row flex-col gap-6 md:gap-4 lg:gap-7 xl:gap-[30px] pt-6 xl:pt-[30px] ${engShow ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
                        <div className='w-full'>
                            <p className='text-lg md:text-xl font-medium text-black leading-130'>
                                {engShow ? "Our Mission & Vision" : " Our Mission & Vision"}
                            </p>
                            <p className='text-black/65 text-base font-normal leading-156 pt-2.5'>
                                {engShow ? "نهدف إلى إعادة تعريف تجربة المسافرين في الرياض وجدة والعلا - من خلال الجمع بين التكنولوجيا الذكية والرؤى المحلية لتقديم رحلات أصلية وشخصية ولا تُنسى." : "We aim to redefine how travellers experience Dammam, Makkah, Madinah, Abha, etc —by combining smart technology with local insights to deliver journeys that are authentic, personalized, and unforgettable."}
                            </p>
                        </div>
                        <div className='w-full'>
                            <p className='text-lg md:text-xl font-medium text-black leading-130'>
                                {engShow ? " مدعوم من الذكاء الاصطناعي الذكي " : "Our Purpose"}
                            </p>
                            <p className='text-black/65 text-base font-normal leading-156 pt-2.5'>
                                {engShow ? "مهمتنا هي جعل السفر شخصيًا وبديهيًا ومتصلًا بعمق - لنقربك من الرياض وجدة والعلا الحقيقية مع كل نقرة." : "Our mission is to make travel personal, intuitive, and deeply connected—to bring you closer to the real Dammam, Makkah, Madinah, Abha, etc. with every tap."}
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AboutUs