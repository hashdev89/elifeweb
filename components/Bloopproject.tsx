import React from 'react'
import Image from "next/image"

const Bloopproject = () => {
  return (
    <main className="container-fluid bg-surfacelight-primary dark:bg-surfacedark-tertiary py-10 h-full px-2">
    <section className='max-container h-full flex-wrap pb-10 space-y-2'>

    <h4 className='text-surfacedark-primary dark:text-surfacelight-primary'>Project Details</h4>
    <p className='text-surfacedark-secondary dark:text-surfacelight-secondary'>A powerful tool built specifically to link the college students using their common interests. Facilities to direct chat, share notes between your colleagues in uni. Students can join our multi level Lounges where they will be able to interact with other students with the similar interests. Based on university major and minors. Finally it will assist the students to link with their potential future employees. It could decide your future today.</p>
    
    <div className="grid lg:grid-cols-3 max-sm:grid-cols-1 gap-4">
        <div className='flex-wrap'>
           
        <Image
                src="/bloop-1.jpg"
                alt="bloop"
                width={595}
                height={475}
                /> 
        </div>   

        <div className='flex-wrap'>
           
        <Image
                src="/bloop-2.jpg"
                alt="bloop"
                width={595}
                height={475}
                /> 
        </div>   


        <div className='flex-wrap'>
           
        <Image
                src="/bloop-3.jpg"
                alt="bloop"
                width={595}
                height={475}
                /> 
        </div>   
    </div>

    <div className='flex-wrap'>
        <h6 className='font-semibold text-surfacedark-primary dark:text-surfacelight-primary'>Role:</h6>
        <p className='text-surfacedark-primary dark:text-surfacelight-primary'>UI Design, UX Writing, Mobile App Development</p>
    </div>

    <div className='flex-wrap'>
        <h6 className='font-semibold text-surfacedark-primary dark:text-surfacelight-primary'>Technologies:</h6>
        <p className='text-surfacedark-primary dark:text-surfacelight-primary'>Figma ,React Native, Node JS, ES 6</p>
    </div>

    <div className='flex-wrap'>
        <h6 className='font-semibold text-surfacedark-primary dark:text-surfacelight-primary'>Client:</h6>
        <p className='text-surfacedark-primary dark:text-surfacelight-primary'>Bloop Team</p>
    </div>
    </section>
    </main>
  )
}

export default Bloopproject