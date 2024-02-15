import React from 'react'
import Image from "next/image"

const MdProject = () => {
  return (
    <main className="container-fluid bg-surfacelight-primary dark:bg-surfacedark-tertiary py-10 h-full px-2">
    <section className='max-container h-full flex-wrap pb-10 space-y-2'>

    <h4 className='text-surfacedark-primary dark:text-surfacelight-primary'>Project Details</h4>
    <p className='text-surfacedark-secondary dark:text-surfacelight-secondary'>Md-Online is a user-friendly telemedicine web application, designed to bring healthcare services to your fingertips. As a convenient and accessible platform, Md-Online focuses on connecting patients with healthcare professionals in a virtual environment. This web-based telemedicine project is committed to providing seamless healthcare experiences. </p>
    
    <div className="grid lg:grid-cols-3 max-sm:grid-cols-1 gap-4">
        <div className='flex-wrap'>
           
        <Image
                src="/mdonline2.jpg"
                alt="mdonline1"
                width={595}
                height={475}
                /> 
        </div>   

        <div className='flex-wrap'>
           
        <Image
                src="/mdonline1.jpg"
                alt="mdonline2"
                width={595}
                height={475}
                /> 
        </div>   


        <div className='flex-wrap'>
           
        <Image
                src="/mdonline3.jpg"
                alt="mdonline3"
                width={595}
                height={475}
                /> 
        </div>   
    </div>
    <div className='flex-wrap'>
        <h6 className='font-semibold text-surfacedark-primary dark:text-surfacelight-primary'>Technologies:</h6>
        <p className='text-surfacedark-primary dark:text-surfacelight-primary'>React , Node JS, Metiral-UI, MYSQL</p>
    </div>

    <div className='flex-wrap'>
        <h6 className='font-semibold text-surfacedark-primary dark:text-surfacelight-primary'>Client:</h6>
        <p className='text-surfacedark-primary dark:text-surfacelight-primary'>MD Online</p>
    </div>
    </section>
    </main>    
  )
}

export default MdProject