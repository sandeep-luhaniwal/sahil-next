'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import Icons from '../common/Icons';

const sliderArray = [
  {
    image: "/assets/images/webp/testimonial-first.webp",
    arabname: "أيان مالك، مسافر من لندن",
    arbades: "كان التخطيط لرحلتي إلى الرياض وجدة مُرهقًا إلى أن وجدتُ هذا التطبيق. تطابقت اقتراحات الذكاء الاصطناعي تمامًا مع اهتماماتي - مناظر غروب الشمس، والمواقع الثقافية، والمأكولات المحلية الرائعة مثل عربة كبسة. كان كل شيء مُوثّقًا وقريبًا، حتى أن خدمة الدردشة المحلية ساعدتني في حجز رحلة سفاري صحراوية في اللحظة الأخيرة. لقد جعل رحلتي سلسة، وشخصية، ولا تُنسى.",
    des: "Planning my Dammam, Makkah, Madinah, Abha trip felt overwhelming until I found this app. The AI suggestions matched my interests perfectly—sunset views, cultural spots, and amazing local food like the Kabsa food truck. Everything was verified and nearby, and the local chat support even helped me book a last-minute desert safari. It made my trip smooth, personal, and unforgettable.",
    name: "Ayaan Malik, Traveller from London"
  },
  {
    image: "/assets/images/webp/testimonial-first.webp",
    arabname: "أيان مالك، مسافر من لندن",
    arbades: "كان التخطيط لرحلتي إلى الرياض وجدة مُرهقًا إلى أن وجدتُ هذا التطبيق. تطابقت اقتراحات الذكاء الاصطناعي تمامًا مع اهتماماتي - مناظر غروب الشمس، والمواقع الثقافية، والمأكولات المحلية الرائعة مثل عربة كبسة. كان كل شيء مُوثّقًا وقريبًا، حتى أن خدمة الدردشة المحلية ساعدتني في حجز رحلة سفاري صحراوية في اللحظة الأخيرة. لقد جعل رحلتي سلسة، وشخصية، ولا تُنسى.",
    des: "Planning my Dammam, Makkah, Madinah, Abha trip felt overwhelming until I found this app. The AI suggestions matched my interests perfectly—sunset views, cultural spots, and amazing local food like the Kabsa food truck. Everything was verified and nearby, and the local chat support even helped me book a last-minute desert safari. It made my trip smooth, personal, and unforgettable.",
    name: "Fatima Al Zahrani, Blogger from Jeddah"
  },
  {
    image: "/assets/images/webp/testimonial-first.webp",
    arabname: "أيان مالك، مسافر من لندن",
    arbades: "كان التخطيط لرحلتي إلى الرياض وجدة مُرهقًا إلى أن وجدتُ هذا التطبيق. تطابقت اقتراحات الذكاء الاصطناعي تمامًا مع اهتماماتي - مناظر غروب الشمس، والمواقع الثقافية، والمأكولات المحلية الرائعة مثل عربة كبسة. كان كل شيء مُوثّقًا وقريبًا، حتى أن خدمة الدردشة المحلية ساعدتني في حجز رحلة سفاري صحراوية في اللحظة الأخيرة. لقد جعل رحلتي سلسة، وشخصية، ولا تُنسى.",
    des: "Planning my Dammam, Makkah, Madinah, Abha trip felt overwhelming until I found this app. The AI suggestions matched my interests perfectly—sunset views, cultural spots, and amazing local food like the Kabsa food truck. Everything was verified and nearby, and the local chat support even helped me book a last-minute desert safari. It made my trip smooth, personal, and unforgettable.",
    name: "Mohammed Khan, Photographer from Dubai"
  },

];

const Testimonial = ({ engShow }) => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? sliderArray.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === sliderArray.length - 1 ? 0 : prev + 1));
  };

  return (
    <div id='testimonial' className='relative'>
       <Image width={117} height={117} src="/assets/images/svg/circle.svg" alt='circle'
             className={`absolute bottom-0 left-[60%]`} />
      <Image className={`absolute z-10 ${engShow ?"left-0":"right-0"} xl:-top-28 -top-20 max-w-40 xl:max-w-[300px]`} src={"/assets/images/webp/mobile.webp"} width={300} height={287} alt='cimobiel' />
      <div className='max-w-[980px] mx-auto px-4 xl:px-0 py-14 md:py-16 lg:py-20'>
        <div className='text-center'>
          <p className='text-lg md:text-xl leading-175 text-black uppercase'>
            {engShow ? "  الأسئلة المتداولة " : "TESTIMONIALS"}
          </p>
          <h2 className='text-3xl leading-125 lg:text-4xl xl:text-[45px] font-medium text-black pt-5'>
            {engShow
              ? " احصل على التطبيق "
              : "What They Say About Us"}
          </h2>
        </div>

        <div className={`flex flex-col gap-14 justify-between mt-10 md:mt-12 lg:mt-[50px] items-center ${engShow ? "lg:flex-row-reverse text-end" : "lg:flex-row"}`}>
          <div className='max-w-[361px] w-full relative'>
            <Image width={117} height={117} src="/assets/images/svg/circle.svg" alt='circle'
             className={`absolute -top-[60px] -left-[60px]`} />
            <Image
              alt='testimonial'
              width={361}
              height={406}
              src={sliderArray[current].image}
              className='rounded-xl relative z-30 object-cover'
            />
          </div>
          <div className='max-w-[543px] w-full relative z-10'>
            <Image
              alt='quote'
              width={57}
              height={57}
              className={`${engShow ? "ms-auto" : "ms-0"}`}
              src={"/assets/images/svg/quotes.svg"}
            />
            <p className='text-black/65 text-base font-normal leading-156 py-6'>
              {engShow
                ? sliderArray[current].arbades
                : sliderArray[current].des}
            </p>
            <p className='text-lg md:text-xl font-medium leading-175'>
              {engShow
                ? sliderArray[current].arabname
                : sliderArray[current].name}
            </p>
            <div className='py-6 md:py-[30px]'>
              <div className={`flex gap-2.5  ${engShow ? "justify-end" : "justify-start"}`}>
                {sliderArray.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-10 h-1 rounded-full cursor-pointer transition-all duration-300 ${current === index ? 'bg-dark-pink' : 'bg-black/15'
                      }`}
                  />
                ))}
              </div>

            </div>
            <div className={`flex gap-2.5  ${engShow ? "justify-end" : "justify-start"}`}>
              <button
                onClick={handlePrev}
                className="bg-black hover:bg-dark-pink duration-300 w-12 h-10 md:w-[54px] md:h-[44px] rounded-[5px] flex justify-center items-center cursor-pointer"
              >
                <Icons icon={"prevArrow"} />
              </button>
              <button
                onClick={handleNext}
                className="bg-black hover:bg-dark-pink duration-300 w-12 h-10 md:w-[54px] md:h-[44px] rounded-[5px] flex justify-center items-center cursor-pointer"
              >
                <Icons icon={"nextArrow"} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
