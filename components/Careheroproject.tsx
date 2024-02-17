import React from 'react'
import Image from "next/image"

const Careheroproject = () => {
  return (
    <main className="container-fluid bg-surfacelight-primary dark:bg-surfacedark-tertiary py-10 h-full px-2">
    <section className='max-container h-full flex-wrap pb-10 space-y-2'>

    <h4 className='text-surfacedark-primary dark:text-surfacelight-primary'>Project Details</h4>
    <p className='text-surfacedark-secondary dark:text-surfacelight-secondary'>CareHero is a mobile-first, enterprise SaaS employee engagement solution that integrates health and well-being metrics with employee engagement data. By combining real-time, individualized health and well-being data with continuous pulse survey feedback, CareHero helps teams understand how to enhance employee experience for optimal productivity and performance.</p>
    
    <div className="grid lg:grid-cols-3 max-sm:grid-cols-1 gap-4 ">
        <div className='flex-wrap'>
           
        <Image
                src="/care-hero-1.jpg"
                alt="carehero"
                width={595}
                height={475}
                /> 
        </div>   

        <div className='flex-wrap'>
           
        <Image
                src="/care-hero-2.jpg"
                alt="carehero"
                width={595}
                height={475}
                /> 
        </div>   


        <div className='flex-wrap'>
           
        <Image
                src="/care-hero-3.jpg"
                alt="carehero"
                width={595}
                height={475}
                /> 
        </div>   
    </div>
    <div className='flex-wrap col-span-2'>
        <h6 className='font-semibold text-surfacedark-primary dark:text-surfacelight-primary pb-2'>Technologies:</h6>
        <ul className='text-surfacedark-primary dark:text-surfacelight-primary inline space-x-1'>
          <li className='inline-block bg-surfacelight-tertiary dark:bg-surfacedark-secondary rounded-sm p-1'><span>React Native</span></li>
          <li className='inline-block bg-surfacelight-tertiary dark:bg-surfacedark-secondary rounded-sm p-1'><span>Native Base</span></li>
          <li className='inline-block bg-surfacelight-tertiary dark:bg-surfacedark-secondary rounded-sm p-1'><span>PHP Laravel</span></li>
          <li className='inline-block bg-surfacelight-tertiary dark:bg-surfacedark-secondary rounded-sm p-1'><span>Maria DB</span></li>
        </ul>
    </div>   

    <div className='flex-wrap'>
        <h6 className='font-semibold text-surfacedark-primary dark:text-surfacelight-primary'>Client:</h6>
        <p className='text-surfacedark-primary dark:text-surfacelight-primary'>Care Hero</p>
    </div>

    <div className='flex-wrap'>
        <h6 className='font-semibold text-surfacedark-primary dark:text-surfacelight-primary'>Platforms:</h6>
        <p className='text-surfacedark-primary dark:text-surfacelight-primary'>iOS,Android</p>
    </div>
    </section>
    </main>    
  )
}

export default Careheroproject