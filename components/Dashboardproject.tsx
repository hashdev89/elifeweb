import Image from 'next/image'
import React from 'react'

const Dashboardproject = () => {
  return (
    <main className="container-fluid bg-surfacelight-primary dark:bg-surfacedark-tertiary py-10 h-full px-2">
    <section className='max-container h-full flex-wrap pb-10 space-y-2'>

    <h4 className='text-surfacedark-primary dark:text-surfacelight-primary'>Project Details</h4>
    <p className='text-surfacedark-secondary dark:text-surfacelight-secondary'>The eLife Security Dashboard is a valuable tool for companies looking to manage and monitor the security of their technology assets. Such a dashboard could provide real-time visibility into various aspects of cybersecurity</p>
    
    <div className="grid lg:grid-cols-3 max-sm:grid-cols-1 gap-4 ">
        <div className='flex-wrap'>
          
        <Image
                src="/securitydashboard.png"
                alt="securitydashboard"
                width={595}
                height={475}
                /> 
        </div>   

        <div className='flex-wrap'>
           
        <Image
                src="/Usermanagement.png"
                alt="usermanagment"
                width={595}
                height={475}
                /> 
        </div>   


        <div className='flex-wrap'>
           
        <Image
                src="/mapdhashboard.png"
                alt="map"
                width={595}
                height={475}
                /> 
        </div>   
    </div>

    <div className='flex-wrap space-y-2'>
        <h6 className='font-semibold text-surfacedark-primary dark:text-surfacelight-primary'>Features:</h6>

        <p className='text-surfacedark-primary dark:text-surfacelight-primary font-semibold'>
        Threat Prevention
        </p>
        <p className='text-surfacedark-primary dark:text-surfacelight-primary'>Providing real-time insights and proactive defense mechanisms 
to safeguard your digital assets.</p>
        
        <p className='text-surfacedark-primary dark:text-surfacelight-primary font-semibold'>
        Account Lockouts 
        </p>
        <p className='text-surfacedark-primary dark:text-surfacelight-primary'>Ensures a secondary line of defense by swiftly identifying and 
neutralizing unauthorized access attempts.</p>

        <p className='text-surfacedark-primary dark:text-surfacelight-primary font-semibold'>
        Ingress/Egress Volume tracking 
        </p>
        <p className='text-surfacedark-primary dark:text-surfacelight-primary'>Comprehensive overview of data flow within network, offering a 
critical layer of visibility to detect and mitigate suspicious activities. </p>
    </div>

    <div className='flex-wrap col-span-2'>
        <h6 className='font-semibold text-surfacedark-primary dark:text-surfacelight-primary pb-2'>Technologies:</h6>
        <ul className='text-surfacedark-primary dark:text-surfacelight-primary inline space-x-1'>
          <li className='inline-block bg-surfacelight-tertiary dark:bg-surfacedark-secondary rounded-sm p-1'><span>Python</span></li>
          <li className='inline-block bg-surfacelight-tertiary dark:bg-surfacedark-secondary rounded-sm p-1'><span>Fast API</span></li>
          <li className='inline-block bg-surfacelight-tertiary dark:bg-surfacedark-secondary rounded-sm p-1'><span>React JS</span></li>
          <li className='inline-block bg-surfacelight-tertiary dark:bg-surfacedark-secondary rounded-sm p-1'><span>MUI</span></li>
        </ul>
    </div>   

    <div className='flex-wrap'>
        <h6 className='font-semibold text-surfacedark-primary dark:text-surfacelight-primary'>Client:</h6>
        <p className='text-surfacedark-primary dark:text-surfacelight-primary'>eLife America Product</p>
    </div>

   
    </section>
    </main>    
  )
}

export default Dashboardproject