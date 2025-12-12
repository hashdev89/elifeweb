import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Ourexpertise = () => {
  return (
    <main className='container-fluid bg-surfacelight-primary dark:bg-surfacedark-tertiary py-10'>
      <section className='max-container h-full flex-wrap px-2'>
            <div className='space-y-2'>
            <h1 className='text-surfacedark-primary dark:text-surfacelight-primary'>Our Expertise</h1>
            <h3 className='text-surfacedark-primary dark:text-surfacelight-secondary'>We continues to provide</h3>
            <p className='text-surfacedark-primary dark:text-surfacelight-tertiary'>Comprehensive IT services to enable organizations to thrive in the digital era. Our services encompass application design, development and IT support, as well as IT security, network management, infrastructure, and cable management. We protect data with comprehensive data backup and recovery, delivering sustainable IT solutions that are tailored to the needs of our customers. All-embracing, we offer a comprehensive range of services to IT Companies, including consulting, development, and managed solutions.</p>
            <p className='text-surfacedark-primary dark:text-surfacelight-tertiary'>In addition, we offer <b>medical IT infrastructure solutions</b>, electronic health record (ePHI) maintenance, and electronic medical record/electronic health record (EMR/EHR) IT services. We serve Southern California healthcare organizations, including skilled nursing facilities (SNFs), medical groups (medicalists), imaging centres (imaging centres), medical clinics (adult-pediatric), urgent care facilities (urgent care), and hospitals (hospitals).</p>
            <p className='text-surfacedark-primary dark:text-surfacelight-tertiary'>We have always had a passion for computer technology and a fascination for what makes businesses of all types successful. We have been actively involved in Information Technology for over 12 years and specialized in the field of information technology serving the healthcare sector. MediTech Data is a stable business with a strong reputation for honesty and reliable work.</p>
            </div>
            <div className='grid grid-cols-2 grid-rows-1 lg:grid-cols-2 max-sm:grid-cols-1 gap-5 h-full pt-5'>

                <div className="bg-surfacelight-secondary dark:bg-surfacedark-primary border-b-secondry-100 rounded-sm p-5 shadow-sm ">
                <div className='flex-wrap'>   
                     <img src="../itcounsulting.png" className="mx-auto"/>
                </div>       
                        <h5 className='text-surfacedark-secondary dark:text-surfacelight-secondary text-center pt-2'>IT Consulting Services</h5>
                        <p className='text-surfacedark-tertiary dark:text-surfacelight-tertiary text-center pt-2'>Our IT Consulting Services are not just about addressing immediate concerns; they are about preparing your organization for the future. </p>
                        <div className='text-center pt-5'>
                        <Link href="/solutionsandservices">         
                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right relative inline-block mr-2" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                        </svg>Know More</button>
                        </Link>
                        </div>
                </div>

                <div className="bg-surfacelight-secondary dark:bg-surfacedark-primary rounded-sm p-5 shadow-sm space-y-2">
                <div className='flex-wrap'>   
                     <img src="../itsecurity.png" className="mx-auto"/>
                </div>       
                        <h5 className='text-surfacedark-secondary dark:text-surfacelight-secondary  text-center'>IT Security & Advanced Networks</h5>
                        <p className='text-surfacedark-tertiary dark:text-surfacelight-tertiary text-center'>In an era where the digital realm is both a playground and a battlefield, securing your data and communication is paramount. </p>
                        <div className='text-center pt-3'>
                        <Link href="/solutionsandservices">         
                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right relative inline-block mr-2" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                        </svg>Know More</button>
                        </Link>
                        </div>
                </div>

                
                <div className="bg-surfacelight-secondary dark:bg-surfacedark-primary rounded-sm p-5 shadow-sm space-y-2">
                <div className='flex-wrap'>   
                     <img src="../applicationdesign.png" className="mx-auto pb-2"/>
                </div>       
                        <h5 className='text-surfacedark-secondary dark:text-surfacelight-secondary text-center'>Application Design & Development</h5>
                        <p className='text-surfacedark-tertiary dark:text-surfacelight-tertiary text-center'>We're not just building applications; we're crafting solutions that drive your business forward.</p>
                        <div className='text-center pt-3'>
                        <Link href="/solutionsandservices">       
                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right relative inline-block mr-2" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                        </svg>Know More</button>
                        </Link>
                        </div>
                </div>

                <div className="bg-surfacelight-secondary dark:bg-surfacedark-primary rounded-sm p-5 shadow-sm ">
                <div className='flex-wrap'>   
                     <img src="../infrastructure.png" className="mx-auto"/>
                </div>       
                        <h5 className='text-surfacedark-secondary dark:text-surfacelight-secondary text-center pt-2'>IT Infrastructure & Cable Management</h5>
                        <p className='text-surfacedark-tertiary dark:text-surfacelight-tertiary text-center pt-2'>In the fast-paced world of technology, your IT infrastructure serves as the foundation of your organization's digital capabilities. </p>
                        <div className='text-center pt-7'>
                        <Link href="/solutionsandservices"> 
                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right relative inline-block mr-2" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                        </svg>Know More</button>
                        </Link>
                        </div>
                </div>
            </div>
      </section>
    </main>
  )
}

export default Ourexpertise