"use client"
import React from 'react'
import Image from "next/image"
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


//Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';


const Ourtechstack = () => {
  return (
    <main className="container-fluid h-full w-full bg-surfacelight-primary dark:bg-surfacedark-primary inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] py-10">
        <section className='max-container'>
        <div className="gap-2 py-10 text-center">
            <h1 className='text-surfacedark-primary dark:text-surfacelight-primary'>Our Tech Stack</h1>
            <h3 className='text-surfacedark-secondary dark:text-surfacelight-secondary'>Our Solutions are Fuelled by Forefront Technologies and Tools</h3>
        </div>
        <div className='flex justify-center items-center bg px-2 bl max-sm:hidden'>
        <Swiper
            //Swiper modules
            effect={'coverflow'}
            
            autoplay={{
              delay: 1500,
              disableOnInteraction: true,
              
            }}
            loop={true}
            spaceBetween={20}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={9}
            coverflowEffect={{

              rotate: 20,
              stretch: 0,
              depth: 100,
              modifier: 0,
              slideShadows: false,

            }}
            pagination={true}
            modules={[Autoplay, EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="/ourstack/angular.png" />
              <p className='text-surfacedark-secondary dark:text-surfacelight-secondary font-semibold'>Angular</p>
            </SwiperSlide>

            <SwiperSlide>
            <img src="/ourstack/react.png" />
            <p className='text-surfacedark-secondary dark:text-surfacelight-secondary font-semibold'>React</p>
            </SwiperSlide>

            <SwiperSlide>
            <img src="/ourstack/javascript.png" />
            <p className='text-surfacedark-secondary dark:text-surfacelight-secondary font-semibold'>Java Script</p>
            </SwiperSlide>

            <SwiperSlide>
            <img src="/ourstack/vuejs.png" />
            <p className='text-surfacedark-secondary dark:text-surfacelight-secondary font-semibold'>Vue.js</p>
            </SwiperSlide>

            <SwiperSlide>
            <img src="/ourstack/nodejs.png" />
            <p className='text-surfacedark-secondary dark:text-surfacelight-secondary font-semibold'>Node.js</p>
            </SwiperSlide>

            <SwiperSlide>
            <img src="/ourstack/nunjuks.png" />
            <p className='text-surfacedark-secondary dark:text-surfacelight-secondary font-semibold'>Nunjucks</p>
            </SwiperSlide>

            <SwiperSlide>
            <img src="/ourstack/laravel.png" />
            <p className='text-surfacedark-secondary dark:text-surfacelight-secondary font-semibold'>Laravel</p>
            </SwiperSlide>

            <SwiperSlide>
            <img src="/ourstack/mysql.png" />
            <p className='text-surfacedark-secondary dark:text-surfacelight-secondary font-semibold'>MySQL</p>
            </SwiperSlide>

            <SwiperSlide>
            <img src="/ourstack/dotnet.png" />
            <p className='text-surfacedark-secondary dark:text-surfacelight-secondary font-semibold'>Microsoft .NET</p>
            </SwiperSlide>

            <SwiperSlide>
            <img src="/ourstack/sqlserver.png" />
            <p className='text-surfacedark-secondary dark:text-surfacelight-secondary font-semibold'>SQL Server</p>
            </SwiperSlide>

            <SwiperSlide>
            <img src="/ourstack/kubernetes.png" />
            <p className='text-surfacedark-secondary dark:text-surfacelight-secondary font-semibold'>Kubernetes</p>
            </SwiperSlide>

            <SwiperSlide>
            <img src="/ourstack/docker.png" />
            <p className='text-surfacedark-secondary dark:text-surfacelight-secondary font-semibold'>Docker</p>
            </SwiperSlide>

            <SwiperSlide>
            <img src="/ourstack/aws.png" />
            <p className='text-surfacedark-secondary dark:text-surfacelight-secondary font-semibold'>AWS</p>
            </SwiperSlide>

            <SwiperSlide>
            <img src="/ourstack/jenkins.png" />
            <p className='text-surfacedark-secondary dark:text-surfacelight-secondary font-semibold'>Jenkins</p>
            </SwiperSlide>

            <SwiperSlide>
            <img src="/ourstack/kafka.png" />
            <p className='text-surfacedark-secondary dark:text-surfacelight-secondary font-semibold'>Kafka</p>
            </SwiperSlide>

            <SwiperSlide>
            <img src="/ourstack/mongodb.png" />
            <p className='text-surfacedark-secondary dark:text-surfacelight-secondary font-semibold'>MongoDB</p>
            </SwiperSlide>

            <SwiperSlide>
            <img src="/ourstack/mongodb.png" />
            <p className='text-surfacedark-secondary dark:text-surfacelight-secondary font-semibold'>MongoDB</p>
            </SwiperSlide>

          </Swiper>
        </div>

        
        <div className='flex justify-center items-center bg px-2 bl py-10 lg:hidden'>
        <Swiper
            //Swiper mobile
            effect={'coverflow'}
            
            autoplay={{
              delay: 1500,
              disableOnInteraction: true,
              
            }}
            loop={true}
            spaceBetween={20}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            coverflowEffect={{

              rotate: 20,
              stretch: 0,
              depth: 100,
              modifier: 0,
              slideShadows: false,

            }}
            pagination={true}
            modules={[Autoplay, EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="/ourstack/angular.png" />
              <p className='text-surfacedark-secondary dark:text-surfacelight-secondary font-semibold'>Angular</p>
            </SwiperSlide>

            <SwiperSlide>
            <img src="/ourstack/react.png" />
            <p className='text-surfacedark-secondary dark:text-surfacelight-secondary font-semibold'>React</p>
            </SwiperSlide>

            <SwiperSlide>
            <img src="/ourstack/javascript.png" />
            <p className='text-surfacedark-secondary dark:text-surfacelight-secondary font-semibold'>Java Script</p>
            </SwiperSlide>

            <SwiperSlide>
            <img src="/ourstack/vuejs.png" />
            <p className='text-surfacedark-secondary dark:text-surfacelight-secondary font-semibold'>Vue.js</p>
            </SwiperSlide>

            <SwiperSlide>
            <img src="/ourstack/nodejs.png" />
            <p className='text-surfacedark-secondary dark:text-surfacelight-secondary font-semibold'>Node.js</p>
            </SwiperSlide>

            <SwiperSlide>
            <img src="/ourstack/nunjuks.png" />
            <p className='text-surfacedark-secondary dark:text-surfacelight-secondary font-semibold'>Nunjucks</p>
            </SwiperSlide>

            <SwiperSlide>
            <img src="/ourstack/laravel.png" />
            <p className='text-surfacedark-secondary dark:text-surfacelight-secondary font-semibold'>Laravel</p>
            </SwiperSlide>

            <SwiperSlide>
            <img src="/ourstack/mysql.png" />
            <p className='text-surfacedark-secondary dark:text-surfacelight-secondary font-semibold'>MySQL</p>
            </SwiperSlide>

            <SwiperSlide>
            <img src="/ourstack/dotnet.png" />
            <p className='text-surfacedark-secondary dark:text-surfacelight-secondary font-semibold'>Microsoft .NET</p>
            </SwiperSlide>

            <SwiperSlide>
            <img src="/ourstack/sqlserver.png" />
            <p className='text-surfacedark-secondary dark:text-surfacelight-secondary font-semibold'>SQL Server</p>
            </SwiperSlide>

            <SwiperSlide>
            <img src="/ourstack/kubernetes.png" />
            <p className='text-surfacedark-secondary dark:text-surfacelight-secondary font-semibold'>Kubernetes</p>
            </SwiperSlide>

            <SwiperSlide>
            <img src="/ourstack/docker.png" />
            <p className='text-surfacedark-secondary dark:text-surfacelight-secondary font-semibold'>Docker</p>
            </SwiperSlide>

            <SwiperSlide>
            <img src="/ourstack/aws.png" />
            <p className='text-surfacedark-secondary dark:text-surfacelight-secondary font-semibold'>AWS</p>
            </SwiperSlide>

            <SwiperSlide>
            <img src="/ourstack/jenkins.png" />
            <p className='text-surfacedark-secondary dark:text-surfacelight-secondary font-semibold'>Jenkins</p>
            </SwiperSlide>

            <SwiperSlide>
            <img src="/ourstack/kafka.png" />
            <p className='text-surfacedark-secondary dark:text-surfacelight-secondary font-semibold'>Kafka</p>
            </SwiperSlide>

            <SwiperSlide>
            <img src="/ourstack/mongodb.png" />
            <p className='text-surfacedark-secondary dark:text-surfacelight-secondary font-semibold'>MongoDB</p>
            </SwiperSlide>

            <SwiperSlide>
            <img src="/ourstack/mongodb.png" />
            <p className='text-surfacedark-secondary dark:text-surfacelight-secondary font-semibold'>MongoDB</p>
            </SwiperSlide>

          </Swiper>
        </div>
        </section>
    </main>
  )
}

export default Ourtechstack