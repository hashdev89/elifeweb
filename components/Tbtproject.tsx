import React from 'react'
import Image from "next/image"

const Tbtproject = () => {
  return (
    <main className="container-fluid bg-surfacelight-primary dark:bg-surfacedark-tertiary py-10 h-full px-2">

    <section className='max-container h-full flex-wrap pb-10 space-y-2'>

    <h4 className='text-surfacedark-primary dark:text-surfacelight-primary'>Project Details</h4>
    <p className='text-surfacedark-secondary dark:text-surfacelight-secondary'>Text-based ticketing system is a system that allows users to create and manage support tickets through text-based communication channels, such as SMS, email, or messaging apps. This type of system is particularly useful for providing customer support in a convenient and accessible way.</p>
   

    <div className="grid lg:grid-cols-3 max-sm:grid-cols-1 gap-4">
        <div className='flex-wrap bg-gradient-to-t bg-secondry-600 from-purple-700'>
           
        <Image
                src="/tbt1.png"
                alt="mdonline1"
                width={595}
                height={475}
                
                /> 
        </div>   

        <div className='flex-wrap bg-gradient-to-t bg-secondry-600 from-purple-700'>
           
           <Image
                   src="/tbt2.png"
                   alt="mdonline1"
                   width={595}
                   height={475}
                   
                   /> 
           </div>  

           <div className='flex-wrap bg-gradient-to-t bg-secondry-600 from-purple-700'>
           
           <Image
                   src="/tbt3.png"
                   alt="mdonline1"
                   width={595}
                   height={475}
                   
                   /> 
           </div>  
    </div>
    <div className='flex-wrap space-y-2'>
        <h6 className='font-semibold text-surfacedark-primary dark:text-surfacelight-primary'>Features:</h6>

        <p className='text-surfacedark-primary dark:text-surfacelight-primary font-semibold'>
        Get support anywhere anytime
        </p>
        <p className='text-surfacedark-primary dark:text-surfacelight-primary'>eLife associates are always available to help you with your tech support needs.</p>
        
        <p className='text-surfacedark-primary dark:text-surfacelight-primary font-semibold'>
        Updates via text or web
        </p>
        <p className='text-surfacedark-primary dark:text-surfacelight-primary'>Updates will be sent to you via text or you can view the progress on our user-friendly eLife webportal.</p>

        <p className='text-surfacedark-primary dark:text-surfacelight-primary font-semibold'>
        User-friendly and intuitive system
        </p>
        <p className='text-surfacedark-primary dark:text-surfacelight-primary'>Our newly designed web portal has a simple but effective user interface. You can easily accessyour tickets in progress as well as your messages and projects.</p>
    </div>

    <div className='flex-wrap'>
        <h6 className='font-semibold text-surfacedark-primary dark:text-surfacelight-primary'>Client:</h6>
        <p className='text-surfacedark-primary dark:text-surfacelight-primary'>eLife America Product</p>
    </div>
    </section>
    </main>    
  )
}

export default Tbtproject