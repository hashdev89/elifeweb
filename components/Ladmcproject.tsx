import React from 'react'
import Image from "next/image"

const Ladmcproject = () => {
  return (
    <main className="container-fluid bg-surfacelight-primary dark:bg-surfacedark-tertiary py-10 h-full px-2">
    <section className='max-container h-full flex-wrap pb-10 space-y-2'>

    <h4 className='text-surfacedark-primary dark:text-surfacelight-primary'>Project Details</h4>
    <p className='text-surfacedark-secondary dark:text-surfacelight-secondary'>Event Check-In is your virtual assistant in handling your events and functions. Experience the sleek and modern features built in. A total package to cover the event arrangements, food and beverages, event items and even the valet services. Make your event a memorable one. It is your Event - It is your Moment !</p>
    
    <div className="grid lg:grid-cols-3 max-sm:grid-cols-1 gap-4">
        <div className='flex-wrap'>
           
        <Image
                src="/event-checkin-1.jpg"
                alt="evntcheck"
                width={595}
                height={475}
                /> 
        </div>   

        <div className='flex-wrap'>
           
        <Image
                src="/event-checkin-3.jpg"
                alt="eventcheck"
                width={595}
                height={475}
                /> 
        </div>   


        <div className='flex-wrap'>
           
        <Image
                src="/event-checkin-2.jpg"
                alt="eventcheck"
                width={595}
                height={475}
                /> 
        </div>   
    </div>

    <div className='flex-wrap'>
        <h6 className='font-semibold text-surfacedark-primary dark:text-surfacelight-primary'>Role:</h6>
        <p className='text-surfacedark-primary dark:text-surfacelight-primary'>UI Design, UX Writing, Mobile App Development</p>
    </div>

    <div className='flex-wrap'>
        <h6 className='font-semibold text-surfacedark-primary dark:text-surfacelight-primary'>Technologies:</h6>
        <p className='text-surfacedark-primary dark:text-surfacelight-primary'>React Native, Node JS, ES 6, MYSQL</p>
    </div>

    <div className='flex-wrap'>
        <h6 className='font-semibold text-surfacedark-primary dark:text-surfacelight-primary'>Client:</h6>
        <p className='text-surfacedark-primary dark:text-surfacelight-primary'>Bloop Team</p>
    </div>
    </section>
    </main>
  )
}

export default Ladmcproject