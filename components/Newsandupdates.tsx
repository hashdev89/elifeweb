import React from 'react'

const Newsandupdates = () => {
  return (
    <main className="container-fluid bg-white dark:bg-surfacedark-tertiary">
        
        <section className="max-container padding-container flex flex-col gap-2 py-10 px-2" data-aos="fade-up">
        
            <div className="gap-2 py-10">
                <h1 className='text-surfacedark-primary dark:text-surfacelight-primary'>News & Updates</h1>
                <h3 className='text-surfacedark-secondary dark:text-surfacelight-secondary'>Knowledge Center</h3>
            </div>
            <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                <li className="me-2 " role="all">
                    <a href="#" className="inline-block px-4 py-2 text-white bg-tertiary-600 rounded-sm active" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile"><p>All</p></a>
                </li>
                <li className="me-2">
                    <a href="#"  className="inline-block px-4 py-2 rounded-sm hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"><p>News Updates</p></a>
                </li>
                <li className="me-2">
                    <a href="#" className="inline-block px-4 py-2 rounded-sm hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"><p>Company Updates</p></a>
                </li>
    
           </ul>



            <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4">

            <div className="bg-gradient-to-r from-bgshades-bluemagento to-bgshades-bluemagento rounded-md shadow-md space-y-2">
                        <img className="w-full rounded-t-md" src="/postimage1.png" alt="carehero"/>

                        <div className="p-4 pr-4 rounded-b-md space-y-2">
                        <h6 className="text-secondry-100">News Updates</h6>
                        <h5 className="text-white font-semibold leading-6">Current news and events relevant to IT field.</h5>
                        </div>
            </div>

            <div className="bg-gradient-to-r from-bgshades-bluemagento to-bgshades-bluemagento  rounded-md shadow-md space-y-2">
                        <img className="w-full rounded-t-md" src="/postimage2.png" alt="carehero"/>

                        <div className="p-4 pr-4 rounded-b-md space-y-2">
                        <h6 className="text-secondry-100">Company Updates</h6>
                        <h5 className="text-white font-semibold leading-6">Information about company's latest Updates</h5>
                        </div>
            </div>

            <div className="bg-gradient-to-r from-bgshades-bluemagento to-bgshades-bluemagento rounded-md shadow-md space-y-2">
                        <img className="w-full rounded-t-md" src="/postimage3.png" alt="carehero"/>

                        <div className="p-4 pr-4 rounded-b-md space-y-2 ">
                        <h6 className="text-secondry-100">News Updates</h6>
                        <h5 className="text-white font-semibold leading-6">Current news and events relevant to IT field.</h5>
                        </div>
            </div>
            </div>

        </section>

    </main>
  )
}

export default Newsandupdates