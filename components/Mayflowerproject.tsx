import React from 'react'
import Image from "next/image"

const Mayflowerproject = () => {
  return (
    <main className="container-fluid bg-surfacelight-primary dark:bg-surfacedark-tertiary py-10 h-full px-2">
    <section className='max-container h-full flex-wrap pb-10 space-y-2'>

    <h4 className='text-surfacedark-primary dark:text-surfacelight-primary'>Project Details</h4>
    <p className='text-surfacedark-secondary dark:text-surfacelight-secondary'>A complet solution for medical groups with scheduling, payments and integration with exising EHR system. The solution consists of a mobile app and a web portal . The appointments could be handled via an inbuilt video conferencing tool. Puts an ease on the operator at the front desk as the system has a comprehensive digitized registration form.</p>
    
    <div className="grid lg:grid-cols-3 max-sm:grid-cols-1 gap-4">
        <div className='flex-wrap'>
           
        <Image
                src="/mayflower.jpg"
                alt="mayflower"
                width={595}
                height={475}
                /> 
        </div>   

        <div className='flex-wrap'>
           
        <Image
                src="/mayflower-1.jpg"
                alt="mayflower"
                width={595}
                height={475}
                /> 
        </div>   


        <div className='flex-wrap'>
           
        <Image
                src="/mayflower-2.jpg"
                alt="mayflower"
                width={595}
                height={475}
                /> 
        </div>   
    </div>
    <div className='flex-wrap'>
        <h6 className='font-semibold text-surfacedark-primary dark:text-surfacelight-primary'>Technologies:</h6>
        <p className='text-surfacedark-primary dark:text-surfacelight-primary'>React Native, Node JS, ES 6, MYSQL</p>
    </div>

    <div className='flex-wrap'>
        <h6 className='font-semibold text-surfacedark-primary dark:text-surfacelight-primary'>Client:</h6>
        <p className='text-surfacedark-primary dark:text-surfacelight-primary'>Mayflwoer Medical Group</p>
    </div>
    </section>
    </main>    
  )
}

export default Mayflowerproject