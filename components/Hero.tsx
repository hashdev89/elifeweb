"use client"
import React from 'react'
import Image from "next/image"
import Link from 'next/link'

const Hero = () => {


  return (
    <main className="container-fluid text-center animate-fade animate-duration-1000 animate-ease-in bg-[url('/Footerbk.png')] dark:bg-[url('/darkherobak.png')] bg-cover bg-no-repeat bg-white dark:bg-surfacedark-tertiary pt-10">
        <section className="max-container padding-container relative flex flex-col gap-2 pt-10">
        <h1 className='text-surfacedark-primary dark:text-surfacelight-primary animate-fade animate-ease-in'>Liberate the Future with e-life <br/>App Design and Development</h1>
          <h5 className='text-surfacedark-secondary dark:text-surfacelight-secondary animate-fade animate-ease-in'>Limitless Possibilities on iOS, Android, and Responsive Web Apps</h5>
          <p className='text-surfacedark-tertiary dark:text-surfacelight-tertiary animate-fade animate-ease-in'>Create Your Exclusive Beta App for Free</p>
         
            <div className='flex w-full gap-3 sm:flex-row justify-center '>
         
            <Link href="/pricing">
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-sm text-sm px-2 py-2.5 p-2 dark:bg-blue-600 dark:hover:bg-blue-700"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right relative inline-block mr-2" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                         </svg>Get Started
                         </button>
            </Link>

            <Link href={"/contact"}>
            <button type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 font-medium rounded-sm text-sm px-2 py-2.5 p-2 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-700">
                        Request a Demo
                         </button>  
            </Link>
            </div>
    
            <div className='relative max-lg:hidden px-2'>
            <Image
                src="/Devicefeatures.svg"
                alt="features"
                width={1265}
                height={702}

              />
              
              
              </div>
              <div className='animate-fade animate-duration-1000 animate-ease-in relative px-2 lg:hidden'>
            <Image
                src="/devices.svg"
                alt="devices"
                width={1265}
                height={702}

              />
              
              
              </div>

        </section>
    </main>        
  )
}

export default Hero