"use client";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
  LinkedinShareButton,
  LinkedinIcon,
} from 'next-share'

import {
  EmailShareButton,
  EmailIcon,
} from 'next-share'
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


const Ourworks = () => {
  return (
    <main className="container-fluid bg-white dark:bg-surfacedark-primary py-10 h-full px-2">
      <section className='max-container h-full flex-wrap space-y-2'>
        <h1 className='text-surfacedark-primary dark:text-surfacelight-primary text-center'>Our Awesome Work</h1>
        <h3 className='text-surfacedark-secondary dark:text-surfacelight-secondary text-center'>We had the pleasure with working with few big shots in the industry and few startups as well. </h3>

        <div className='grid grid-cols-3 max-sm:grid-cols-1 gap-5 pt-5 '>
          <Link href="/carehero">
            <div className='grid lg:grid-cols-3 max-sm:grid-cols-3 p-4 absolute z-10 gap-3'>
              <div className='flex-wrap'>
                <LinkedinShareButton url={'https://elifeamerica.com/work/care-hero.html'}>
                  <LinkedinIcon size={32} round />
                </LinkedinShareButton>
              </div>

              <div className='flex-wrap'>
                <EmailShareButton
                  url={'https://github.com/next-share'}
                  subject={'Next Share'}
                  body="body"
                >
                  <EmailIcon size={32} round />
                </EmailShareButton>
              </div>

            </div>
            <div className="flex-wrap bg-slate-50 dark:bg-surfacedark-secondary rounded-md border-b-secondry-100 border-b-4 hover:border-purple-500 w-full">
              <div>
                <Image
                  src="/carehero.png"
                  alt="carehero"
                  width={512}
                  height={371}
                  className='relative dark:bg-white bg-gradient-to-tr to fill-black from-white rounded-t-md '
                />
              </div>
              <div className='felx-wrap text-center p-2 rounded-b-md'>

                <h5 className='text-surfacedark-primary dark:text-surfacelight-primary left-full'>Care Hero</h5>
                <p className='text-surfacedark-secondary dark:text-surfacelight-secondary text-sm'>ENTERPRISE ENGAGEMENT SOLUTION</p>
              </div>

              <div className='grid lg:grid-cols-1 max-sm:grid-cols-1 p-2 justify-center'>

                <div className='flex-wrap text-center'>

                  <ul className='text-surfacedark-primary dark:text-surfacelight-primary inline space-x-1 text-center'>
                    <li className='inline-block bg-surfacelight-tertiary dark:bg-surfacedark-tertiary rounded-sm p-1 mt-1'><span>React Native</span></li>
                    <li className='inline-block bg-surfacelight-tertiary dark:bg-surfacedark-tertiary rounded-sm p-1 mt-1'><span>Native Base</span></li>
                    <li className='inline-block bg-surfacelight-tertiary dark:bg-surfacedark-tertiary rounded-sm p-1 mt-1'><span>PHP Laravel</span></li>
                    <li className='inline-block bg-surfacelight-tertiary dark:bg-surfacedark-tertiary rounded-sm p-1 mt-1'><span>Maria DB</span></li>

                  </ul>
                </div>
                <Link href={"/carehero"} className='text-center pt-2'>
                  <button type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 font-medium rounded-sm text-sm px-2 py-2.5 p-2 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-700">
                    Read More
                  </button>
                </Link>

              </div>

            </div>
            <div >

            </div>
          </Link>
          <Link href="/mdonline">
            <div className='grid lg:grid-cols-3 max-sm:grid-cols-3 p-4 absolute z-10 gap-3'>
              <div className='flex-wrap'>
                <LinkedinShareButton url={'https://elifeamerica.com/work/care-hero.html'}>
                  <LinkedinIcon size={32} round />
                </LinkedinShareButton>
              </div>

              <div className='flex-wrap'>
                <EmailShareButton
                  url={'https://github.com/next-share'}
                  subject={'Next Share'}
                  body="body"
                  className="select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  <EmailIcon size={32} round />
                </EmailShareButton>
              </div>

            </div>
            <div className="flex-wrap bg-slate-50 dark:bg-surfacedark-secondary rounded-md shadow-md st border-b-bgshades-blueshade hover:border-purple-500 border-b-4 w-full">
              <Image
                src="/mdonline.png"
                alt="mdonline"
                width={512}
                height={371}
                className='relative dark:bg-white bg-gradient-to-tr to fill-black from-white rounded-t-md '
              />
              <div className='felx-wrap text-center p-2'>

                <h5 className='text-surfacedark-primary dark:text-surfacelight-primary'>MD Online</h5>
                <p className='text-surfacedark-secondary dark:text-surfacelight-secondary text-sm'>TELEMEDECINE PROJECT</p>
              </div>

              <div className='grid lg:grid-cols-1 max-sm:grid-cols-1 p-2 justify-center'>

                <div className='flex-wrap text-center'>

                  <ul className='text-surfacedark-primary dark:text-surfacelight-primary inline space-x-1 text-center'>
                    <li className='inline-block bg-surfacelight-tertiary dark:bg-surfacedark-tertiary rounded-sm p-1 mt-1'><span>PHP Laravel</span></li>
                    <li className='inline-block bg-surfacelight-tertiary dark:bg-surfacedark-tertiary rounded-sm p-1 mt-1'><span>React JS</span></li>
                    <li className='inline-block bg-surfacelight-tertiary dark:bg-surfacedark-tertiary rounded-sm p-1 mt-1'><span>MariaDB</span></li>
                    <li className='inline-block bg-surfacelight-tertiary dark:bg-surfacedark-tertiary rounded-sm p-1 mt-1'><span>SCSS</span></li>

                  </ul>
                </div>
                <Link href={"/mdonline"} className='text-center pt-2'>
                  <button type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 font-medium rounded-sm text-sm px-2 py-2.5 p-2 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-700">
                    Read More
                  </button>
                </Link>

              </div>
            </div>
          </Link>

          <Link href="/tbt">
            <div className='grid lg:grid-cols-3 max-sm:grid-cols-3 p-4 absolute z-10 gap-3'>
              <div className='flex-wrap'>
                <LinkedinShareButton url={'https://elifeamerica.com/work/care-hero.html'}>
                  <LinkedinIcon size={32} round />
                </LinkedinShareButton>
              </div>

              <div className='flex-wrap'>
                <EmailShareButton
                  url={'https://github.com/next-share'}
                  subject={'Next Share'}
                  body="body"
                >
                  <EmailIcon size={32} round />
                </EmailShareButton>
              </div>

            </div>
            <div className="flex-wrap bg-slate-50 dark:bg-surfacedark-secondary rounded-md shadow-md st border-b-bgshades-bluemagento hover:border-purple-500 border-b-4 w-full">
              <Image
                src="/tbt.png"
                alt="tbt"
                width={512}
                height={371}
                className='relative dark:bg-white bg-gradient-to-tr to fill-black from-white rounded-t-md '
              />
              <div className='felx-wrap text-center p-2'>

                <h5 className='text-surfacedark-primary dark:text-surfacelight-primary'>Text Based Ticketing System</h5>
                <p className='text-surfacedark-secondary dark:text-surfacelight-secondary text-sm'>WEB APPLICATION</p>
              </div>
              <div className='grid lg:grid-cols-1 max-sm:grid-cols-1 p-2 justify-center'>

                <div className='flex-wrap text-center'>

                  <ul className='text-surfacedark-primary dark:text-surfacelight-primary inline space-x-1 text-center'>
                    <li className='inline-block bg-surfacelight-tertiary dark:bg-surfacedark-tertiary rounded-sm p-1 mt-1'><span>Node JS</span></li>
                    <li className='inline-block bg-surfacelight-tertiary dark:bg-surfacedark-tertiary rounded-sm p-1 mt-1'><span>Sails JS</span></li>
                    <li className='inline-block bg-surfacelight-tertiary dark:bg-surfacedark-tertiary rounded-sm p-1 mt-1'><span>Vue JS</span></li>
                    <li className='inline-block bg-surfacelight-tertiary dark:bg-surfacedark-tertiary rounded-sm p-1 mt-1'><span>Nunjucks</span></li>
                    <li className='inline-block bg-surfacelight-tertiary dark:bg-surfacedark-tertiary rounded-sm p-1 mt-1'><span>Mongo DB</span></li>

                  </ul>
                </div>
                <Link href={"/tbt"} className='text-center pt-2'>
                  <button type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 font-medium rounded-sm text-sm px-2 py-2.5 p-2 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-700">
                    Read More
                  </button>
                </Link>

              </div>
            </div>
          </Link>

          <Link href="/event">
            <div className="flex-wrap bg-slate-50 dark:bg-surfacedark-secondary rounded-md shadow-md st border-b-bgshades-bluemagento hover:border-purple-500 border-b-4 w-full">
              <Image
                src="/eventcheck.png"
                alt="eventcheck"
                width={512}
                height={371}
              />
              <div className='felx-wrap text-center p-2'>

                <h5 className='text-surfacedark-primary dark:text-surfacelight-primary'>Event Check-in App</h5>
                <p className='text-surfacedark-secondary dark:text-surfacelight-secondary'>IPAD EVENT MANAGEMENT TOOL</p>
              </div>
              <div className='grid lg:grid-cols-1 max-sm:grid-cols-1 p-2 justify-center'>

                <div className='flex-wrap text-center'>

                  <ul className='text-surfacedark-primary dark:text-surfacelight-primary inline space-x-1 text-center'>
                    <li className='inline-block bg-surfacelight-tertiary dark:bg-surfacedark-tertiary rounded-sm p-1 mt-1'><span>Figma</span></li>
                    <li className='inline-block bg-surfacelight-tertiary dark:bg-surfacedark-tertiary rounded-sm p-1 mt-1'><span>PHP Laravel</span></li>
                    <li className='inline-block bg-surfacelight-tertiary dark:bg-surfacedark-tertiary rounded-sm p-1 mt-1'><span>Swift</span></li>
                    <li className='inline-block bg-surfacelight-tertiary dark:bg-surfacedark-tertiary rounded-sm p-1 mt-1'><span>Blade Template Engine </span></li>

                  </ul>
                </div>
                <Link href={"/event"} className='text-center pt-2'>
                  <button type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 font-medium rounded-sm text-sm px-2 py-2.5 p-2 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-700">
                    Read More
                  </button>
                </Link>

              </div>
            </div>
          </Link>

          <Link href="/mayflower">
            <div className="flex-wrap bg-slate-50 dark:bg-surfacedark-secondary rounded-md shadow-md st border-b-bgshades-blueshade hover:border-purple-500 border-b-4 w-full">
              <Image
                src="/mayflowertab.png"
                alt="mayflower"
                width={512}
                height={371}
              />
              <div className='felx-wrap text-center p-2'>

                <h5 className='text-surfacedark-primary dark:text-surfacelight-primary'>MayFlower Medical Group</h5>
                <p className='text-surfacedark-secondary dark:text-surfacelight-secondary'>MEDICAL GROUP SOLUTION</p>
              </div>
              <div className='grid lg:grid-cols-1 max-sm:grid-cols-1 p-2 justify-center'>

                <div className='flex-wrap text-center'>

                  <ul className='text-surfacedark-primary dark:text-surfacelight-primary inline space-x-1 text-center'>
                    <li className='inline-block bg-surfacelight-tertiary dark:bg-surfacedark-tertiary rounded-sm p-1 mt-1'><span>React Native</span></li>
                    <li className='inline-block bg-surfacelight-tertiary dark:bg-surfacedark-tertiary rounded-sm p-1 mt-1'><span>Node JS</span></li>
                    <li className='inline-block bg-surfacelight-tertiary dark:bg-surfacedark-tertiary rounded-sm p-1 mt-1'><span>ES 6</span></li>
                    <li className='inline-block bg-surfacelight-tertiary dark:bg-surfacedark-tertiary rounded-sm p-1 mt-1'><span>MYSQL</span></li>

                  </ul>
                </div>
                <Link href={"/mayflower"} className='text-center pt-2'>
                  <button type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 font-medium rounded-sm text-sm px-2 py-2.5 p-2 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-700">
                    Read More
                  </button>
                </Link>

              </div>

            </div>
          </Link>

          <Link href="/ladmc">
            <div className="flex-wrap bg-slate-50 dark:bg-surfacedark-secondary rounded-md shadow-md st border-b-secondry-100 border-b-4 hover:border-purple-500 w-full">
              <Image
                src="/ladmcblock.png"
                alt="ladmc"
                width={512}
                height={371}
              />
              <div className='felx-wrap text-center p-2'>

                <h5 className='text-surfacedark-primary dark:text-surfacelight-primary '>LADMC Medical Platform</h5>
                <p className='text-surfacedark-secondary dark:text-surfacelight-secondary'>WEB APPLICATION</p>
              </div>

              <div className='grid lg:grid-cols-1 max-sm:grid-cols-1 p-2 justify-center'>

                <div className='flex-wrap text-center'>

                  <ul className='text-surfacedark-primary dark:text-surfacelight-primary inline space-x-1 text-center'>
                    <li className='inline-block bg-surfacelight-tertiary dark:bg-surfacedark-tertiary rounded-sm p-1 mt-1'><span>Microsoft .NET (MVC)</span></li>
                    <li className='inline-block bg-surfacelight-tertiary dark:bg-surfacedark-tertiary rounded-sm p-1 mt-1'><span>Microsoft SQL Server</span></li>
                    <li className='inline-block bg-surfacelight-tertiary dark:bg-surfacedark-tertiary rounded-sm p-1 mt-1'><span>HTML</span></li>
                    <li className='inline-block bg-surfacelight-tertiary dark:bg-surfacedark-tertiary rounded-sm p-1 mt-1'><span>CSS</span></li>

                  </ul>
                </div>
                <Link href={"/ladmc"} className='text-center pt-2'>
                  <button type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 font-medium rounded-sm text-sm px-2 py-2.5 p-2 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-700">
                    Read More
                  </button>
                </Link>

              </div>
            </div>
          </Link>

          <Link href="/bloop">
            <div className="flex-wrap bg-slate-50 dark:bg-surfacedark-secondary rounded-md shadow-md st border-b-bgshades-bluemagento hover:border-purple-500 border-b-4 w-full">
              <Image
                src="/bloopbk.png"
                alt="bloop"
                width={512}
                height={371}
              />
              <div className='felx-wrap text-center p-2'>

                <h5 className='text-surfacedark-primary dark:text-surfacelight-primary'>Bloop</h5>
                <p className='text-surfacedark-secondary dark:text-surfacelight-secondary'>MOBILE APP DESIGN</p>
              </div>

              <div className='grid lg:grid-cols-1 max-sm:grid-cols-1 p-2 justify-center'>

                <div className='flex-wrap text-center'>

                  <ul className='text-surfacedark-primary dark:text-surfacelight-primary inline space-x-1 text-center '>
                    <li className='inline-block bg-surfacelight-tertiary dark:bg-surfacedark-tertiary rounded-sm p-1 mt-1'><span>PHP Laravel</span></li>
                    <li className='inline-block bg-surfacelight-tertiary dark:bg-surfacedark-tertiary rounded-sm p-1 mt-1'><span>React Native</span></li>
                    <li className='inline-block bg-surfacelight-tertiary dark:bg-surfacedark-tertiary rounded-sm p-1 mt-1'><span>Node JS</span></li>
                    <li className='inline-block bg-surfacelight-tertiary dark:bg-surfacedark-tertiary rounded-sm p-1 mt-1'><span>ES 6</span></li>

                  </ul>
                </div>
                <Link href={"/bloop"} className='text-center pt-2'>
                  <button type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 font-medium rounded-sm text-sm px-2 py-2.5 p-2 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-700">
                    Read More
                  </button>
                </Link>

              </div>
            </div>
          </Link>

          <Link href="/studentmgt">
            <div className="flex-wrap bg-surfacelight-primary dark:bg-surfacedark-secondary rounded-md shadow-md st border-b-bgshades-blueshade hover:border-purple-500 border-b-4 w-full">
              <Image
                src="/studentmangement.png"
                alt="studentmangement"
                width={512}
                height={371}
              />
              <div className='felx-wrap text-center p-2'>

                <h5 className='text-surfacedark-primary dark:text-surfacelight-primary'>Student Management App</h5>
                <p className='text-surfacedark-secondary dark:text-surfacelight-primary'>WEB APP DESIGN</p>
              </div>
              <div className='grid lg:grid-cols-1 max-sm:grid-cols-1 p-2 justify-center'>

                <div className='flex-wrap text-center'>

                  <ul className='text-surfacedark-primary dark:text-surfacelight-primary inline space-x-1 text-center'>
                    <li className='inline-block bg-surfacelight-tertiary dark:bg-surfacedark-tertiary rounded-sm p-1 mt-1'><span>Figma</span></li>
                    <li className='inline-block bg-surfacelight-tertiary dark:bg-surfacedark-tertiary rounded-sm p-1 mt-1'><span>React Native</span></li>
                    <li className='inline-block bg-surfacelight-tertiary dark:bg-surfacedark-tertiary rounded-sm p-1 mt-1'><span>Node JS</span></li>
                    <li className='inline-block bg-surfacelight-tertiary dark:bg-surfacedark-tertiary rounded-sm p-1 mt-1'><span>ES 6</span></li>
                    <li className='inline-block bg-surfacelight-tertiary dark:bg-surfacedark-tertiary rounded-sm p-1 mt-1'><span>Android SDK..</span></li>

                  </ul>
                </div>
                <Link href={"/studentmgt"} className='text-center pt-2'>
                  <button type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 font-medium rounded-sm text-sm px-2 py-2.5 p-2 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-700">
                    Read More
                  </button>
                </Link>

              </div>
            </div>
          </Link>

          <Link href="/elifedashboard">
            <div className="flex-wrap bg-surfacelight-primary dark:bg-surfacedark-secondary rounded-md shadow-md st border-b-bgshades-blueshade hover:border-purple-500 border-b-4 w-full">
              <Image
                src="/securitydashboard.png"
                alt="securitydashboard"
                width={512}
                height={371}
                className='rounded-t-sm'
              />
              <div className='felx-wrap text-center p-2'>

                <h5 className='text-surfacedark-primary dark:text-surfacelight-primary'>eLife Security Dashboard</h5>
                <p className='text-surfacedark-secondary dark:text-surfacelight-primary'>WEB APPLICATION</p>
              </div>
              <div className='grid lg:grid-cols-1 max-sm:grid-cols-1 p-2 justify-center'>

                <div className='flex-wrap text-center'>

                  <ul className='text-surfacedark-primary dark:text-surfacelight-primary inline space-x-1 text-center'>
                    <li className='inline-block bg-surfacelight-tertiary dark:bg-surfacedark-tertiary rounded-sm p-1 mt-1'><span>Python</span></li>
                    <li className='inline-block bg-surfacelight-tertiary dark:bg-surfacedark-tertiary rounded-sm p-1 mt-1'><span>Fast API</span></li>
                    <li className='inline-block bg-surfacelight-tertiary dark:bg-surfacedark-tertiary rounded-sm p-1 mt-1'><span>React</span></li>
                    <li className='inline-block bg-surfacelight-tertiary dark:bg-surfacedark-tertiary rounded-sm p-1 mt-1'><span>MUI</span></li>
                  </ul>
                </div>
                <Link href={"/elifedashboard"} className='text-center pt-2'>
                  <button type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 font-medium rounded-sm text-sm px-2 py-2.5 p-2 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-700">
                    Read More
                  </button>
                </Link>

              </div>
            </div>
          </Link>


        </div>

      </section>
    </main>


  )
}

export default Ourworks