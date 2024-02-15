import React from 'react'
import Ourteamtab from './Ourteamtab'

const Meetourteam = () => {
  return (
    <main className='container-fluid bg-white dark:bg-surfacedark-tertiary pt-10 py-10 px-2 '>
       <section className='max-container flex-wrap'>
       <div className='space-y-2'>
            <h1 className='text-surfacedark-primary dark:text-surfacelight-primary max-sm:text-center'>Meet Our Amazing Team</h1>
            <h3 className='text-surfacedark-secondary dark:text-surfacelight-secondary max-sm:text-center'>We are proud to have extraordinary people <br/>with us who try to make a difference in the world</h3>
        </div>

        <div className='grid grid-cols-1 grid-rows-1 lg:grid-cols-6 max-sm:grid-cols-2 gap-5 pt-10'>
                <div className='flex-warp text-center space-y-2 text-surfacedark-primary dark:text-surfacelight-primary hover:text-tertiary-100 transition-all ease-in-out'>
                <div className='rounded-t-md bg-gray-100'>    
                <img src="../Dilip.svg" className="mx-auto w-10/12 grayscale hover:grayscale-0 transition-all ease-in-out duration-1500 "/>
                </div>
                <h6>Dilip N Jay</h6>
                <span className='text-gray-300 '>CEO, FOUNDER</span>
                </div>

                <div className='flex-warp text-center space-y-2 text-surfacedark-primary dark:text-surfacelight-primary hover:text-tertiary-100 transition-all ease-in-out'>
                <div className='rounded-t-md bg-gray-100'>    
                <img src="../jacobthomas.svg" className="mx-auto w-10/12  grayscale hover:grayscale-0 transition-all ease-in-out duration-1500"/>
                </div>
                <h6>Jacob Thomas</h6>
                <span className='text-gray-300'>CTO</span>
                </div>

                <div className='flex-warp text-center space-y-2 text-surfacedark-primary dark:text-surfacelight-primary hover:text-tertiary-100 transition-all ease-in-out'>
                <div className='rounded-t-md bg-gray-100'>    
                <img src="../tomlee.svg" className="mx-auto w-10/12  grayscale hover:grayscale-0 transition-all ease-in-out duration-1500"/>
                </div>
                <h6>Tom Luu</h6>
                <span className='text-gray-300'>CIO</span>
                </div>

                <div className='flex-warp text-center space-y-2 text-surfacedark-primary dark:text-surfacelight-primary hover:text-tertiary-100 transition-all ease-in-out'>
                <div className='rounded-t-md bg-gray-100'>    
                <img src="../janithchampika.svg" className="mx-auto w-10/12  grayscale hover:grayscale-0 transition-all ease-in-out duration-1500"/>
                </div>
                <h6>Janith Champika</h6>
                <span className='text-gray-300'>DIRECTOR</span>
                </div>

                <div className='flex-warp text-center space-y-2 text-surfacedark-primary dark:text-surfacelight-primary hover:text-tertiary-100 transition-all ease-in-out'>
                <div className='rounded-t-md bg-gray-100'>    
                <img src="../shashika.svg" className="mx-auto w-10/12 grayscale hover:grayscale-0 transition-all ease-in-out duration-1500"/>
                </div>
                <h6>Shashika Pradeep</h6>
                <span className='text-gray-300'>FULL STACK ARCHITECT</span>
                </div>

                <div className='flex-warp text-center space-y-2 text-surfacedark-primary dark:text-surfacelight-primary hover:text-tertiary-100 transition-all ease-in-out'>
                <div className='rounded-t-md bg-gray-100'>    
                <img src="../monica.svg" className="mx-auto w-10/12 grayscale hover:grayscale-0 transition-all ease-in-out duration-1500" />
                </div>
                <h6>Monica Valentino</h6>
                <span className='text-gray-300'>CLIENT MANGER</span>
                </div>
            </div>
          
            <Ourteamtab/>

            <div className="lg:max-w-fulll pt-5">
              <div className="h-48 sm:h-auto lg:h-auto lg:w-48 flex-none bg-cover text-center overflow-hidden bg-[url('/ceo.png')]">
              </div>
              <div className="bg-white dark:bg-surfacedark-secondary rounded-b lg:rounded-b-none shadow-md lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                  <div className="text-surfacedark-primary dark:text-surfacelight-primary font-bold text-xl mb-2">A Message From the CEO</div>
                  <p className="text-gray-700 dark:text-surfacelight-secondary text-base">"As technology continues to evolve at an unprecedented pace, the IT and cybersecurity industry is poised to play an ever more critical role in shaping our digital future. From the rapid adoption of cloud computing and edge computing to the proliferation of Internet of Things (IoT) devices and the increasing integration of artificial intelligence (AI) and machine learning , the IT landscape is undergoing a transformative shift. <br/>However, as digital innovations expand, so do the threats and vulnerabilities. Cybersecurity will remain a top priority, requiring ongoing innovation and collaboration to defend against increasingly sophisticated cyberattacks. "</p>
                </div>
                <div className="flex items-center">
                  <div className="text-sm">
                    <p className="text-gray-900 dark:text-surfacelight-secondary leading-none font-semibold">Dilip N Jay</p>
                    <p className="text-gray-400"> Founder - MediTech Data & e Life America</p>
                  </div>
                </div>
              </div>
            </div>

       </section>
    </main>
  )
}

export default Meetourteam