import React from 'react'


const Ournetwork = () => {
  return (
    <main className='container-fluid bg-white dark:bg-surfacedark-primary pt-10 py-10'>
    <section className='max-container flex-wrap'>
    <div className='space-y-2 pb-5 text-center'>
         <h1 className='text-surfacedark-primary dark:text-surfacelight-primary'>Our Network</h1>
         <h3 className='text-surfacedark-secondary dark:text-surfacelight-secondary'>We have a spreaded team</h3>
     </div>
      </section>
      <iframe className='border:none' width='100%' height='600px' src="https://api.mapbox.com/styles/v1/hashdev/clok9x8ld006601qy2ny35gre.html?title=false&access_token=pk.eyJ1IjoiaGFzaGRldiIsImEiOiJjbG15b3o3ZWowMXY2MnVtdndndW91YW1rIn0.CTztAdqqK_38Diecx7_A0Q&zoomwheel=false#9.87/33.9217/-118.0765" title="elifenetwork"></iframe>
    </main>    
  )
}

export default Ournetwork