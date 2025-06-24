import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Icons from './Icons'

const Footer = ({ engShow }) => {
   const fullyear = new Date().getFullYear();
  return (
    <div className="bg-[#101010]">
      <div className='max-w-[1240px] px-4 xl:px-0 mx-auto '>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 xl:gap-20 py-10 md:py-12 lg:py-[50px]">
          <div>
            <Link href={'/'}>
              <Image src={"/assets/images/webp/page-logo.webp"}
                height={51}
                width={124}
                alt='page-logo'
                className='w-[80px] sm:w-[100px] lg:w-[124px]' />
            </Link>
            <p className='pt-2 text-white text-sm'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <div className='pt-6'>
              <p className='text-white text-base'>Follow Us On</p>
              <div className="flex gap-4 pt-2">
                <Link href={"/"}>
                  <Image width={24} height={24} alt='facebook'
                    src={"/assets/images/webp/facebook.webp"}
                  />
                </Link>
                <Link href={"/"}>
                  <Image width={24} height={24} alt='facebook'
                    src={"/assets/images/webp/instagrame.webp"}
                  />
                </Link>
                <Link href={"/"}>
                  <Image width={32} height={24} alt='facebook'
                    src={"/assets/images/webp/youtube.webp"}
                  />
                </Link>
                <Link href={"/"}>
                  <Image width={24} height={24} alt='facebook'
                    src={"/assets/images/webp/twitter.webp"}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-3 lg:gap-4'>
            <p className='text-white font-medium text-xl md:text-2xl'>Our Company</p>
            <Link href={"/"} className='text-white leading-156 font-normal text-base hover:text-orange duration-300'>Home</Link>
            <Link href={"/"} className='text-white leading-156 font-normal text-base hover:text-orange duration-300'>About</Link>
            <Link href={"/"} className='text-white leading-156 font-normal text-base hover:text-orange duration-300'>Features</Link>
            <Link href={"/"} className='text-white leading-156 font-normal text-base hover:text-orange duration-300'>Testimonials</Link>
            <Link href={"/"} className='text-white leading-156 font-normal text-base hover:text-orange duration-300'>FAQ</Link>
          </div>
          <div className='flex flex-col gap-3 lg:gap-4'>
            <p className='text-white font-medium text-xl md:text-2xl'>Important Links</p>
            <Link href={"/"} className='text-white leading-156 font-normal text-base hover:text-orange duration-300'>Privacy Policy</Link>
            <Link href={"/"} className='text-white leading-156 font-normal text-base hover:text-orange duration-300'>Terms & Condition</Link>
            <div className='pt-3'>
              <p className='text-white font-medium text-xl md:text-2xl pb-2'>Get in Touch!</p>
              <Link href={"/"} className='text-white flex items-center gap-6 leading-156 font-normal text-base hover:text-orange duration-300'>hello@sahilmate.com
                <span><Icons icon={"redArrow"} /></span></Link>
            </div>
          </div>
          <div className='flex flex-col gap-3 lg:gap-4'>
            <p className='text-white font-medium text-xl md:text-2xl'>Important Links</p>
            <Link href={"/"} className='text-white leading-156 font-normal mt-6 text-base hover:text-orange duration-300'>
              <Image width={157} height={157} className='max-w-[157px]' alt='scanner'
                src={"/assets/images/webp/scanner.webp"} />
            </Link>
          </div>
        </div>
          <p className='text-base py-5 text-center border-t border-[#ABABAB] lg:pb-[30px] text-[#ABABAB]'>© Copyright {fullyear} <span className='text-white'>Sahil</span> - All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer