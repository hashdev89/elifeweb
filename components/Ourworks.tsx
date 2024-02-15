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

                <div className='grid lg:grid-cols-5 max-sm:grid-cols-5 p-2 justify-items-center '>
                 
                 <div className='bg-surfacelight-primary dark:bg-surfacedark-primary rounded-sm p-1'>
                 <div className='flex-wrap justify-items-center opacity-90 '><Image
                src="/reactnative.svg"
                alt="reactnative"
                width={35}
                height={35}
                /> 
                </div>
                </div>

                <div className='bg-surfacelight-primary dark:bg-surfacedark-primary rounded-sm p-1'>
                <div className='flex-wrap items-center opacity-90'><Image
                src="/nativebase.svg"
                alt="nativebase"
                width={35}
                height={35}
                /> 
               </div>

                </div>

                <div className='bg-surfacelight-primary dark:bg-surfacedark-primary rounded-sm p-1'>
                <div className='flex-wrap items-center opacity-90'><Image
                src="/node.svg"
                alt="node"
                width={35}
                height={35}
                /> 
                </div>
                </div>
                
                <div className='bg-surfacelight-primary dark:bg-surfacedark-primary rounded-sm p-1'>
                <div className='flex-wrap items-center opacity-90'><Image
                src="/mysql.svg"
                alt="mysql"
                width={35}
                height={35}
                /> 
                </div>
                </div>

                <div className='bg-surfacelight-primary dark:bg-surfacedark-primary rounded-sm p-1'>
                <div className='flex-wrap items-center opacity-90'><Image
                src="/ES6.svg"
                alt="ES6"
                width={35}
                height={35}
                /> 
                </div>
                </div>
              
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

                <div className='grid lg:grid-cols-5 max-sm:grid-cols-5 p-2 justify-items-center '>
                 
                 <div className='bg-surfacelight-primary dark:bg-surfacedark-primary rounded-sm p-1'>
                 <div className='flex-wrap justify-items-center opacity-90 '><Image
                src="/react.svg"
                alt="react"
                width={35}
                height={35}
                /> 
                </div>
                </div>

                <div className='bg-surfacelight-primary dark:bg-surfacedark-primary rounded-sm p-1'>
                <div className='flex-wrap items-center opacity-90'><Image
                src="/node.svg"
                alt="node"
                width={35}
                height={35}
                /> 
               </div>

                </div>

                <div className='bg-surfacelight-primary dark:bg-surfacedark-primary rounded-sm p-1'>
                <div className='flex-wrap items-center opacity-90'><Image
                src="/mui.svg"
                alt="MUI"
                width={35}
                height={35}
                /> 
                </div>
                </div>
                
                <div className='bg-surfacelight-primary dark:bg-surfacedark-primary rounded-sm p-1'>
                <div className='flex-wrap items-center opacity-90'><Image
                src="/mysql.svg"
                alt="mysql"
                width={35}
                height={35}
                /> 
                </div>
                </div>

                <div className='bg-surfacelight-primary dark:bg-surfacedark-primary rounded-sm p-1'>
                <div className='flex-wrap items-center opacity-0 '><Image
                src="/ES6.svg"
                alt="ES6"
                width={35}
                height={35}
                /> 
                </div>
                </div>
              
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
                <div className='grid lg:grid-cols-5 max-sm:grid-cols-5 p-2 justify-items-center '>
                 
                 <div className='bg-surfacelight-primary dark:bg-surfacedark-primary rounded-sm p-1'>
                 <div className='flex-wrap justify-items-center opacity-90 '><Image
                src="/reactnative.svg"
                alt="reactnative"
                width={35}
                height={35}
                /> 
                </div>
                </div>

                <div className='bg-surfacelight-primary dark:bg-surfacedark-primary rounded-sm p-1'>
                <div className='flex-wrap items-center opacity-90'><Image
                src="/nativebase.svg"
                alt="nativebase"
                width={35}
                height={35}
                /> 
               </div>

                </div>

                <div className='bg-surfacelight-primary dark:bg-surfacedark-primary rounded-sm p-1'>
                <div className='flex-wrap items-center opacity-90'><Image
                src="/node.svg"
                alt="node"
                width={35}
                height={35}
                /> 
                </div>
                </div>
                
                <div className='bg-surfacelight-primary dark:bg-surfacedark-primary rounded-sm p-1'>
                <div className='flex-wrap items-center opacity-90'><Image
                src="/mysql.svg"
                alt="mysql"
                width={35}
                height={35}
                /> 
                </div>
                </div>

                <div className='bg-surfacelight-primary dark:bg-surfacedark-primary rounded-sm p-1'>
                <div className='flex-wrap items-center opacity-90'><Image
                src="/ES6.svg"
                alt="ES6"
                width={35}
                height={35}
                /> 
                </div>
                </div>
              
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
                <div className='grid lg:grid-cols-5 max-sm:grid-cols-5 p-2 justify-items-center '>
                 
                 <div className='bg-surfacelight-primary dark:bg-surfacedark-primary rounded-sm p-1'>
                 <div className='flex-wrap justify-items-center opacity-90 '><Image
                src="/reactnative.svg"
                alt="reactnative"
                width={35}
                height={35}
                /> 
                </div>
                </div>

                <div className='bg-surfacelight-primary dark:bg-surfacedark-primary rounded-sm p-1'>
                <div className='flex-wrap items-center opacity-90'><Image
                src="/nativebase.svg"
                alt="nativebase"
                width={35}
                height={35}
                /> 
               </div>

                </div>

                <div className='bg-surfacelight-primary dark:bg-surfacedark-primary rounded-sm p-1'>
                <div className='flex-wrap items-center opacity-90'><Image
                src="/node.svg"
                alt="node"
                width={35}
                height={35}
                /> 
                </div>
                </div>
                
                <div className='bg-surfacelight-primary dark:bg-surfacedark-primary rounded-sm p-1'>
                <div className='flex-wrap items-center opacity-90'><Image
                src="/mysql.svg"
                alt="mysql"
                width={35}
                height={35}
                /> 
                </div>
                </div>

                <div className='bg-surfacelight-primary dark:bg-surfacedark-primary rounded-sm p-1'>
                <div className='flex-wrap items-center opacity-90'><Image
                src="/ES6.svg"
                alt="ES6"
                width={35}
                height={35}
                /> 
                </div>
                </div>
              
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
                <div className='grid lg:grid-cols-5 max-sm:grid-cols-5 p-2 justify-items-center '>
                 
                 <div className='bg-surfacelight-primary dark:bg-surfacedark-primary rounded-sm p-1'>
                 <div className='flex-wrap justify-items-center opacity-90 '><Image
                src="/reactnative.svg"
                alt="reactnative"
                width={35}
                height={35}
                /> 
                </div>
                </div>

                <div className='bg-surfacelight-primary dark:bg-surfacedark-primary rounded-sm p-1'>
                <div className='flex-wrap items-center opacity-90'><Image
                src="/nativebase.svg"
                alt="nativebase"
                width={35}
                height={35}
                /> 
               </div>

                </div>

                <div className='bg-surfacelight-primary dark:bg-surfacedark-primary rounded-sm p-1'>
                <div className='flex-wrap items-center opacity-90'><Image
                src="/node.svg"
                alt="node"
                width={35}
                height={35}
                /> 
                </div>
                </div>
                
                <div className='bg-surfacelight-primary dark:bg-surfacedark-primary rounded-sm p-1'>
                <div className='flex-wrap items-center opacity-90'><Image
                src="/mysql.svg"
                alt="mysql"
                width={35}
                height={35}
                /> 
                </div>
                </div>

                <div className='bg-surfacelight-primary dark:bg-surfacedark-primary rounded-sm p-1'>
                <div className='flex-wrap items-center opacity-90'><Image
                src="/ES6.svg"
                alt="ES6"
                width={35}
                height={35}
                /> 
                </div>
                </div>
              
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
          
                    <h5 className='text-surfacedark-primary dark:text-surfacelight-primary'>LADMC Medical Platform</h5>
                    <p className='text-surfacedark-secondary dark:text-surfacelight-secondary'>WEB APPLICATION</p>
                </div>

                <div className='grid lg:grid-cols-5 max-sm:grid-cols-5 p-2 justify-items-center '>
                 
                 <div className='bg-surfacelight-primary dark:bg-surfacedark-primary rounded-sm p-1'>
                 <div className='flex-wrap justify-items-center opacity-90 '><Image
                src="/reactnative.svg"
                alt="reactnative"
                width={35}
                height={35}
                /> 
                </div>
                </div>

                <div className='bg-surfacelight-primary dark:bg-surfacedark-primary rounded-sm p-1'>
                <div className='flex-wrap items-center opacity-90'><Image
                src="/nativebase.svg"
                alt="nativebase"
                width={35}
                height={35}
                /> 
               </div>

                </div>

                <div className='bg-surfacelight-primary dark:bg-surfacedark-primary rounded-sm p-1'>
                <div className='flex-wrap items-center opacity-90'><Image
                src="/node.svg"
                alt="node"
                width={35}
                height={35}
                /> 
                </div>
                </div>
                
                <div className='bg-surfacelight-primary dark:bg-surfacedark-primary rounded-sm p-1'>
                <div className='flex-wrap items-center opacity-90'><Image
                src="/mysql.svg"
                alt="mysql"
                width={35}
                height={35}
                /> 
                </div>
                </div>

                <div className='bg-surfacelight-primary dark:bg-surfacedark-primary rounded-sm p-1'>
                <div className='flex-wrap items-center opacity-90'><Image
                src="/ES6.svg"
                alt="ES6"
                width={35}
                height={35}
                /> 
                </div>
                </div>
              
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
                <div className='grid lg:grid-cols-5 max-sm:grid-cols-5 p-2 justify-items-center '>
                 
                 <div className='bg-surfacelight-primary dark:bg-surfacedark-primary rounded-sm p-1'>
                 <div className='flex-wrap justify-items-center opacity-90 '><Image
                src="/reactnative.svg"
                alt="reactnative"
                width={35}
                height={35}
                /> 
                </div>
                </div>

                <div className='bg-surfacelight-primary dark:bg-surfacedark-primary rounded-sm p-1'>
                <div className='flex-wrap items-center opacity-90'><Image
                src="/nativebase.svg"
                alt="nativebase"
                width={35}
                height={35}
                /> 
               </div>

                </div>

                <div className='bg-surfacelight-primary dark:bg-surfacedark-primary rounded-sm p-1'>
                <div className='flex-wrap items-center opacity-90'><Image
                src="/node.svg"
                alt="node"
                width={35}
                height={35}
                /> 
                </div>
                </div>
                
                <div className='bg-surfacelight-primary dark:bg-surfacedark-primary rounded-sm p-1'>
                <div className='flex-wrap items-center opacity-90'><Image
                src="/mysql.svg"
                alt="mysql"
                width={35}
                height={35}
                /> 
                </div>
                </div>

                <div className='bg-surfacelight-primary dark:bg-surfacedark-primary rounded-sm p-1'>
                <div className='flex-wrap items-center opacity-90'><Image
                src="/ES6.svg"
                alt="ES6"
                width={35}
                height={35}
                /> 
                </div>
                </div>
              
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
                <div className='grid lg:grid-cols-5 max-sm:grid-cols-5 p-2 justify-items-center '>
                 
                 <div className='bg-surfacelight-primary dark:bg-surfacedark-primary rounded-sm p-1'>
                 <div className='flex-wrap justify-items-center opacity-90 '><Image
                src="/reactnative.svg"
                alt="reactnative"
                width={35}
                height={35}
                /> 
                </div>
                </div>

                <div className='bg-surfacelight-primary dark:bg-surfacedark-primary rounded-sm p-1'>
                <div className='flex-wrap items-center opacity-90'><Image
                src="/nativebase.svg"
                alt="nativebase"
                width={35}
                height={35}
                /> 
               </div>

                </div>

                <div className='bg-surfacelight-primary dark:bg-surfacedark-primary rounded-sm p-1'>
                <div className='flex-wrap items-center opacity-90'><Image
                src="/node.svg"
                alt="node"
                width={35}
                height={35}
                /> 
                </div>
                </div>
                
                <div className='bg-surfacelight-primary dark:bg-surfacedark-primary rounded-sm p-1'>
                <div className='flex-wrap items-center opacity-90'><Image
                src="/mysql.svg"
                alt="mysql"
                width={35}
                height={35}
                /> 
                </div>
                </div>

                <div className='bg-surfacelight-primary dark:bg-surfacedark-primary rounded-sm p-1'>
                <div className='flex-wrap items-center opacity-90'><Image
                src="/ES6.svg"
                alt="ES6"
                width={35}
                height={35}
                /> 
                </div>
                </div>
              
            </div>
            </div>
        </Link>

        <Link href="/studentmgt">       
            <div className="flex-wrap bg-surfacelight-primary dark:bg-surfacedark-secondary rounded-md shadow-md st border-b-bgshades-blueshade hover:border-purple-500 border-b-4 w-full">
            <Image
                src="/sddashboard.png"
                alt="sddashboard"
                width={512}
                height={271}
                />  
                <div className='felx-wrap text-center p-2'>
          
                    <h5 className='text-surfacedark-primary dark:text-surfacelight-primary'>Student Management App</h5>
                    <p className='text-surfacedark-secondary dark:text-surfacelight-primary'>WEB APP DESIGN</p>
                </div>
                <div className='grid lg:grid-cols-5 max-sm:grid-cols-5 p-2 justify-items-center '>
                 
                 <div className='bg-surfacelight-primary dark:bg-surfacedark-primary rounded-sm p-1'>
                 <div className='flex-wrap justify-items-center opacity-90 '><Image
                src="/reactnative.svg"
                alt="reactnative"
                width={35}
                height={35}
                /> 
                </div>
                </div>

                <div className='bg-surfacelight-primary dark:bg-surfacedark-primary rounded-sm p-1'>
                <div className='flex-wrap items-center opacity-90'><Image
                src="/nativebase.svg"
                alt="nativebase"
                width={35}
                height={35}
                /> 
               </div>

                </div>

                <div className='bg-surfacelight-primary dark:bg-surfacedark-primary rounded-sm p-1'>
                <div className='flex-wrap items-center opacity-90'><Image
                src="/node.svg"
                alt="node"
                width={35}
                height={35}
                /> 
                </div>
                </div>
                
                <div className='bg-surfacelight-primary dark:bg-surfacedark-primary rounded-sm p-1'>
                <div className='flex-wrap items-center opacity-90'><Image
                src="/mysql.svg"
                alt="mysql"
                width={35}
                height={35}
                /> 
                </div>
                </div>

                <div className='bg-surfacelight-primary dark:bg-surfacedark-primary rounded-sm p-1'>
                <div className='flex-wrap items-center opacity-90'><Image
                src="/ES6.svg"
                alt="ES6"
                width={35}
                height={35}
                /> 
                </div>
                </div>
              
            </div>
            </div>
        </Link>


        </div>
       
        </section>
    </main>

    
  )
}

export default Ourworks