import React from 'react'
import Image from "next/image"

const Ladmcproject = () => {
  return (
    <main className="container-fluid bg-surfacelight-primary dark:bg-surfacedark-tertiary py-10 h-full px-2">
    <section className='max-container h-full flex-wrap pb-10 space-y-2'>

    <h4 className='text-surfacedark-primary dark:text-surfacelight-primary'>Project Details</h4>
    <p className='text-surfacedark-secondary dark:text-surfacelight-secondary'>LADMC Medical Platform is your comprehensive solution for medical administration, offering a centralized portal designed to streamline healthcare management. From patient records and appointment scheduling to billing and prescription management, our platform simplifies every aspect of medical administration. With user-friendly interfaces and advanced security features, LADMC Medical Platform ensures efficient, secure, and seamless healthcare management for healthcare providers and patients alike.</p>
    
    <div className="grid lg:grid-cols-3 max-sm:grid-cols-1 gap-4">
        <div className='flex-wrap'>
           
        <Image
                src="/LADMCAdmin.png"
                alt="ladmc"
                width={595}
                height={475}
                /> 
        </div>   

        <div className='flex-wrap'>
           
        <Image
                src="/LADMC2.png"
                alt="ladmc"
                width={595}
                height={475}
                /> 
        </div>   

    </div>

    <div className='space-y-2'>
    <div className='flex-wrap'>
        <h6 className='font-semibold text-surfacedark-primary dark:text-surfacelight-primary pb-2'>Role:</h6>
        <p className='text-surfacedark-primary dark:text-surfacelight-primary'>Mobile Freindly Web Portal Development</p>
    </div>

    <div className='flex-wrap col-span-2'>
        <h6 className='font-semibold text-surfacedark-primary dark:text-surfacelight-primary pb-2'>Technologies:</h6>
        <ul className='text-surfacedark-primary dark:text-surfacelight-primary inline space-x-1'>
          <li className='inline-block bg-surfacelight-tertiary dark:bg-surfacedark-secondary rounded-sm p-1'><span>Microsoft .NET (MVC)</span></li>
          <li className='inline-block bg-surfacelight-tertiary dark:bg-surfacedark-secondary rounded-sm p-1'><span>Microsoft SQL Server</span></li>
          <li className='inline-block bg-surfacelight-tertiary dark:bg-surfacedark-secondary rounded-sm p-1'><span>HTML</span></li>
          <li className='inline-block bg-surfacelight-tertiary dark:bg-surfacedark-secondary rounded-sm p-1'><span>CSS</span></li>
        </ul>
    </div>

    <div className='flex-wrap'>
        <h6 className='font-semibold text-surfacedark-primary dark:text-surfacelight-primary pb-2'>Client:</h6>
        <p className='text-surfacedark-primary dark:text-surfacelight-primary'>L.A. Downtown Medical Center</p>
    </div>
    </div>
    </section>
    </main>
  )
}

export default Ladmcproject