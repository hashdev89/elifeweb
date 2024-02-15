import Image from 'next/image'
import React from 'react'
import Link from 'next/link'


const Consulting = () => {
  return (
    <main className='container-fluid bg-surfacelight-primary dark:bg-surfacedark-primary py-10 px-2'>
    <section className='max-container h-full'>
    <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-5 h-full'>
    <div className='flex-wrap'>
        <Image
        src="/consulting.png"
        alt="conulting"
        width={574.09}
        height={389.96}
        />
    </div>
          
    <div className='flex-wrap space-y-2'>
                <h1 className='text-surfacedark-primary dark:text-surfacelight-primary'>IT Consulting Services</h1>
                <h3 className='text-surfacedark-secondary dark:text-surfacelight-secondary'>Tech Consulting Services from Executive IT Expertise</h3>
                <p className='text-surfacedark-tertiary dark:text-surfacelight-tertiary '>With this service, as the client you get access to an Associate on demand. It is up to you how you would like to utilize their time and how you would like to work with them. You have choose to have the Associate work either on-site or remotely and you have full control over how you would like to leverage the Associates experience, whether this be in a simple guidance capacity through to leading a specific project or objective.</p>
     </div>  
     </div>
    
     <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-5 pt-5'>
        <div className='bg-white dark:bg-surfacedark-secondary rounded-sm shadow-sm p-1 text-center text-surfacedark-secondary dark:text-surfacelight-secondary'><h6>Analyzing company's IT system and infrastructure.</h6></div>
        <div className='bg-white dark:bg-surfacedark-secondary rounded-sm shadow-sm p-1 text-center text-surfacedark-secondary dark:text-surfacelight-secondary'><h6>Diagnosing IT system problems, inefficiencies and weaknesses.</h6></div>
        <div className='bg-white dark:bg-surfacedark-secondary rounded-sm shadow-sm p-1 text-center text-surfacedark-secondary dark:text-surfacelight-secondary'><h6>Planning a timeline for completion of projects.</h6></div>
        <div className='bg-white dark:bg-surfacedark-secondary rounded-sm shadow-sm p-1 text-center text-surfacedark-secondary dark:text-surfacelight-secondary'><h6>Understanding a client's business needs.</h6></div>
        <div className='bg-white dark:bg-surfacedark-secondary rounded-sm shadow-sm p-1 text-center text-surfacedark-secondary dark:text-surfacelight-secondary'><h6>Monitoring the success of IT solution.</h6></div>
        <div className='bg-white dark:bg-surfacedark-secondary rounded-sm shadow-sm p-1 text-center text-surfacedark-secondary dark:text-surfacelight-secondary'><h6>Implementing a technological solution to meet business needs.</h6></div>
        <div className='bg-white dark:bg-surfacedark-secondary rounded-sm shadow-sm p-1 text-center text-surfacedark-secondary dark:text-surfacelight-secondary'><h6>Producing detailed reports on the efficacy of the technology.</h6></div>
        <div className='bg-white dark:bg-surfacedark-secondary rounded-sm shadow-sm p-1 text-center text-surfacedark-secondary dark:text-surfacelight-secondary'><h6>Collaborating with the team to ensure familiarity with technology.</h6></div>
        <div className='bg-white dark:bg-surfacedark-secondary rounded-sm shadow-sm p-1 text-center text-surfacedark-secondary dark:text-surfacelight-secondary'><h6>Monitoring the success of IT solution.</h6></div>
        <div className='bg-white dark:bg-surfacedark-secondary rounded-sm shadow-sm p-1 text-center text-surfacedark-secondary dark:text-surfacelight-secondary'><h6>Providing advice on technology best practices.</h6></div>
     </div>
     <Link href="/contact">
     <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 gap-2 mt-5 "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right relative inline-block mr-2" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8 "/>
                </svg>Know More
      </button>
      </Link>
    </section>
    </main>
  )
}

export default Consulting