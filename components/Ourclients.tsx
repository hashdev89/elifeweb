import Image from 'next/image'
import React from 'react'

const Ourclients = () => {
  return (
    <main className='contaienr-fluid bg-white dark:bg-surfacedark-tertiary pt-10 py-10 px-2'>
        <section className='max-container'>
        <h1 className='text-surfacedark-primary dark:text-surfacelight-primary max-sm:text-center'>Our Clients & Patners</h1>
          <h3 className='text-surfacedark-secondary dark:text-surfacelight-secondary max-sm:text-center'>We Have Worked With</h3>
        <div className='grid grid-cols-1 grid-rows-1 sm:grid-cols-4 gap-5 pt-10 py-10 px-4'>
          
            <div className='bg-surfacelight-primary dark:bg-surfacedark-secondary rounded-sm mx-auto pt-1 p-1'> 
              <Image
              src="/westcovina.png"
              alt="westcovina"
              width={270}
              height={76}
              image-color='white'
              />
             </div>

             <div className='bg-surfacelight-primary dark:bg-surfacedark-secondary rounded-sm mx-auto pt-4 p-2'> 
              <Image
              src="/ladmcblack.png"
              alt="LADMC"
              width={479}
              height={70}
              />
             </div>

             <div className='bg-surfacelight-primary dark:bg-surfacedark-secondary  rounded-sm mx-auto pt-1 p-2'> 
              <Image
              src="/mayflower.png"
              alt="Mayflower"
              width={270}
              height={76}
              />
             </div>

             <div className='bg-surfacelight-primary dark:bg-surfacedark-secondary rounded-sm mx-auto pt-3 p-2'> 
              <Image
              src="/dell.png"
              alt="Dell"
              width={176}
              height={54}
              />
             </div>
         </div> 
        </section>
    </main>    
  )
}

export default Ourclients