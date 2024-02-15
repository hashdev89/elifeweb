import React from 'react'
import Link from 'next/link'

const Tbthero = () => {
  return (
    <main className='container-fluid bg-white dark:bg-surfacedark-primary'>
     <section className='max-container w-full h-full'>
        <div className='grid lg:grid-cols-2 max-sm:grid-col-1 py-4'>

            <div className='flex-wrap h-auto'>
            <video className="w-full rounded-sm" controls autoPlay muted src="../tbt-video.mp4"></video>
            </div>   

            <div className='flex-wrap lg:px-10 max-sm:px-2 space-y-2'>
            <h2 className='text-surfacedark-primary dark:text-surfacelight-primary max-sm:font-medium'>Text Based Ticketing System</h2>
            <p className='text-surfacedark-secondary dark:text-surfacelight-primary'>Web Application</p>
            <p className='text-surfacedark-secondary dark:text-surfacelight-secondary pb-2'>Introducing a one of a kind support system to ease up your tasks within a reach of your fingertips. Request support through a SMS message and we will get back to you ASAP with a ticket ID. It's that simple. No more, legnthy email threads, seperate applications or any other extra work. Just send a text message and we will take care of the rest for you.</p>  
           
            <h6 className='text-surfacedark-primary dark:text-surfacelight-primary pb-2'>Having IT support has never been easier!</h6>

            <Link href="https://tbt.elifeamerica.com/">
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-sm text-sm px-2 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 gap-2">Sign Up</button>
            </Link>  

            </div>
    
        </div>
  
 
   
    </section>
    </main>
  )
}

export default Tbthero