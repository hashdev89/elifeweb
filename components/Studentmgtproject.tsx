import React from 'react'
import Image from "next/image"

const Studentmgtproject = () => {
  return (
    <main className="container-fluid bg-surfacelight-primary dark:bg-surfacedark-tertiary py-10 h-full px-2">
    <section className='max-container h-full flex-wrap pb-10 space-y-2'>

    <h4 className='text-surfacedark-primary dark:text-surfacelight-primary'>Project Details</h4>
    <p className='text-surfacedark-secondary dark:text-surfacelight-secondary'>Online tool to manage the students registrations and online class management. Development on request. Schedule the online class sessions. Use video streaming to hold real time online classes. Manage payments. Customization on request.</p>
    
    <div className="grid lg:grid-cols-3 max-sm:grid-cols-1 gap-4">
        <div className='flex-wrap'>
           
        <Image
                src="/studentmgt-1.png"
                alt="Studentmgt"
                width={595}
                height={475}
                /> 
        </div>   

        <div className='flex-wrap'>
           
        <Image
                src="/studentmgt-2.png"
                alt="studentmgt"
                width={595}
                height={475}
                /> 
        </div>   


        <div className='flex-wrap'>
           
        <Image
                src="/studentmgt-3.png"
                alt="student"
                width={595}
                height={475}
                /> 
        </div>   
    </div>
    <div className='space-y-2'>
    <div className='flex-wrap'>
        <h6 className='font-semibold text-surfacedark-primary dark:text-surfacelight-primary pb-2'>Role:</h6>
        <p className='text-surfacedark-primary dark:text-surfacelight-primary'>UI Design, UX Writing, Mobile App Development</p>
    </div>

    <div className='flex-wrap'>
        <h6 className='font-semibold text-surfacedark-primary dark:text-surfacelight-primary pb-2'>Technologies:</h6>
        <ul className='text-surfacedark-primary dark:text-surfacelight-primary inline space-x-1'>
          <li className='inline-block bg-surfacelight-tertiary dark:bg-surfacedark-secondary rounded-sm p-1'><span>Figma</span></li>
          <li className='inline-block bg-surfacelight-tertiary dark:bg-surfacedark-secondary rounded-sm p-1'><span>React Native</span></li>
          <li className='inline-block bg-surfacelight-tertiary dark:bg-surfacedark-secondary rounded-sm p-1'><span>Node JS</span></li>
          <li className='inline-block bg-surfacelight-tertiary dark:bg-surfacedark-secondary rounded-sm p-1'><span>ES 6</span></li>
          <li className='inline-block bg-surfacelight-tertiary dark:bg-surfacedark-secondary rounded-sm p-1'><span>Android SDK</span></li>
          <li className='inline-block bg-surfacelight-tertiary dark:bg-surfacedark-secondary rounded-sm p-1'><span>Swift</span></li>
        </ul>
    </div>

    <div className='flex-wrap'>
        <h6 className='font-semibold text-surfacedark-primary dark:text-surfacelight-primary pb-2'>Client:</h6>
        <p className='text-surfacedark-primary dark:text-surfacelight-primary'>Bloop Team</p>
    </div>
    </div>
    </section>
    </main>
  )
}

export default Studentmgtproject