import React from 'react'
import Image from 'next/image'

const Backup = () => {
  return (
    <main className='container-fluid bg-white dark:bg-surfacedark-tertiary py-10 px-2'>
      <section className='max-container h-full'>
      <div className='grid lg:grid-cols-2 gap-5 h-full pb-5'>
                <div className='flex-wrap space-y-2'>
                    <h1 className='text-surfacedark-primary dark:text-surfacelight-primary'>IT Backup and Data Recovery</h1>
                    <h3 className='text-surfacedark-secondary dark:text-surfacelight-secondary'>Disasters happen, regardless of how flashy your equipment is.</h3>
                    <p className='text-surfacedark-tertiary dark:text-surfacelight-tertiary'>Minimizing the effects comes down to the preemptive measures you take. Disaster prep requires a keen understanding of the policies, tools, and backup procedures to enable the smooth recovery and continuation of your business.</p>
               
                <div className='grid grid-cols-4 grid-rows-2 max-sm:grid-cols-2 gap-5 pt-5 pb-5 px-2'>
                <div className='bg-surfacelight-primary dark:bg-surfacedark-primary rounded-sm shadow-sm p-1 text-center text-surfacedark-primary dark:text-surfacelight-primary'><h6>Storage</h6></div>
                <div className='bg-surfacelight-primary dark:bg-surfacedark-primary rounded-sm shadow-sm p-1 text-center text-surfacedark-primary dark:text-surfacelight-primary'><h6>Design</h6></div>
                <div className='bg-surfacelight-primary dark:bg-surfacedark-primary rounded-sm shadow-sm p-1 text-center text-surfacedark-primary dark:text-surfacelight-primary'><h6>Testing</h6></div>
                <div className='bg-surfacelight-primary dark:bg-surfacedark-primary rounded-sm shadow-sm p-1 text-center text-surfacedark-primary dark:text-surfacelight-primary'><h6>Monitoring</h6></div>
                <div className='bg-surfacelight-primary dark:bg-surfacedark-primary rounded-sm shadow-sm p-1 text-center text-surfacedark-primary dark:text-surfacelight-primary'><h6>Reporting </h6></div>
                <div className='bg-surfacelight-primary dark:bg-surfacedark-primary rounded-sm shadow-sm p-1 text-center text-surfacedark-primary dark:text-surfacelight-primary'><h6>Assistance </h6></div>
                <div className='bg-surfacelight-primary dark:bg-surfacedark-primary rounded-sm shadow-sm p-1 text-center text-surfacedark-primary dark:text-surfacelight-primary'><h6>Failover </h6></div>
                <div className='bg-surfacelight-primary dark:bg-surfacedark-primary rounded-sm shadow-sm p-1 text-center text-surfacedark-primary dark:text-surfacelight-primary'><h6>Restoration </h6></div>
                
                </div>
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 gap-2 "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right relative inline-block mr-2" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                    </svg>Know More
                </button>   
                </div>
                <div className='flex-wrap'>
                    <div className='float-right'>   <Image
                src="/backup.png"
                alt="backup"
                width={381}
                height={498}
                /> </div>
             
                </div>    
        </div>
        
      </section>
    </main>
  )
}

export default Backup

