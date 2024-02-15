import React from 'react'
import Image from "next/image"

const Someinteresting = () => {

  return (
    <main className="container-fluid inset-0 h-full w-full bg-surfacelight-primary dark:bg-surfacedark-primary bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#022A62_1px,transparent_1px)] [background-size:16px_16px] px-2 animate-fade-up animate-delay-100 animate-duration-700">
    <section className="max-container padding-container flex flex-col gap-2 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-2">

            <div className="mt-10 max-sm:text-center">

                <h1 className='text-surfacedark-primary dark:text-surfacelight-primary'>Some Interesting</h1>
                <h3 className='text-surfacedark-secondary dark:text-surfacelight-secondary mb-5'>Figures of Fame</h3>
                <p className='text-surfacedark-tertiary dark:text-surfacelight-tertiary'>We are delighted to apprise that we have completed over 10 projects and have 297 satisfied clients. Additionally, we have 3+ ongoing projects and 3860 hours of dedicated work ongoing. When clients are satisfied with a product or service, it implies that the company has met their expectations and provided a high-quality product or service. This can lead to an increase in sales and revenue. Additionally, satisfied customers tend to be more likely to return to the company for future purchases.</p>
               
            </div>

            <div className="grid grid-cols-2 float-right">
            <div id="finshedprojects" className='flex-wrap'>
            <Image
                    src="/finshedprojects.svg"
                    alt="finishprojects"
                    width={254}
                    height={283}
                    
                /> 
            </div>
            <div id="Satisfiedclients" className='flex-wrap'>
            <Image
                    src="/satisfiedclients.svg"
                    alt="satisfiedclients"
                    width={254}
                    height={283}
                    
                /> 
            </div>
            <div id="finshedprojects" className='flex-wrap'>
            <Image
                    src="/projectsinporgress.svg"
                    alt="projectsinporgress"
                    width={254}
                    height={283}
                    
                /> 
            </div>
            <div id="finshedprojects" className='flex-wrap'>
            <Image
                    src="/dedicatedhours.svg"
                    alt="dedicatedhours"
                    width={254}
                    height={283}
                    
                /> 
            </div>
        
            </div>
        
        </div>
    </section>    
    
</main>        
  )
}

export default Someinteresting