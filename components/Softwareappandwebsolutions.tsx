import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const Softwareappandwebsolutions = () => {
  return (
    <main className='container-fluid bg-white dark:bg-surfacedark-tertiary py-10 px-2'>
        <section className='max-container h-full'>
            <div id='softsolutions' className='grid lg:grid-cols-2 max-sm:grid-cols-1 gap-5 h-full pb-5'>
                <div className='flex-wrap space-y-2'>
                    <h1 className='text-surfacedark-primary dark:text-surfacelight-primary'>Software, App & Web Solutions</h1>
                    <h3 className='text-surfacedark-secondary dark:text-surfacelight-secondary'>Top-tier Web and Mobile App Development Services of a high standard</h3>
                    <p className='text-surfacedark-tertiary dark:text-surfacelight-tertiary'>When you're selecting eLife America, you are opting for superior expertise in the development of web and mobile applications. Enhance your online presence, optimize your business processes, and maintain a competitive edge through our exceptional services. Explore the potential of a collaborative alliance focused on delivering high-quality outcomes by partnering with us today.</p>
                </div>
                <div className='flex-wrap'>
                <div className='float-right rounded-md'>
                <Image
                src="/softwaresolutions.png"
                alt="softwaresolutions"
                width={603}
                height={364}
                /> 
                </div>
                </div>    
            </div>

            <div className='grid grid-cols-3 grid-rows-1 lg:grid-cols-3 max-sm:grid-cols-1 gap-5 h-full'>
              <div className='flex-wrap rounded-sm bg-surfacelight-primary dark:bg-surfacedark-primary p-10 space-y-2'>
              <div className="w-16 h-16 bg-bgshades-bluemagento rounded-full relative float-right blur-2xl"></div>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#3783F5" className="bi bi-building relative inline-block m-1 " viewBox="0 0 16 16">
                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4"/>
                </svg>
                </div>
                <h4 className='text-surfacedark-primary dark:text-surfacelight-primary'>Expertise</h4>
                <p className='text-surfacedark-secondary dark:text-surfacelight-secondary'>Our team comprises seasoned professionals who stay ahead of industry trends, ensuring your projects benefit from the latest technologies and best practices.</p>
              </div>

              <div className='flex-wrap rounded-sm bg-surfacelight-primary dark:bg-surfacedark-primary p-10 space-y-2'>
                <div className="w-16 h-16 bg-bgshades-blueshade rounded-full relative float-right blur-2xl"></div>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#3783F5" className="bi bi-building relative inline-block m-1 " viewBox="0 0 16 16">
                <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001"/>
                </svg>
                </div>
                <h4 className='text-surfacedark-primary dark:text-surfacelight-primary'>Comprehensive Solutions</h4>
                <p className='text-surfacedark-primary dark:text-surfacelight-secondary '>We offer end-to-end development services, from concept to deployment, providing a seamless experience for our clients. and we gives the best solutions with the newest technological albites. </p>
              </div>
              
              <div className='flex-wrap rounded-sm bg-surfacelight-primary dark:bg-surfacedark-primary p-10 space-y-2'>
                <div className="w-16 h-16 bg-secondry-100 rounded-full relative float-right blur-2xl"></div>
                <div className=''>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#3783F5" className="bi bi-building relative inline-block m-1 " viewBox="0 0 16 16">
                <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435zM8 .989c.127 0 .253.049.35.145l6.516 6.516a.495.495 0 0 1 0 .7L8.35 14.866a.493.493 0 0 1-.35.145V.989z"/>
                </svg>
                </div>
                <h4 className='text-surfacedark-primary dark:text-surfacelight-primary'>Customization</h4>
                <p className='text-surfacedark-secondary dark:text-surfacelight-secondary'>We understand that every business is unique. That's why we tailor our solutions to your specific needs, ensuring your web and mobile applications are as unique as your brand.</p>
              </div>

              <div className='flex-wrap rounded-sm bg-surfacelight-primary dark:bg-surfacedark-primary p-10 space-y-2'>
                <div className="w-16 h-16 bg-secondry-100 rounded-full relative float-right blur-2xl "></div>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#3783F5" className="bi bi-building relative inline-block m-1 " viewBox="0 0 16 16">
                <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864z"/>
                <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z"/>
                </svg>
                </div>
                <h4 className='text-surfacedark-primary dark:text-surfacelight-primary'>Quality Assurance</h4>
                <p className='text-surfacedark-primary dark:text-surfacelight-secondary'>Our rigorous quality assurance processes guarantee that your applications are not only visually stunning but also highly functional and secure.</p>
              </div>
              
              <div className='flex-wrap rounded-sm bg-surfacelight-primary dark:bg-surfacedark-primary p-10 space-y-2'>
                <div className="w-16 h-16 bg-bgshades-bluemagento rounded-full relative float-right blur-2xl"></div>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#3783F5" className="bi bi-building relative inline-block m-1" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                </svg>
                </div>
                <h4 className='text-surfacedark-primary dark:text-surfacelight-primary'>Timely Delivery</h4>
                <p className='text-surfacedark-secondary dark:text-surfacelight-secondary'>We provide on-time delivery services that exemplify the effectiveness of our organization. Our end goal is to enhance customer satisfaction by adhering to professional timeline.</p>
              </div>
              
              <div className='flex-wrap rounded-sm bg-surfacelight-primary dark:bg-surfacedark-primary p-10 space-y-2'>
                <div className="w-16 h-16 bg-bgshades-blueshade rounded-full relative float-right blur-2xl"></div>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#3783F5" className="bi bi-building relative inline-block m-1 " viewBox="0 0 16 16">
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                </svg>
                </div>
                <h4 className='text-surfacedark-primary dark:text-surfacelight-primary'>Client-Centric Approach</h4>
                <p className='text-surfacedark-secondary dark:text-surfacelight-secondary'>Your satisfaction is our priority. We maintain open lines of communication and involve you in every stage of development to ensure your vision is realized.</p>
              </div>
            </div>
            <Link href="/contact"><button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 gap-2 mt-5"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right relative inline-block mr-2" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                    </svg>Know More
                </button>
            </Link>    
        </section>
    </main>
  )
}

export default Softwareappandwebsolutions