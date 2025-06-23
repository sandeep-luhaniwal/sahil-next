import { FEATURES_DATA_LIST } from '@/utlis/helper'
import Image from 'next/image'
import React from 'react'

const FeaturesAI = ({ engShow }) => {
    return (
        <div className={`bg_features_eng  py-14 md:py-16 lg:py-20`}>
            <div className="max-w-[1250px] px-4 mx-auto xl:px-0">
                <div className={`flex flex-col lg:flex-row gap-8 lg:gap-6 xl:gap-[50px] items-center ${engShow ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
                    <div className={`lg:max-w-[409px] xl:max-w-[559px] w-full ${engShow ? "text-right" : "text-left"}`}>
                        <h2 className='text-3xl leading-125 lg:text-4xl xl:text-[45px] font-medium text-white pt-5'>
                            {engShow ? "ميزات تُثري رحلتك إلى الرياض وجدة والعلا" : "Features That Take Your Makkah, Madinah, Abha, etc. Journey Further"}
                        </h2>
                        <p className={`text-white/65 text-base lg:max-w-[446px] font-normal pt-2.5 leading-156 ${engShow ? "ms-auto" : "ms-0"}`}>
                            {engShow ? "اكتشف دبي كما لم يحدث من قبل مع اقتراحات الذكاء الاصطناعي المخصصة، والنقاط الساخنة الموثوقة، والمعالم الثقافية، والدعم في الوقت الفعلي - في متناول يدك." : "Discover Dammam, Makkah, Madinah, Abha, etc like never before with personalized AI suggestions, verified hotspots, cultural highlights, and real-time support—right at your fingertips."}
                        </p>
                    </div>
                    <div className='lg:max-w-[634px] w-full'>
                        <div className={`grid sm:grid-cols-2 gap-6 md:gap-[30px] lg:gap-4 xl:gap-[30px] ${engShow ? 'direction-rtl' : ''}`}>
                            {FEATURES_DATA_LIST.map((obj, i) => {
                                return (
                                    <div className={`bg-white group hover:bg-dark-pink duration-300 shadow-[0px_4px_24px_rgba(0,0,0,0.12)] rounded-[10px] p-[15px] ${engShow ? "text-right" : "text-left"}`} key={i}>
                                        <Image src={obj.images} alt={obj.title} width={36} height={36} className={`w-[36px] h-[36px] mb-[15px] ${engShow ? "ms-auto" : "ms-0"}`} />
                                        <p className='text-lg group-hover:text-white duration-300 md:text-xl font-medium leading-156 text-black'>
                                            {engShow ? obj.arabicTitle : obj.title}
                                        </p>
                                        <p className='text-black/65 group-hover:text-white/65 duration-300 text-base leading-175'>
                                            {engShow ? obj.arabicDescription : obj.description}
                                        </p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturesAI