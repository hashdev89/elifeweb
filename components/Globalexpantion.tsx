import React from 'react'

const Globalexpantion = () => {
  return (
    <main className="container-fluid bg-[url('/expantionmap.png')] dark:bg-[url('/expantionmapdark.png')] h-screen bg-bottom bg-no-repeat bg-surfacelight-primary dark:bg-surfacedark-primary ">
      <section className="container-fluid h-full px-2">
            <div className='space-y-2 text-center pt-10'>
                <h1 className='text-surfacedark-primary dark:text-surfacelight-primary'>Global Expansion</h1>
                <h3 className='text-surfacedark-secondary dark:text-surfacelight-secondary'>Our transformative journey</h3>
            </div>
            <div className='grid grid-cols-3 grid-rows-1 lg:grid-cols-3 max-sm:grid-cols-1 gap-5 pt-5 px-2'>
                <div className='text-center'>
                    <h1 className='text-surfacedark-primary dark:text-surfacelight-primary font-6extra-large num' data-val="400">3</h1>
                    <h2 className='text-surfacedark-secondary dark:text-surfacelight-secondary'>Countries</h2>
                </div>
                <div className='text-center'>
                    <h1 className='text-surfacedark-primary dark:text-surfacelight-primary font-6extra-large'>150+</h1>
                    <h3 className='text-surfacedark-secondary dark:text-surfacelight-secondary'>Projects Completed</h3>
                </div>
                <div className='text-center'>
                    <h1 className='text-surfacedark-primary dark:text-surfacelight-primary font-6extra-large'>200+</h1>
                    <h3 className='text-surfacedark-secondary dark:text-surfacelight-secondary'>Happy Clients</h3>
                </div>
            </div>
      </section>
    </main>    
  )
}

export default Globalexpantion