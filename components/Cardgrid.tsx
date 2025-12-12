import React from 'react';
import Image from "next/image"

const CardGrid = () => {
  return (
    <main className="container-fluid flex-nowrap">
        <section className="max-container flex-nowrap gap-2 py-10">
            <div className="grid grid-cols-2 grid-rows-2 lg:grid-cols-3 max-sm:grid-cols-1 gap-4">

                <div className="bg-surfacelight-secondary dark:bg-surfacedark-primary rounded-sm p-4 shadow-sm">
                <Image
                                src="/planicon.svg"
                                alt="palnicon"
                                width={35}
                                height={35}
                                
                    /> 
                    <h3 className='text-surfacedark-primary dark:text-surfacelight-primary'>Plan</h3>
                    <h5 className='text-surfacedark-secondary dark:text-surfacelight-secondary'>Define & Discover</h5>
                    <p className='text-surfacedark-tertiary dark:text-surfacelight-secondary pt-1'>This is the stage where our developers will begin to plan for the forthcoming project. It serves to define the nature and extent of any current systems, and to establish the goals for new systems.</p>
                </div>

                <div className="bg-tertiary-600 rounded-sm p-4 shadow-sm">
                <Image 
                                src="/designicon.svg"
                                alt="designicon"
                                width={35}
                                height={35}
                                
                    /> 
                    <h3 className='text-surfacelight-primary'>Design</h3>
                    <h6 className='text-surfacelight-secondary'>Create Visuals</h6>
                    <p className='text-surfacelight-tertiary pt-1'>Design Phase is the which our UI/UX engineers create the technical specifications of the product. These specifications may include, depending on the project, screen designs, Prototypes.</p>
                </div>

                <div className="bg-surfacelight-secondary dark:bg-surfacedark-primary rounded-sm p-4 shadow-sm">
                <Image
                                src="/buildicon.svg"
                                alt="buildicon"
                                width={35}
                                height={35}
                                
                    /> 
                    <h3 className='text-surfacedark-primary dark:text-surfacelight-primary'>Build</h3>
                    <h5 className='text-surfacedark-secondary dark:text-surfacelight-secondary'>Develop & Construct</h5>
                    <p className='text-surfacedark-tertiary dark:text-surfacelight-tertiary pt-1'>The building phase adopts the previously established code requirements and utilizes them to initiate the actual development of the software. The system design within an integrated development framework.</p>
                </div>
                
                <div className="bg-tertiary-600 rounded-sm p-4 shadow-sm">
                <Image
                                src="/betaicon.svg"
                                alt="betaicon"
                                width={35}
                                height={35}
                                
                    /> 
                    <h3 className='text-surfacelight-primary'>Beta</h3>
                    <h5 className='text-surfacelight-secondary'>Test & QA</h5>
                    <p className='text-surfacelight-tertiary pt-1'>The Test Phase is the process of testing the system to ensure that it meets the requirements and design parameters of the end user.</p>
                </div>

                <div className="bg-surfacelight-secondary dark:bg-surfacedark-primary rounded-sm p-4 shadow-sm">
                <Image
                                src="/launchicon.svg"
                                alt="launchicon"
                                width={35}
                                height={35}
                                
                    /> 
                    <h3 className='text-surfacedark-primary dark:text-surfacelight-primary'>Launch</h3>
                    <h5 className='text-surfacedark-secondary dark:text-surfacelight-secondary'>Optimize & Go live</h5>
                    <p className='text-surfacedark-tertiary dark:text-surfacelight-tertiary pt-1'>Once the testing process is complete, the overall design of the software will be finalized. Modules will incorporate into the main source code through the efforts of our developers, typically through utilization environment.</p>
                </div>

                
                <div className="inset-0 h-full w-full bg-bgshades-bluemagento bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] rounded-sm p-4 shadow-sm">
                
                <Image
                                src="/infinty.svg"
                                alt="launchicon"
                                width={234.32}
                                height={125}
                                
                    /> 
                    <h3 className='text-surfacelight-primary'>Next</h3>
                    <h1 className='text-surfacelight-secondary'>We do repeat</h1>
                    
                </div>
            
            </div>
        </section>    
        
    </main>        

  );
};


export default CardGrid;