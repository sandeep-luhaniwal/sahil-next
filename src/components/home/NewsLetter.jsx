import React from 'react'

const NewsLetter = ({ engShow }) => {
    return (
        <div className="bg-dark-pink">
            <div className='max-w-[1240px] px-4 xl:px-0 mx-auto py-14 md:py-16 lg:py-20'>
                <div className={`flex flex-col  items-end md:gap-6 lg:gap-[50px] ${engShow ? "md:flex-row-reverse" : "md:flex-row"}`}>
                    <div className={`lg:max-w-[638px] w-full ${engShow ? "text-right" : "text-left"}`}>
                        <h4 className='text-white text-2xl lg:text-[32px] leading-175 font-medium'>
                            {engShow ?
                                " الصفحة الرئيسية " :
                                "Subscribe To Our Newsletter"
                            }

                        </h4>
                        <h3 className='text-3xl md:text-[32px] lg:text-[44px] font-medium text-white'>
                            {engShow ?
                                " الشهادات " :
                                " Our latest company updates"
                            }

                        </h3>
                    </div>
                    <div className="w-full lg:max-w-[552px] pt-8 md:pt-0">
                        <form className="relative">
                            <button className={`font-medium z-20 cursor-pointer absolute top-0 ${engShow ? "left-2.5" : "end-2.5"} text-base duration-300 hover:text-white hover:bg-black text-dark-pink bg-white rounded-[10px] px-4 py-2.5`}>
                                {engShow ? " سياسة الخصوصية " : "Subscribe"}
                            </button>
                            <input
                                required
                                type="email"
                                name="email"
                                id="sub"
                                placeholder={engShow ? " روابط مهمة " : "Type your email here"}
                                className={`text-white outline-none w-full py-3 px-2.5 border-b-white border-b ${engShow ? "text-end" : "text-left"}`}
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter