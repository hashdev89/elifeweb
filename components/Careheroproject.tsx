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
    <div className='flex-wrap'>
        <h6 className='font-semibold text-surfacedark-primary dark:text-surfacelight-primary'>Technologies:</h6>
        <div className='grid lg:grid-cols-5 max-sm:grid-cols-5 p-2 justify-items-center '>
                 
                <div className='bg-surfacelight-secondary dark:bg-surfacedark-primary rounded-sm p-1'>
                 <div className='flex-wrap justify-items-center opacity-90 items-center'><Image
                src="/reactnative.svg"
                alt="reactnative"
                width={45}
                height={45}
                
                /> 
                </div>
             
                </div>

                <div className='bg-surfacelight-secondary dark:bg-surfacedark-primary rounded-sm p-1'>
                <div className='flex-wrap items-center opacity-90'><Image
                src="/nativebase.svg"
                alt="nativebase"
                width={45}
                height={45}
                /> 
               </div>
              
                </div>

                <div className='bg-surfacelight-secondary dark:bg-surfacedark-primary rounded-sm p-1'>
                <div className='flex-wrap items-center opacity-90'><Image
                src="/node.svg"
                alt="node"
                width={45}
                height={45}
                /> 
                </div>
                </div>
                
                <div className='bg-surfacelight-secondary dark:bg-surfacedark-primary rounded-sm p-1'>
                <div className='flex-wrap items-center opacity-90'><Image
                src="/mysql.svg"
                alt="mysql"
                width={45}
                height={45}
                /> 
                </div>
                </div>

                <div className='bg-surfacelight-secondary dark:bg-surfacedark-primary rounded-sm p-1'>
                <div className='flex-wrap items-center opacity-90'><Image
                src="/ES6.svg"
                alt="ES6"
                width={45}
                height={45}
                /> 
                </div>
                </div>
              
            </div>
       
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