import React from 'react'
import Image from "next/image"

const Aboutherosection = () => {
  return (
    
    <main className="container-fluid bg-[url('/aboutback.png')] bg-cover bg-no-repeat py-10 h-98 pt-60">
      
      <section className='max-container h-full flex-wrap px-3' >
        <div data-aos="fade-up">
        <div className='grid lg:grid-cols-2 max-sm:grid-cols-1 row-auto gap-2 h-full'>
        <div><video className="w-full rounded-sm" controls src="../aboutvideo.mp4"></video></div>
        <div className='text-surfacelight-primary'>
          <h1>Who We Are? </h1>
          <p className='text-surfacelight-primary pt-2'>In 2005, MediTech Data International Inc. (Los Angeles, USA) and MediTech Data International Private Limited (Colombo, Sri Lanka) were established. MediTech Data International Inc. began with the objective of becoming the most recognized and reputable information technology corporation in Southern California, with a reputation for dependability, innovation, and a commitment to customer service. <br/><br/>That vision is still as strong today as it was then. We have made it a point to hire the sharpest and most talented people with whom we can share this vision as team members.As the years have passed, MediTech Data International Inc. has not only sustained its commitment to excellence but has also evolved with the dynamic landscape of information technology. The company's focus on staying at the forefront of technological advancements has allowed it to adapt to changing market trends and consistently deliver cutting-edge solutions to its clients.</p>
          </div>
        </div>
        
        <div className='grid grid-cols-8 max-sm:grid-cols-1 grid-rows-1 pt-5 gap-4'>
          <div className='col-span-2'>
          <div className='w-4 h-4 bg-surfacelight-primary dark:bg-surfacedark-tertiary rounded-full'>  
          <svg xmlns="http://www.w3.org/2000/svg" width="50%" height="50%" fill="currentColor" className="dark:fill-white bi bi-building relative inline-block m-1 " viewBox="0 0 16 16">
          <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/>
          <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3z"/>
          </svg>
          </div>
            <h6 className='text-surfacelight-primary'>Industry</h6>
            <span className='text-surfacelight-secondary font-semibold '>IT Consultation, IT Services ,Software Development</span>
          </div>

          <div>
          <div className='w-4 h-4 bg-surfacelight-primary dark:bg-surfacedark-tertiary rounded-full'>  
          <svg xmlns="http://www.w3.org/2000/svg" width="50%" height="50%" fill="currentColor" className="dark:fill-white bi bi-megaphone relative inline-block m-1 " viewBox="0 0 16 16">
          <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-.214c-2.162-1.241-4.49-1.843-6.912-2.083l.405 2.712A1 1 0 0 1 5.51 15.1h-.548a1 1 0 0 1-.916-.599l-1.85-3.49a68.14 68.14 0 0 0-.202-.003A2.014 2.014 0 0 1 0 9V7a2.02 2.02 0 0 1 1.992-2.013 74.663 74.663 0 0 0 2.483-.075c3.043-.154 6.148-.849 8.525-2.199zm1 0v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0m-1 1.35c-2.344 1.205-5.209 1.842-8 2.033v4.233c.18.01.359.022.537.036 2.568.189 5.093.744 7.463 1.993V3.85zm-9 6.215v-4.13a95.09 95.09 0 0 1-1.992.052A1.02 1.02 0 0 0 1 7v2c0 .55.448 1.002 1.006 1.009A60.49 60.49 0 0 1 4 10.065m-.657.975 1.609 3.037.01.024h.548l-.002-.014-.443-2.966a68.019 68.019 0 0 0-1.722-.082z"/>
          </svg>
          </div>
            <h6 className='text-surfacelight-primary'>Founded</h6>
            <span className='text-surfacelight-secondary font-semibold '>2005</span>
          </div>

          <div>
          <div className='w-4 h-4 bg-surfacelight-primary dark:bg-surfacedark-tertiary  rounded-full'>  
          <svg xmlns="http://www.w3.org/2000/svg" width="50%" height="50%" fill="currentColor" className="dark:fill-white bi bi-building relative inline-block m-1 " viewBox="0 0 16 16">
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z"/>
          </svg>
          </div>
            <h6 className='text-surfacelight-primary'>Founder</h6>
            <span className='text-surfacelight-secondary font-semibold'>Dilip N. Jay</span>
          </div>

          <div>
          <div className='w-4 h-4 bg-surfacelight-primary dark:bg-surfacedark-tertiary  rounded-full'>  
          <svg xmlns="http://www.w3.org/2000/svg" width="50%" height="50%" fill="currentColor" className="dark:fill-white  bi bi-building relative inline-block m-1 " viewBox="0 0 16 16">
          <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
          <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
          </svg>
          </div>
            <h6 className='text-surfacelight-primary'>Headquarters</h6>
            <span className='text-surfacelight-secondary font-semibold'>Los Angeles, CA, USA</span>
          </div>

          <div>
          <div className='w-4 h-4 bg-surfacelight-primary dark:bg-surfacedark-tertiary  rounded-full'>  
          <svg xmlns="http://www.w3.org/2000/svg" width="50%" height="50%" fill="currentColor" className="dark:fill-white bi bi-building relative inline-block m-1 " viewBox="0 0 16 16">
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484-.08.08-.162.158-.242.234-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z"/>
          </svg>
          </div>
            <h6 className='text-surfacelight-primary'>Area Served</h6>
            <span className='text-surfacelight-secondary font-semibold'>3 Countries</span>
          </div>

          <div>
          <div className='w-4 h-4 bg-surfacelight-primary dark:bg-surfacedark-tertiary  rounded-full'>  
          <svg xmlns="http://www.w3.org/2000/svg" width="50%" height="50%" fill="currentColor" className="dark:fill-white bi bi-building relative inline-block m-1 " viewBox="0 0 16 16">
          <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5"/>
          </svg>
          </div>
            <h6 className='text-surfacelight-primary'>Products</h6>
            <span className='text-surfacelight-secondary font-semibold'>Mobile/Web Solutions</span>
          </div>

          
          <div>
          <div className='w-4 h-4 bg-surfacelight-primary dark:bg-surfacedark-tertiary  rounded-full'>  
          <svg xmlns="http://www.w3.org/2000/svg" width="50%" height="50%" fill="currentColor" className="dark:fill-white bi bi-building relative inline-block m-1 " viewBox="0 0 16 16">
          <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5m1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0M1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5"/>
          </svg>
          </div>
            <h6 className='text-surfacelight-primary'>DBA</h6>
            <span className='text-surfacelight-secondary font-semibold'>eLife America</span>
          </div>
        </div>
        </div>  
      </section>

    </main>
  )
}

export default Aboutherosection