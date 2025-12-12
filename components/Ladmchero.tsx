import Link from 'next/link'
import React from 'react'

const Ladmchero = () => {
  return (
    <main className="container-fluid bg-[url('/ladmcbk.png')] bg-cover bg-center bg-no-repeat py-10 h-98 pt-96 px-2 ">
        <section className='max-container h-full flex-wrap '>

        <div className='grid grid-cols-1 row-auto gap-2 h-full'>
        <div className='col-span-1 text-surfacelight-primary'>
          <h1>LADMC Medical Platform</h1>
        </div>
        </div>
        <p className='text-surfacelight-primary pt-2 pb-2'>Web Application</p>  
        <Link href="https://ladmcapplication.com/">
    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-sm text-sm px-2 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right relative inline-block mr-2" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
    </svg>Know More</button>
    </Link> 
        </section>
    </main>
  )
}

export default Ladmchero