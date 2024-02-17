import React from 'react'

const Dashboardhero = () => {
  return (
    <main className="container-fluid bg-[url('/securitydashboardhero.jpg')] bg-cover bg-cente bg-no-repeat py-10 h-98 pt-96 px-2 ">
    <section className='max-container h-full flex-wrap '>

    <div className='grid grid-cols-1 row-auto gap-2 h-full'>
    <div className='col-span-1 text-surfacelight-primary'>
      <h1>eLife Security Dashboard</h1>
    </div>
    </div>
    <p className='text-surfacelight-primary pt-2'>Web Application</p>  
    </section>
    </main>
  )
}

export default Dashboardhero