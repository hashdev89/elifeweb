import React from "react"
import Link from 'next/link'
import Image from "next/image"


const Casestudies = () => {
  return (
<main className="container-fluid bg-white dark:bg-surfacedark-tertiary" >
    <section className='max-container gap-2 py-10 px-2'> 
        <div className="gap-2 py-10 max-sm:text-center">
            <h1 className="text-surfacedark-primary dark:text-surfacelight-primary">Case of Studies</h1>
            <h3 className="text-surfacedark-primary dark:text-surfacelight-primary">Witness Our Journey</h3>
        </div>

        <div className="justify-center items-center">
            <div className="max-container">
                <div className="grid grid-cols-2 grid-rows-2 gap-4 grid-flow-row-dense lg:grid-cols-2 max-sm:grid-cols-1">
                    <div className="bg-gradient-to-r from-bgshades-bluemagento to-bgshades-bluemagento row-span-full rounded-md shadow-md space-y-2">
                        <img className="w-full rounded-t-md" src="/careherobk.svg" alt="carehero"/>

                        <div className="p-4 pr-4 rounded-b-md space-y-2 py-10">
                        <h4 className="text-white font-semibold leading-6">Care Hero</h4>
                        <h6 className="text-secondry-100 ">Sass Application</h6>
                        <p className="text-white">CareHero is a mobile-first, enterprise SaaS employee engagement solution that integrates health and well-being metrics with employee engagement data. By combining real-time, individualized health and well-being data with continuous pulse survey feedback, Care Hero...</p>
                        <p className="text-white link font-semibold"><Link href="carehero">Know More</Link></p>
                        </div>
                    </div>
                    <div className="p-4 pr-4 bg-gradient-to-r from-bgshades-bluemagento to-bgshades-bluemagento rounded-md shadow-md space-y-2">
                        
                        <h4 className="text-white font-semibold leading-6">Bloop</h4>
                        <h6 className="text-secondry-100">Mobile App Design</h6>
                        <p className="text-white">A powerful tool built specifically to link the college students using their common interests. Facilities to direct chat, share notes between your colleagues in uni. Students can join our multi level Lounges where they will be able to interact with other students with the similar...</p>
                        <p className="text-white link font-semibold"><Link href="bloop">Know More</Link></p>
                    </div>
                    <div className="p-4 pr-4 bg-gradient-to-r from-bgshades-bluemagento to-bgshades-bluemagento rounded-md shadow-md space-y-2">
                        
                        <h4 className="text-white font-semibold leading-6">Text Based Ticketing System</h4>
                        <h6 className="text-secondry-100">Web Application</h6>
                        <p className="text-white">Introducing a one of a kind support system to ease up your tasks within a reach of your fingertips. Request support through a SMS message and we will get back to you ASAP with a ticket ID. It's that simple. No more, legnthy email threads, seperate applications or any ...</p>
                        <p className="text-white link font-semibold"><Link href="tbt">Know More</Link></p>
                        
                    </div>
                </div>
                
            </div>
        </div>
    </section>   
</main>        
  )
}

export default Casestudies
