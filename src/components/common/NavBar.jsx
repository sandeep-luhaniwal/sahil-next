"use client"
import { NAVIGATION_LINK_LIST } from '@/utlis/helper'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Icons from './Icons'
import Hero from '../home/Hero'

const NavBar = ({ engShow, setEngShow }) => {
  const [isOpen, setIsOpen] = useState(false);
  const NAVBAR_LINKS = engShow
    ? [...NAVIGATION_LINK_LIST].reverse()
    : NAVIGATION_LINK_LIST;
  return (
    <div className='bg_hero'>
      <div className='mx-auto max-w-[1250px] px-4 xl:px-0'>
        <div className={`flex ${engShow ? "flex-row-reverse" : "flex-row"} justify-between items-center gap-4 py-8 md:py-12 lg:py-[50px]`}>

          <Link href={'/'}>
            <Image src={"/assets/images/webp/page-logo.webp"}
              height={51}
              width={124}
              alt='page-logo'
              className='w-[80px] sm:w-[100px] lg:w-[124px]' />
          </Link>
          <div className='md:flex items-center hidden gap-4 md:gap-6 lg:gap-10 xl:gap-[50px]'>
            {NAVBAR_LINKS.map((obj, i) => {
              return (
                <Link href={obj.url} key={i}
                  className={`text-white ff_light text-base font-normal transition-all durration-300 hover:text-orange relative
                     before:w-0 before:h-[2px] before:bg-orange before:absolute before:bottom-0 before:left-0 hover:before:w-full before:transition-all before:durration-300`}
                >
                  {engShow ? `${obj.arabic}` : `${obj.title}`}
                </Link>
              )
            })}
          </div>
          <div className={`flex ${engShow ? "flex-row-reverse" : "flex-row"} items-center gap-3 sm:gap-4`}>
            <div className='relative group'>
              <p className={`text-white cursor-pointer text-base font-normal transition-all durration-300 group-hover:text-orange relative
                     before:w-0 ff_light flex items-center gap-1 before:h-[2px] before:bg-orange before:absolute before:bottom-0 before:left-0 hover:before:w-full before:transition-all before:durration-300`}
              > {engShow ? "AR" : "En"} <span><Icons className icon={"arrow"} /></span></p>
              <div className='bg-dark-blue absolute hidden group-hover:block top-full shadow-2xl text-white py-2 px-4 border border-white/60 rounded-xl'>
                <p className='cursor-pointer hover:text-orange duration-300' onClick={() => setEngShow(false)}>En</p>
                <p className='cursor-pointer mt-1 hover:text-orange duration-300' onClick={() => setEngShow(true)}>AR</p>
              </div>
            </div>
            <button className='rounded-[50px] group cursor-pointer p-[1px] bg_gradient'>
              <span className='bg-dark-pink block group-hover:bg-orange duration-300 text-white font-medium text-base px-2.5 py-1.5 sm:px-5 sm:py-3 md:xp-7 lg:px-[30px] md:py-[15px] rounded-[100px]'>Download App</span>
            </button>
            <div onClick={() => setIsOpen(true)} className='md:hidden cursor-pointer'>
              <Icons icon={"menuToggel"} />
            </div>
          </div>

        </div>

      </div>
      <div className={`fixed top-0 left-0 w-full min-h-screen p-8 pt-16 flex flex-col gap-6 bg-dark-blue duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} z-50`}>
        <div onClick={() => setIsOpen(false)} className='absolute cursor-pointer top-2 right-3'>
          <Icons icon={"cross"} />
        </div>
        {NAVIGATION_LINK_LIST.map((obj, i) => {
          return (
            <Link href={obj.url}
              key={i}
              onClick={() => setIsOpen(false)}
              className={`text-white text-xl ff_light max-w-max font-normal transition-all durration-300 hover:text-orange relative
                     before:w-0 before:h-[2px] before:bg-orange before:absolute before:bottom-0 before:left-0 hover:before:w-full before:transition-all before:durration-300`}
            >
              {obj.title}
            </Link>
          )
        })}
      </div>
      <Hero engShow={engShow} />

    </div >
  )
}

export default NavBar