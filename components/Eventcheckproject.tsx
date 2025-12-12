import React from 'react'
import Image from "next/image"

const Eventcheckproject = () => {
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

    <div className='flex-wrap col-span-2'>
        <h6 className='font-semibold text-surfacedark-primary dark:text-surfacelight-primary pb-2'>Technologies:</h6>
        <ul className='text-surfacedark-primary dark:text-surfacelight-primary inline space-x-1'>
          <li className='inline-block bg-surfacelight-tertiary dark:bg-surfacedark-secondary rounded-sm p-1'><span>Figma</span></li>
          <li className='inline-block bg-surfacelight-tertiary dark:bg-surfacedark-secondary rounded-sm p-1'><span>PHP Laravel</span></li>
          <li className='inline-block bg-surfacelight-tertiary dark:bg-surfacedark-secondary rounded-sm p-1'><span>Swift</span></li>
          <li className='inline-block bg-surfacelight-tertiary dark:bg-surfacedark-secondary rounded-sm p-1'><span>Blade Template Engine</span></li>
        </ul>
    </div>

    <div className='flex-wrap'>
        <h6 className='font-semibold text-surfa cedark-primary dark:text-surfacelight-primary'>Client:</h6>
        <p className='text-surfacedark-primary dark:text-surfacelight-primary'>Bloop Team</p>
    </div>
    </section>
    </main>    
  )
}

export default Eventcheckproject