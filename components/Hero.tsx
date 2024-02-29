"use client"
import React from 'react'
import Image from "next/image"
import Link from 'next/link'
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


//Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';



const Hero = () => {


  return (
    <main className="container-fluid text-center animate-fade animate-duration-1000 animate-ease-in bg-[url('/Footerbk.png')] dark:bg-[url('/darkherobak.png')] bg-cover bg-no-repeat bg-white dark:bg-surfacedark-tertiary pt-10">
      <section className="max-container padding-container relative flex flex-col gap-2 pt-10">
        <h1 className='text-surfacedark-primary dark:text-surfacelight-primary animate-fade animate-ease-in'>Liberate the Future with e-life <br />App Design and Development</h1>
        <h5 className='text-surfacedark-secondary dark:text-surfacelight-secondary animate-fade animate-ease-in'>Limitless Possibilities on iOS, Android, and Responsive Web Apps</h5>
        <p className='text-surfacedark-tertiary dark:text-surfacelight-tertiary animate-fade animate-ease-in'>Create Your Exclusive Beta App for Free</p>

        <div className='flex w-full gap-3 sm:flex-row justify-center '>

          <Link href="/pricing">
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-sm text-sm px-2 py-2.5 p-2 dark:bg-blue-600 dark:hover:bg-blue-700"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right relative inline-block mr-2" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
            </svg>Get Started
            </button>
          </Link>

          <Link href={"/contact"}>
            <button type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 font-medium rounded-sm text-sm px-2 py-2.5 p-2 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-700">
              Request a Demo
            </button>
          </Link>
        </div>

        <div className='relative animate-fade animate-duration-1000 animate-ease-in max-lg:hidden px-2'>
          <Swiper
            //Swiper modules
            effect={'coverflow'}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            grabCursor={true}
            centeredSlides={false}
            slidesPerView={3}
            coverflowEffect={{

              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,

            }}
            pagination={true}
            modules={[Autoplay, EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="/heroslider/laptop.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/heroslider/dashboard.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/heroslider/laptop2.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/heroslider/ipad.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/heroslider/laptop3.png" />
            </SwiperSlide>
            

          </Swiper>

          <div className='grid lg:grid-cols-1 max-sm:grid-cols-1 p-2 justify-center'>

            <div className='flex-wrap text-center'>

              <ul className='text-surfacedark-primary dark:text-surfacelight-primary inline space-x-1 text-center'>
                <li className='inline-block bg-surfacelight-tertiary dark:bg-surfacedark-tertiary rounded-sm p-1 mt-1'><span>Transform your Business</span></li>
                <li className='inline-block bg-surfacelight-tertiary dark:bg-surfacedark-tertiary rounded-sm p-1 mt-1'><span>Craft Enduring Business Solutions</span></li>
                <li className='inline-block bg-surfacelight-tertiary dark:bg-surfacedark-tertiary rounded-sm p-1 mt-1'><span>Prioritizes Efficient Design & Development</span></li>
                <li className='inline-block bg-surfacelight-tertiary dark:bg-surfacedark-tertiary rounded-sm p-1 mt-1'><span>Build Cross-Platform Apps</span></li>
                <li className='inline-block bg-surfacelight-tertiary dark:bg-surfacedark-tertiary rounded-sm p-1 mt-1'><span>Customize with our Developer SDK</span></li>


              </ul>
            </div>


          </div>
        </div>

        <div className='animate-fade animate-duration-1000 animate-ease-in relative px-2 lg:hidden'>
          <Swiper
            //Swiper modules
            effect={'coverflow'}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            grabCursor={true}
            autoHeight={true}
            centeredSlides={false}
            slidesPerView={1}
            coverflowEffect={{
              rotate: 20,
              stretch: 5,
              depth: 80,
              modifier: 10,
              slideShadows: false,
            }}
            pagination={true}
            modules={[Autoplay, EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="/heroslider/e-commerce-iphone.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/heroslider/iphone-event-checkin.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/heroslider/md-online-iphone.png" />
            </SwiperSlide>

          </Swiper>

        </div>

      </section>
    </main>
  )
}

export default Hero