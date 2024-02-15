import React from 'react'

const Getstartedyourplan = () => {
  return (
    <main className='container-fluid bg-white dark:bg-surfacedark-tertiary py-10 px-2'>
        <section className='max-container'>
         
        <div className='flex-wrap text-center'>
        <h1 className='text-surfacedark-primary dark:text-surfacelight-primary'>Get Started Your Plan Today</h1>
        <h3 className='text-surfacedark-secondary dark:text-surfacelight-secondary'>Please select the best fit for you</h3>
        </div>

        <div className="grid lg:grid-cols-5 grid-rows-1 grid-flow-start gap-4 pt-5" id="pricing-header">
                   
                    <div className="flex-wrap bg-surfacelight-primary dark:bg-surfacedark-primary text-center rounded-md pt-2 pb-2 h-full shadow-md">
                        <div id="pricing-category" className=""><h4 className='text-surfacedark-primary dark:text-surfacelight-secondary'>Starter</h4></div>
                        <div className="pricing-value">
                         <h6 className='text-surfacedark-primary dark:text-surfacelight-primary'> $ 99 / Month</h6>
                        </div>
                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-sm text-sm px-2 py-2.5 p-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 gap-2 mt-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right relative inline-block mr-2" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                         </svg>Get Started
                         </button>

                         <div id="features" className='text-center w-full space-y-1 pt-2 pb-2'>
                            <h5 className='text-surfacedark-primary dark:text-surfacelight-primary'>Build</h5>
                            <h6 className='text-surfacedark-secondary dark:text-surfacelight-secondary'>Platform</h6>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary  p-1'>iOS or Android</p>
                            <p className='flex-wrap bg-surfacelight-tertiary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1 '>iOS & Android</p>
                         </div>

                         <div id="features" className='text-center w-full space-y-1 pb-2 font-medium'>
                            <h6 className='text-surfacedark-secondary dark:text-surfacelight-secondary'>Mobile App Features</h6>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Product Listings / SKUs -50</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>App Updates Per Month -1</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1 h-5'>No</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1 h-5'>No</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1 h-5'>No</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1 h-5'>No</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1 h-5'>No</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Collections & Sub Collections</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Search</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Schedule Image Notification</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Cart page checkbox for T&C</p>

                         </div>

                         
                         <div id="features" className='text-center w-full space-y-1 pb-2'>
                            <h6 className='text-surfacedark-secondary dark:text-surfacelight-secondary'>App Design</h6>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary  p-1 h-5'>No</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1 h-5'>No</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary  p-1'>Branded Header Colors</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Remove Powered by text</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1 h-5'>No</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Multi Language Support</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Customizable Font</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary  p-1'>Editable CTAs</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1 h-5'>No</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1 h-5'>No</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>GIF Banners</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary  p-1'>Announcement Banner</p>

                         </div>

                         <div id="features" className='text-center w-full space-y-1 pb-2'>
                            <h5 className='text-surfacedark-secondary dark:text-surfacelight-secondary'>Market</h5>
                            <h6 className='text-surfacedark-tertiary  dark:text-surfacelight-tertiary'>App Marketing Tools</h6>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>iOS or Android</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>iOS & Android</p>
                         </div>
                    </div>
                    
                    <div className="flex-wrap bg-surfacelight-primary dark:bg-surfacedark-primary text-center rounded-md pt-2 pb-2 h-full shadow-md">
                        <div id="pricing-category" className="text-surfacedark-primary dark:text-surfacelight-primary"><h4>Grow</h4></div>
                        <div className="pricing-value">
                         <h6 className='text-surfacedark-secondary dark:text-surfacelight-secondary'> $ 199 / Month</h6>
                        </div>
                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-sm text-sm px-2 py-2.5 p-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 gap-2 mt-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right relative inline-block mr-2" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                         </svg>Get Started
                         </button>

                         <div id="features" className='text-center w-full space-y-1 pt-2 pb-2'>
                            <h5 className='text-surfacedark-primary dark:text-surfacelight-primary'>Build</h5>
                            <h6 className='text-surfacedark-secondary dark:text-surfacelight-secondary'>Platform</h6>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary h-5 p-1'>No</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1 '>iOS & Android</p>
                         </div>

                         <div id="features" className='text-center w-full space-y-1 pb-2 font-medium'>
                            <h6 className='text-surfacedark-secondary dark:text-surfacelight-secondary'>Mobile App Features</h6>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Product Listings / <b>SKUs -250</b> </p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>App Updates Per Month -2</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>0% Transaction Fees</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Add to Wishlist</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Real-Time Store Sync</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Add to Wishlist</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary  p-1'>Single Page Checkout</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Collections & Sub Collections</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Search</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Schedule Image Notification</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Cart page checkbox for T&C</p>

                         </div>

                         
                         <div id="features" className='text-center w-full space-y-1 pb-2'>
                            <h6 className='text-surfacedark-secondary dark:text-surfacelight-secondary'>App Design</h6>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Flexible Layouts</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Splash Screen</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary  p-1'>Branded Header Colors</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Remove Powered by text</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary  p-1'>Fit Fill</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Multi Language Support</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Customizable Font</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary  p-1'>Editable CTAs</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary  p-1'>Banners</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary  p-1'>Auto Slide Banners</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>GIF Banners</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary  p-1'>Announcement Banner</p>

                         </div>

                         <div id="features" className='text-center w-full space-y-1 pb-2'>
                            <h5 className='text-surfacedark-secondary dark:text-surfacelight-secondary'>Market</h5>
                            <h6 className='text-surfacedark-tertiary  dark:text-surfacelight-tertiary'>App Marketing Tools</h6>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>iOS or Android</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>iOS & Android</p>
                         </div>
                    </div>
                    
                    <div className="flex-wrap bg-surfacelight-primary dark:bg-surfacedark-primary text-center rounded-md pt-2 pb-2 h-full shadow-md">
                        <div id="pricing-category" className="text-surfacedark-primary dark:text-surfacelight-primary"><h4>Power</h4></div>
                        <div className="pricing-value">
                         <h6 className='text-surfacedark-secondary dark:text-surfacelight-secondary'> $ 299 / Month</h6>
                        </div>
                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-sm text-sm px-2 py-2.5 p-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 gap-2 mt-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right relative inline-block mr-2" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                         </svg>Get Started
                         </button>

                         <div id="features" className='text-center w-full space-y-1 pt-2 pb-2'>
                            <h5 className='text-surfacedark-primary dark:text-surfacelight-primary'>Build</h5>
                            <h6 className='text-surfacedark-secondary dark:text-surfacelight-secondary'>Platform</h6>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1 h-5'></p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1 '>iOS & Android</p>
                         </div>

                         <div id="features" className='text-center w-full space-y-1 pb-2 font-medium'>
                            <h6 className='text-surfacedark-secondary dark:text-surfacelight-secondary'>Mobile App Features</h6>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Product Listings / <b>SKUs -500</b> </p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>App Updates Per Month -5</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>0% Transaction Fees</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Add to Wishlist</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Real-Time Store Sync</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Add to Wishlist</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Single Page Checkout</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Collections & Sub Collections</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Search</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Schedule Image Notification</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Cart page checkbox for T&C</p>

                         </div>

                         
                         <div id="features" className='text-center w-full space-y-1 pb-2'>
                            <h6 className='text-surfacedark-secondary dark:text-surfacelight-secondary'>App Design</h6>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Flexible Layouts</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Splash Screen</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Branded Header Colors</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Remove Powered by text</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Fit Fill</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Multi Language Support</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Customizable Font</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Editable CTAs</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Banners</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Auto Slide Banners</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>GIF Banners</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Announcement Banner</p>

                         </div>

                         <div id="features" className='text-center w-full space-y-1 pb-2'>
                            <h5 className='text-surfacedark-secondary dark:text-surfacelight-secondary'>Market</h5>
                            <h6 className='text-surfacedark-tertiary  dark:text-surfacelight-tertiary'>App Marketing Tools</h6>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>iOS or Android</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>iOS & Android</p>
                         </div>
                    </div>

                    <div className="flex-wrap bg-surfacelight-primary dark:bg-surfacedark-primary text-center rounded-md pt-2 pb-2 h-full shadow-md">
                        <div id="pricing-category" className=""><h4 className='text-surfacedark-primary dark:text-surfacelight-secondary'>Premium</h4></div>
                        <div className="pricing-value">
                         <h6 className='text-surfacedark-primary dark:text-surfacelight-primary'> $ 599 / Month</h6>
                        </div>
                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-sm text-sm px-2 py-2.5 p-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 gap-2 mt-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right relative inline-block mr-2" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                         </svg>Get Started
                         </button>

                         <div id="features" className='text-center w-full space-y-1 pt-2 pb-2'>
                            <h5 className='text-surfacedark-primary dark:text-surfacelight-primary'>Build</h5>
                            <h6 className='text-surfacedark-secondary dark:text-surfacelight-secondary'>Platform</h6>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>No</p>
                            <p className='flex-wrap bg-surfacelight-tertiary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>iOS & Android</p>
                         </div>

                         <div id="features" className='text-center w-full space-y-1 pb-2 font-medium'>
                            <h6 className='text-surfacedark-secondary dark:text-surfacelight-secondary'>Mobile App Features</h6>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Product Listings / <b>SKUs -1000</b> </p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>App Updates Per Month -5</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>0% Transaction Fees</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Add to Wishlist</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Real-Time Store Sync</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Add to Wishlist</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Single Page Checkout</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Collections & Sub Collections</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Search</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Schedule Image Notification</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Cart page checkbox for T&C</p>

                         </div>

                         
                         <div id="features" className='text-center w-full space-y-1 pb-2'>
                            <h6 className='text-surfacedark-secondary dark:text-surfacelight-secondary'>App Design</h6>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Flexible Layouts</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Splash Screen</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Branded Header Colors</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Remove Powered by text</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Fit Fill</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Multi Language Support</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Customizable Font</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Editable CTAs</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Banners</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Auto Slide Banners</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>GIF Banners</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Announcement Banner</p>

                         </div>

                         <div id="features" className='text-center w-full space-y-1 pb-2'>
                            <h5 className='text-surfacedark-secondary dark:text-surfacelight-secondary'>Market</h5>
                            <h6 className='text-surfacedark-tertiary  dark:text-surfacelight-tertiary'>App Marketing Tools</h6>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>iOS or Android</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>iOS & Android</p>
                         </div>
                    </div>

                    <div className="flex-wrap bg-surfacelight-primary dark:bg-surfacedark-primary text-center rounded-md pt-2 pb-2 h-full shadow-md">
                        <div id="pricing-category" className="text-surfacedark-primary dark:text-surfacelight-secondary"><h4>Enterprise</h4></div>
                        <div className="pricing-value">
                         <h6 className='text-surfacedark-primary dark:text-surfacelight-primary'> $ 1299  / Month</h6>
                        </div>
                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-sm text-sm px-2 py-2.5 p-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 gap-2 mt-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right relative inline-block mr-2" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                         </svg>Get Started
                         </button>

                         <div id="features" className='text-center w-full space-y-1 pt-2 pb-2'>
                            <h5 className='text-surfacedark-primary dark:text-surfacelight-primary'>Build</h5>
                            <h6 className='text-surfacedark-secondary dark:text-surfacelight-secondary'>Platform</h6>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>No</p>
                            <p className='flex-wrap bg-surfacelight-tertiary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>iOS & Android</p>
                         </div>

                         <div id="features" className='text-center w-full space-y-1 pb-2 font-medium'>
                            <h6 className='text-surfacedark-secondary dark:text-surfacelight-secondary'>Mobile App Features</h6>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Product Listings/<b>SKUs -Unlimited</b></p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Updates Per Month - <b>Unlimited</b></p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>0% Transaction Fees</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Add to Wishlist</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Real-Time Store Sync</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Add to Wishlist</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Single Page Checkout</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Collections & Sub Collections</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Search</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Schedule Image Notification</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Cart page checkbox for T&C</p>

                         </div>

                         
                         <div id="features" className='text-center w-full space-y-1 pb-2'>
                            <h6 className='text-surfacedark-secondary dark:text-surfacelight-secondary'>App Design</h6>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Flexible Layouts</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Splash Screen</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Branded Header Colors</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Remove Powered by text</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Fit Fill</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Multi Language Support</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Customizable Font</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Editable CTAs</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Banners</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Auto Slide Banners</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>GIF Banners</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>Announcement Banner</p>

                         </div>

                         <div id="features" className='text-center w-full space-y-1 pb-2'>
                            <h5 className='text-surfacedark-secondary dark:text-surfacelight-secondary'>Market</h5>
                            <h6 className='text-surfacedark-tertiary  dark:text-surfacelight-tertiary'>App Marketing Tools</h6>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>iOS or Android</p>
                            <p className='flex-wrap bg-surfacelight-secondary dark:bg-surfacedark-secondary text-surfacedark-secondary dark:text-surfacelight-secondary p-1'>iOS & Android</p>
                         </div>
                    </div>

                </div>
            
        </section>
    </main>
  )
}

export default Getstartedyourplan