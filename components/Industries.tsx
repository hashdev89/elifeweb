import React from 'react'
import Image from "next/image"

const Industries = () => {
  return (
    <main className="container-fluid">
        <section className='max-container gap-2 py-10'>
        <div className="px-2">
        <div className="gap-2 py-10 max-sm:text-center">
                    <h1 className='text-surfacedark-primary dark:text-surfacelight-primary'>We Work with Many Industries</h1>
                    <h3 className='text-surfacedark-secondary dark:text-surfacelight-secondary'>Tailored Software Solutions for Specific Verticals</h3>
                    </div>
            
                    
                    
                <div className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4">

                    <div className=" bg-surfacelight-secondary dark:bg-surfacedark-primary rounded-md shadow-sm space-y-2">
                    <img className="w-full rounded-t-md" src="/healthcare.jpg" alt="healthcare"/>
                    <div className="p-4 pr-6 space-y-2">
                        <h2 className="text-lg text-surfacedark-primary dark:text-surfacelight-primary font-semibold leading-6 col-span-full">Healthcare</h2>
                        <p className="text-gray-600 dark:text-surfacelight-primary">As a team of Health-Tech experts, we ensure usability, compliance, data security, improved efficiency, 
                        interoperability, and the best value for money for healthcare providers and medical researchers.</p>
                    </div>   
                    </div>

                    <div className=" bg-surfacelight-secondary dark:bg-surfacedark-primary rounded-md shadow-sm space-y-2 ">
                    <img className="w-full rounded-t-md" src="/education.jpg" alt="education"/>
                    <div className="p-4 pr-6 space-y-2">
                        <h2 className="text-lg text-surfacedark-primary dark:text-surfacelight-primary font-semibold leading-6">Education</h2>
                        <p className="text-gray-600 dark:text-surfacelight-primary">We are dedicated to ensuring seamless usability, strict compliance, robust data security, heightened operational efficiency, and optimal interoperability for educational institutions, administrators, and learners alike.</p>
                    </div>   
                    </div>

                    <div className=" bg-surfacelight-secondary dark:bg-surfacedark-primary rounded-md shadow-sm space-y-2">
                    <img className="w-full rounded-t-md" src="/technology.jpg" alt="technology"/>
                    <div className="p-4 pr-6 space-y-2">
                        <h2 className="text-lg text-surfacedark-primary dark:text-surfacelight-primary font-semibold leading-6 ">Technology</h2>
                        <p className="text-gray-600 dark:text-surfacelight-primary">As a team of Health-Tech experts, we ensure usability, compliance, data security, improved efficiency, 
                        interoperability, and the best value for money for healthcare providers and medical researchers.</p>
                    </div>   
                    </div>

                    <div className=" bg-surfacelight-secondary dark:bg-surfacedark-primary rounded-md shadow-sm space-y-2 ">
                    <img className="w-full rounded-t-md" src="/ecommerce.jpg" alt="ecommerce"/>
                    <div className="p-4 pr-6 space-y-2">
                        <h2 className="text-lg text-surfacedark-primary dark:text-surfacelight-primary font-semibold leading-6 ">E-Commerce</h2>
                        <p className="text-gray-600 dark:text-surfacelight-primary">As a team of Health-Tech experts, we ensure usability, compliance, data security, improved efficiency, 
                        interoperability, and the best value for money for healthcare providers and medical researchers.</p>
                    </div>   
                    </div>
                    
                </div>
           
        </div>    
        </section>
    </main>    
  )
}

export default Industries