import React from 'react'
import Image from "next/image"
import Cardgrid from './Cardgrid'


 
const Ourprocess = () => {

  return (
    <main className="container-fluid px-2" >
        <div className='text-center py-5 font-medium text-surfacedark-primary dark:text-surfacelight-primary'> Trusted by the Industry Leaders</div>
           <div className='flex justify-center'>
                <Image
                    src="/groupofcompanies.svg"
                    alt="devicefeatures"
                    width={714}
                    height={48}
                    
                /> 
            </div>   
        <section className='max-container flex flex-col '>
        
            <div className='flex-nowrap mt-20 animate-fade-up animate-delay-100 animate-duration-700'>
                <div className='max-sm:text-center'>
                    <h1 className='text-surfacedark-primary dark:text-surfacelight-primary'>Our Process</h1>
                    <h3 className='text-surfacedark-secondary dark:text-surfacelight-secondary'>How we do IT</h3>
                </div>
                <div className='felx-nowrap'><Cardgrid/></div>
                
                                             
            </div>
        
        </section>
    </main>
  )
}

export default Ourprocess