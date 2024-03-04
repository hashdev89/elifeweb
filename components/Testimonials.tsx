import React from 'react'
import SwiperComponent from './SwiperComponent'

const Testimonials = () => {
  return (
    <main className="container-fluid  bg-surfacelight-primary dark:bg-surfacedark-primary bg-[url('/backgroundsahpe.png')] dark:bg-[url('/backgroundsahpedark.png')] bg-cover bg-no-repeat py-10">
      <section className="max-container padding-container flex flex-col gap-2">
        <div className="px-2">
          <div className="gap-2 py-10 max-sm:text-center">
            <h1 className='text-surfacedark-primary dark:text-surfacelight-primary'>Testimonials</h1>
            <h3 className='text-surfacedark-secondary dark:text-surfacelight-secondary'>Endorsed by Experts</h3>
          </div>
        </div>
        <SwiperComponent />

      </section>
    </main>
  )
}

export default Testimonials