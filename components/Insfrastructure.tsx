import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const Insfrastructure = () => {
  return (
    <main className='container-fluid bg-white dark:bg-surfacedark-tertiary py-10 px-2'>
        <section className='max-container h-full'>
        <div className='grid lg:grid-cols-2 sm:grid-cols-2 gap-5 h-full pb-5'>
                <div className='flex-wrap space-y-2'>
                    <h1 className='text-surfacedark-primary dark:text-surfacelight-primary'>IT Infrastructure & Cable Management</h1>
                    <h3 className='text-surfacedark-secondary dark:text-surfacelight-secondary'>Top-tier Web and Mobile App Development Services of a high standard</h3>
                    <p className='text-surfacedark-tertiary dark:text-surfacelight-tertiary'>Modern data centers are characterized by their increasing complexity, with a multitude of connections interlinking a diverse array of devices, cards, and ports. All of these components are housed within physical racks and cabinets, consuming significant amounts of power. Given that data centers serve as the central nervous system for virtually every business, whether it's a compact small to mid-size enterprise data center or a sprawling, massive cloud, colocation (colo), or hyper-scale environment, data center managers require strategic solutions to address a range of critical challenges and optimize their operations.</p>
                </div>
                <div className='flex-wrap'>
                    <div className='float-right sm:item-center '>   <Image
                src="/infrastructure.png"
                alt="Infrastructure"
                width={321}
                height={441}
                /> </div>
             
                </div>    
        </div>

            <div className='grid lg:grid-cols-2 sm:grid-cols-1 grid-rows-1 gap-5 h-full '>     
                <div className='flex-wrap rounded-sm bg-surfacelight-primary dark:bg-surfacedark-primary p-10 space-y-2'>
                <div className="w-16 h-16 bg-secondry-100 rounded-full relative float-right blur-2xl"></div>
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#3783F5" className="bi bi-building relative inline-block m-1 " viewBox="0 0 16 16">
                    <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2m.5 4v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 1 0"/>
                    </svg>
                    </div>
                    <h4 className='text-surfacedark-primary dark:text-surfacelight-primary'>Maximizing Space and Capacity</h4>
                    <p className='text-surfacedark-secondary dark:text-surfacelight-secondary'>The contemporary data center landscape demands meticulous space and capacity management. With limited physical real estate, data center managers must employ innovative solutions to efficiently utilize available space and accommodate the ever-growing demand for computing resources. </p>
                </div>
               

                  <div className='flex-wrap rounded-sm bg-surfacelight-primary dark:bg-surfacedark-primary p-10 space-y-2'>
                <div className="w-16 h-16 bg-bgshades-bluemagento rounded-full relative float-right blur-2xl"></div>
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#3783F5" className="bi bi-building relative inline-block m-1 " viewBox="0 0 16 16">
                    <path d="M2 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h5.5v3A1.5 1.5 0 0 0 6 11.5H.5a.5.5 0 0 0 0 1H6A1.5 1.5 0 0 0 7.5 14h1a1.5 1.5 0 0 0 1.5-1.5h5.5a.5.5 0 0 0 0-1H10A1.5 1.5 0 0 0 8.5 10V7H14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm.5 3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1"/>
                    </svg>
                    </div>
                    <h4 className='text-surfacedark-primary dark:text-surfacelight-primary'>Asset Management</h4>
                    <p className='text-surfacedark-secondary dark:text-surfacelight-secondary'>Data centers house a vast inventory of valuable assets, from servers and networking equipment to storage devices and power distribution units. Effective asset management is crucial for tracking and maintaining these assets, ensuring they are utilized efficiently, and preventing underutilization or overprovisioning.</p>
                </div>
               
                <div className='flex-wrap rounded-sm bg-surfacelight-primary dark:bg-surfacedark-primary p-10 space-y-2'>
                <div className="w-16 h-16 bg-bgshades-blueshade rounded-full relative float-right blur-2xl"></div>
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#3783F5" className="bi bi-building relative inline-block m-1 " viewBox="0 0 16 16">
                    <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 0 0 .381-.404l.792-1.848Zm6.75.51a.186.186 0 0 0-.23.034L6.05 7.246a.188.188 0 0 0 .137.316h1.241l-.673 2.195a.188.188 0 0 0 .085.218c.075.043.17.03.23-.034l2.88-3.187a.188.188 0 0 0-.137-.316H8.572l.782-2.195a.188.188 0 0 0-.085-.218Z"/>
                    </svg>
                    </div>
                    <h4 className='text-surfacedark-primary dark:text-surfacelight-primary'>Energy Efficiency and Cost Reduction</h4>
                    <p className='text-surfacedark-secondary dark:text-surfacelight-secondary'>The power and cooling requirements of data centers can be substantial. In the face of rising energy costs and increasing environmental awareness, data center managers must prioritize energy efficiency to lower operational expenses and reduce their carbon footprint. Strategies such as server virtualization, hot/cold aisle containment, and advanced cooling systems are commonly deployed.</p>
                </div>

                <div className='flex-wrap rounded-sm bg-surfacelight-primary dark:bg-surfacedark-primary p-10 space-y-2'>
                <div className="w-16 h-16 bg-secondry-100 rounded-full relative float-right blur-2xl"></div>
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#3783F5" className="bi bi-building relative inline-block m-1 " viewBox="0 0 16 16">
                    <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07A7.001 7.001 0 0 0 8 16a7 7 0 0 0 5.29-11.584.531.531 0 0 0 .013-.012l.354-.354.353.354a.5.5 0 1 0 .707-.707l-1.414-1.415a.5.5 0 1 0-.707.707l.354.354-.354.354a.717.717 0 0 0-.012.012A6.973 6.973 0 0 0 9 2.071V1h.5a.5.5 0 0 0 0-1zm2 5.6V9a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1 0-1h3V5.6a.5.5 0 1 1 1 0"/>
                    </svg>
                    </div>
                    <h4 className='text-surfacedark-primary dark:text-surfacelight-primary'>Minimizing Downtime</h4>
                    <p className='text-surfacedark-secondary dark:text-surfacelight-secondary'>Data center downtime can have severe financial and reputational consequences. Ensuring high availability through redundancy, failover systems, and proactive maintenance is essential. Data center managers need to implement robust disaster recovery and business continuity plans to mitigate the impact of unexpected disruptions.</p>
                </div>

                <div className='flex-wrap rounded-sm bg-surfacelight-primary dark:bg-surfacedark-primary p-10 space-y-2'>
                <div className="w-16 h-16 bg-bgshades-bluemagento rounded-full relative float-right blur-2xl"></div>
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#3783F5" className="bi bi-building relative inline-block m-1 " viewBox="0 0 16 16">
                    <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1z"/>
                    </svg>
                    </div>
                    <h4 className='text-surfacedark-primary dark:text-surfacelight-primary'>Planning for Growth</h4>
                    <p className='text-surfacedark-secondary dark:text-surfacelight-secondary'>The dynamic nature of technology and business demands that data center managers possess the ability to forecast and plan for growth. Scalability is key, and data centers must be designed and managed in a way that allows for seamless expansion as the organization's needs evolve. Strategic planning involves assessing current and future requirements to avoid unexpected bottlenecks.</p>
                </div>

                <div className='flex-wrap rounded-sm bg-surfacelight-primary dark:bg-surfacedark-primary p-10 space-y-2'>
                <div className="w-16 h-16 bg-bgshades-blueshade rounded-full relative float-right blur-2xl"></div>
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#3783F5" className="bi bi-building relative inline-block m-1 " viewBox="0 0 16 16">
                    <path d="M0 5a5.002 5.002 0 0 0 4.027 4.905 6.46 6.46 0 0 1 .544-2.073C3.695 7.536 3.132 6.864 3 5.91h-.5v-.426h.466V5.05c0-.046 0-.093.004-.135H2.5v-.427h.511C3.236 3.24 4.213 2.5 5.681 2.5c.316 0 .59.031.819.085v.733a3.46 3.46 0 0 0-.815-.082c-.919 0-1.538.466-1.734 1.252h1.917v.427h-1.98c-.003.046-.003.097-.003.147v.422h1.983v.427H3.93c.118.602.468 1.03 1.005 1.229a6.5 6.5 0 0 1 4.97-3.113A5.002 5.002 0 0 0 0 5m16 5.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-7.75 1.322c.069.835.746 1.485 1.964 1.562V14h.54v-.62c1.259-.086 1.996-.74 1.996-1.69 0-.865-.563-1.31-1.57-1.54l-.426-.1V8.374c.54.06.884.347.966.745h.948c-.07-.804-.779-1.433-1.914-1.502V7h-.54v.629c-1.076.103-1.808.732-1.808 1.622 0 .787.544 1.288 1.45 1.493l.358.085v1.78c-.554-.08-.92-.376-1.003-.787zm1.96-1.895c-.532-.12-.82-.364-.82-.732 0-.41.311-.719.824-.809v1.54h-.005zm.622 1.044c.645.145.943.38.943.796 0 .474-.37.8-1.02.86v-1.674z"/>
                    </svg>
                    </div>
                    <h4 className='text-surfacedark-primary dark:text-surfacelight-primary'>Strategic Investment</h4>
                    <p className='text-surfacedark-secondary dark:text-surfacelight-secondary'>Data center managers must make informed investment decisions to support the organization's strategic objectives. This includes evaluating technologies such as cloud computing, edge computing, and hyper-converged infrastructure to determine how they fit into the overall data center strategy.</p>
                </div>    

                <div className='flex-wrap rounded-sm bg-surfacelight-primary dark:bg-surfacedark-primary p-10 space-y-2'>
                <div className="w-16 h-16 bg-bgshades-bluemagento rounded-full relative float-right blur-2xl"></div>
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#3783F5" className="bi bi-building relative inline-block m-1 " viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0m2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647z"/>
                    </svg>
                    </div>
                    <h4 className='text-surfacedark-primary dark:text-surfacelight-primary'>Compliance and Security</h4>
                    <p className='text-surfacedark-secondary dark:text-surfacelight-secondary'>The dynamic nature of technology and business demands that data center managers possess the ability to forecast and plan for growth. Scalability is key, and data centers must be designed and managed in a way that allows for seamless expansion as the organization's needs evolve. Strategic planning involves assessing current and future requirements to avoid unexpected bottlenecks.</p>
                </div>    

                <div className='flex-wrap rounded-sm bg-surfacelight-primary dark:bg-surfacedark-primary p-10 space-y-2'>
                <div className="w-16 h-16 bg-bgshades-bluemagento rounded-full relative float-right blur-2xl"></div>
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#3783F5" className="bi bi-building relative inline-block m-1 " viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5"/>
                    </svg>
                    </div>
                    <h4 className='text-surfacedark-primary dark:text-surfacelight-primary'>Planning for Growth</h4>
                    <p className='text-surfacedark-secondary dark:text-surfacelight-secondary'>Data centers house a vast inventory of valuable assets, from servers and networking equipment to storage devices and power distribution units. Effective asset management is crucial for tracking and maintaining these assets, ensuring they are utilized efficiently, and preventing underutilization or overprovisioning.</p>
                </div>    
            </div>
            <Link href="/contact">
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 gap-2 mt-5"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right relative inline-block mr-2" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                    </svg>Know More
                </button>
            </Link>        
        </section>
    </main>
  )
}

export default Insfrastructure