'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Icons from '../common/Icons';

const faqData = [
    {
        arabQuestion: "ما الذي يجعل هذا التطبيق مختلفًا عن تطبيقات السفر الأخرى؟",
        arabAnswer: "تم تصميم تطبيقنا خصيصًا لاستكشاف دبي من خلال اقتراحات مدعومة بالذكاء الاصطناعي، ومواقع تم التحقق منها، ودعم الدردشة مع الخبراء المحليين، والتركيز على الأصالة الثقافية والراحة.",
        question: 'What makes this app different from other travel apps?',
        answer: 'Our app is built specifically for exploring Riyadh & Jeddah & AlUlA with AI-powered suggestions, verified locations, local expert chat support, and a focus on cultural authenticity and convenience.'
    },
    {
        arabQuestion: "كيف يعمل نظام التوصية المبني على الذكاء الاصطناعي؟",
        arabAnswer: "تم تصميم تطبيقنا خصيصًا لاستكشاف دبي من خلال اقتراحات مدعومة بالذكاء الاصطناعي، ومواقع تم التحقق منها، ودعم الدردشة مع الخبراء المحليين، والتركيز على الأصالة الثقافية والراحة.",
        question: 'How does the AI-based recommendation system work?',
        answer: 'Our app is built specifically for exploring Riyadh & Jeddah & AlUlA with AI-powered suggestions, verified locations, local expert chat support, and a focus on cultural authenticity and convenience.'
    },
    {
        arabQuestion: "هل تم التحقق من كل ما هو مدرج في التطبيق؟",
        arabAnswer: "تم تصميم تطبيقنا خصيصًا لاستكشاف دبي من خلال اقتراحات مدعومة بالذكاء الاصطناعي، ومواقع تم التحقق منها، ودعم الدردشة مع الخبراء المحليين، والتركيز على الأصالة الثقافية والراحة.",
        question: 'Is everything listed on the app verified?',
        answer: 'Our app is built specifically for exploring Riyadh & Jeddah & AlUlA with AI-powered suggestions, verified locations, local expert chat support, and a focus on cultural authenticity and convenience.'
    },
    {
        arabQuestion: "هل يمكنني الدردشة مع شخص حقيقي إذا كنت بحاجة إلى المساعدة؟",
        arabAnswer: "تم تصميم تطبيقنا خصيصًا لاستكشاف دبي من خلال اقتراحات مدعومة بالذكاء الاصطناعي، ومواقع تم التحقق منها، ودعم الدردشة مع الخبراء المحليين، والتركيز على الأصالة الثقافية والراحة.",
        question: 'Can I chat with a real person if I need help?',
        answer: 'Our app is built specifically for exploring Riyadh & Jeddah & AlUlA with AI-powered suggestions, verified locations, local expert chat support, and a focus on cultural authenticity and convenience.'
    },
    {
        arabQuestion: "هل التطبيق مجاني للاستخدام؟",
        arabAnswer: "تم تصميم تطبيقنا خصيصًا لاستكشاف دبي من خلال اقتراحات مدعومة بالذكاء الاصطناعي، ومواقع تم التحقق منها، ودعم الدردشة مع الخبراء المحليين، والتركيز على الأصالة الثقافية والراحة.",
        question: 'Is the app free to use?',
        answer: 'Our app is built specifically for exploring Riyadh & Jeddah & AlUlA with AI-powered suggestions, verified locations, local expert chat support, and a focus on cultural authenticity and convenience.'
    },

];

const Faq = ({ engShow }) => {
    const [activeIndex, setActiveIndex] = useState(faqData.length > 0 ? 0 : null);


    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="bg-white py-14 md:py-16 lg:py-20">
            <div className="max-w-[1240px] mx-auto px-4 xl-px-0">
                <div className="grid grid-cols-1 lg:grid-cols-[37%_59%] gap-10 md:gap-6 xl:gap-[10px] justify-between items-center">
                    <div className={` ${engShow ? "text-right" : "text-left"}`}>
                        <h2 className='text-3xl leading-125 lg:text-4xl xl:text-[45px] font-medium text-black pt-5'>
                            {engShow ? " الأسئلة الشائعة " : "Frequently Asked Question"}
                        </h2>
                        <p className={`text-black/65 text-base lg:max-w-[446px] font-normal pt-2.5 leading-156 ${engShow ? "ms-auto" : "ms-0"}`}>
                            {engShow ? "هل لديك أسئلة حول استخدام التطبيق، أو التخطيط لرحلتك إلى دبي، أو حجز الأنشطة؟ ستجد هنا إجابات واضحة ومفيدة لتستكشف بثقة." :
                                "Have questions about using the app, planning your Dammam, Makkah, Madinah, Abha, etc. trip, or booking activities? Find clear, helpful answers right here so you can explore with confidence."}
                        </p>
                        <Image
                            width={443}
                            height={295}
                            alt='fag-imh'
                            className='max-w-[443px] w-full mt-6 lg:mt-[30px]'
                            src={"/assets/images/webp/faq-img.webp"}
                        />
                    </div>
                    <div data-aos="fade-up-left" className="">
                        {faqData.map((item, index) => (
                            <div

                                key={index}
                                className={`transition-all duration-300 border border-black/35 ease-in-out mb-3 lg:mb-6 xl:mb-[30px] rounded-[10px] overflow-hidden ${activeIndex === index ? 'bg-[#E4DFE8] text-dark-pink' : 'bg-white text-black'
                                    }`}
                            >
                                <div
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full cursor-pointer text-base md:text-lg lg:text-xl font-medium p-[15px] leading-175 focus:outline-none flex justify-between items-start"
                                >
                                    <span>
                                        {engShow ? item.arabQuestion : item.question}
                                    </span>
                                    <span className="text-xl">
                                        {activeIndex === index ? <Icons icon={"uparrow"} /> : <Icons icon={"downarrow"} />}
                                    </span>
                                </div>
                                <div
                                    className={`text-base px-3 text-dark-pink/65 leading-[168%] transition-max-height duration-300 ease-in-out overflow-hidden ${activeIndex === index ? 'max-h-[300px] pb-3' : 'max-h-0 py-0'
                                        }`}
                                >
                                    <p className="text-base -mt-1">
                                        {engShow ? item.arabAnswer : item.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
