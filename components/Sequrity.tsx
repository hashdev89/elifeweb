import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const Sequrityandnetwork = () => {
  return (
    <main className='container-fluid bg-surfacelight-primary dark:bg-surfacedark-primary py-10 px-2'>
        <section className='max-container h-full'>
        <div className='grid lg:grid-cols-2 max-sm:grid-cols-1 gap-5 h-full'>
        <div className='flex-wrap'>
            <Image
            src="/security.png"
            alt="sequrity"
            width={395}
            height={541}
            />
        </div>
              
        <div className='flex-wrap space-y-2'>
                    <h1 className='text-surfacedark-primary dark:text-surfacelight-primary'>IT Security & Advanced Networks</h1>
                    <h3 className='text-surfacedark-secondary dark:text-surfacelight-secondary'>Represent the cutting edge of digital protection and connectivity in modern technological landscape.</h3>
                    <p className='text-surfacedark-tertiary dark:text-surfacelight-tertiary'>Our network security paradigm revolves around a rigorous identity verification process. Our framework dictates that access to applications and data is exclusively granted to authenticated and authorized users and devices. Simultaneously, it acts as a formidable shield, safeguarding both applications and users from the perils of advanced internet threats.</p>
         </div>         
        </div>

        <div className='grid grid-cols-3 grid-rows-1 lg:grid-cols-3 max-sm:grid-cols-1 gap-5 h-full pt-5'>
              <div className='flex-wrap rounded-sm bg-white dark:bg-surfacedark-secondary p-5 space-y-2 border-b-bgshades-bluemagento border-b-4 '>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#3783F5" className="bi bi-building relative inline-block m-1 " viewBox="0 0 16 16">
                <path d="M9.585 2.568a.5.5 0 0 1 .226.58L8.677 6.832h1.99a.5.5 0 0 1 .364.843l-5.334 5.667a.5.5 0 0 1-.842-.49L5.99 9.167H4a.5.5 0 0 1-.364-.843l5.333-5.667a.5.5 0 0 1 .616-.09z"/>
                <path d="M2 4h4.332l-.94 1H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2.38l-.308 1H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2"/>
                <path d="M2 6h2.45L2.908 7.639A1.5 1.5 0 0 0 3.313 10H2zm8.595-2-.308 1H12a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H9.276l-.942 1H12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"/>
                <path d="M12 10h-1.783l1.542-1.639c.097-.103.178-.218.241-.34zm0-3.354V6h-.646a1.5 1.5 0 0 1 .646.646M16 8a1.5 1.5 0 0 1-1.5 1.5v-3A1.5 1.5 0 0 1 16 8"/>
                </svg>
                </div>
                <h4 className='text-surfacedark-primary dark:text-surfacelight-primary'>99.9% Uptime</h4>
                <p className='text-surfacedark-primary dark:text-surfacelight-secondary'>Ensures network reliability with a 99.9% uptime service level agreement (SLA), guaranteeing that your critical business operations remain consistently available and uninterrupted.</p>
              </div>

              <div className='flex-wrap rounded-sm bg-white dark:bg-surfacedark-secondary p-10 space-y-2 border-b-bgshades-blueshade border-b-4 '>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#3783F5" className="bi bi-building relative inline-block m-1 " viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0m0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5"/>
                </svg>
                </div>
                <h4 className='text-surfacedark-primary dark:text-surfacelight-primary'>Firewall Protection</h4>
                <p className='text-surfacedark-primary dark:text-surfacelight-secondary'>Deploying robust firewall solutions to monitor and filter incoming and outgoing network traffic, blocking unauthorized access and malicious content.</p>
              </div>
              
              <div className='flex-wrap rounded-sm bg-white dark:bg-surfacedark-secondary p-10 space-y-2 border-b-secondry-100 border-b-4'>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#3783F5" className="bi bi-building relative inline-block m-1 " viewBox="0 0 16 16">
                <path d="M15.985 8.5H8.207l-5.5 5.5a8 8 0 0 0 13.277-5.5zM2 13.292A8 8 0 0 1 7.5.015v7.778l-5.5 5.5zM8.5.015V7.5h7.485A8.001 8.001 0 0 0 8.5.015z"/>
                </svg>
                </div>
                <h4 className='text-surfacedark-primary dark:text-surfacelight-primary'>Compliance Assessment & Advisory</h4>
                <p className='text-surfacedark-primary dark:text-surfacelight-secondary'>Our consulting offerings are designed to comprehensively address the complex and ever-evolving landscape of information security and cybersecurity challenges faced by many.</p>
              </div>

              <div className='flex-wrap rounded-sm bg-white dark:bg-surfacedark-secondary p-10 space-y-2 border-b-secondry-100 border-b-4 '>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#3783F5" className="bi bi-building relative inline-block m-1 " viewBox="0 0 16 16">
                <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1z"/>
                </svg>
                </div>
                <h4 className='text-surfacedark-primary dark:text-surfacelight-primary'>Monitoring & Management</h4>
                <p className='text-surfacedark-primary dark:text-surfacelight-secondary'>Continuous monitoring of network traffic and security events, with a dedicated team for incident detection and response.</p>
              </div>
              
              <div className='flex-wrap rounded-sm bg-white dark:bg-surfacedark-secondary p-10 space-y-2 border-b-bgshades-bluemagento border-b-4 '>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#3783F5" className="bi bi-building relative inline-block m-1" viewBox="0 0 16 16">
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                </svg>
                </div>
                <h4 className='text-surfacedark-primary dark:text-surfacelight-primary'>Incident Response and Forensics</h4>
                <p className='text-surfacedark-primary dark:text-surfacelight-secondary'>Providing incident response services to investigate security incidents and data breaches, as well as digital forensics expertise.</p>
              </div>
              
              <div className='flex-wrap rounded-sm bg-white dark:bg-surfacedark-secondary p-10 space-y-2 border-b-bgshades-blueshade border-b-4 '>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#3783F5" className="bi bi-building relative inline-block m-1 " viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="m4.736 1.968-.892 3.269-.014.058C2.113 5.568 1 6.006 1 6.5 1 7.328 4.134 8 8 8s7-.672 7-1.5c0-.494-1.113-.932-2.83-1.205a1.032 1.032 0 0 0-.014-.058l-.892-3.27c-.146-.533-.698-.849-1.239-.734C9.411 1.363 8.62 1.5 8 1.5c-.62 0-1.411-.136-2.025-.267-.541-.115-1.093.2-1.239.735m.015 3.867a.25.25 0 0 1 .274-.224c.9.092 1.91.143 2.975.143a29.58 29.58 0 0 0 2.975-.143.25.25 0 0 1 .05.498c-.918.093-1.944.145-3.025.145s-2.107-.052-3.025-.145a.25.25 0 0 1-.224-.274M3.5 10h2a.5.5 0 0 1 .5.5v1a1.5 1.5 0 0 1-3 0v-1a.5.5 0 0 1 .5-.5m-1.5.5c0-.175.03-.344.085-.5H2a.5.5 0 0 1 0-1h3.5a1.5 1.5 0 0 1 1.488 1.312 3.5 3.5 0 0 1 2.024 0A1.5 1.5 0 0 1 10.5 9H14a.5.5 0 0 1 0 1h-.085c.055.156.085.325.085.5v1a2.5 2.5 0 0 1-5 0v-.14l-.21-.07a2.5 2.5 0 0 0-1.58 0l-.21.07v.14a2.5 2.5 0 0 1-5 0v-1Zm8.5-.5h2a.5.5 0 0 1 .5.5v1a1.5 1.5 0 0 1-3 0v-1a.5.5 0 0 1 .5-.5"/>
                </svg>
                </div>
                <h4 className='text-surfacedark-primary dark:text-surfacelight-primary'>Security Awareness Training</h4>
                <p className='text-surfacedark-primary dark:text-surfacelight-secondary'>Offering employee training programs to educate staff about cybersecurity best practices, reducing the risk of human error.</p>
              </div>

              <div className='flex-wrap rounded-sm bg-white dark:bg-surfacedark-secondary p-10 space-y-2 border-b-bgshades-bluemagento border-b-4 '>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#3783F5" className="bi bi-building relative inline-block m-1 " viewBox="0 0 16 16">
                <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5"/>
                </svg>
                </div>
                <h4 className='text-surfacedark-primary dark:text-surfacelight-primary'>Ticketing System Support</h4>
                <p className='text-surfacedark-primary dark:text-surfacelight-secondary'>Our approach to cybersecurity involves swiftly and effectively resolving day-to-day issues through a customized, text-based ticketing system.</p>
              </div>

              <div className='flex-wrap rounded-sm bg-white dark:bg-surfacedark-secondary p-10 space-y-2 border-b-bgshades-blueshade border-b-4 '>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#3783F5" className="bi bi-building relative inline-block m-1 " viewBox="0 0 16 16">
                <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8"/>
                <path d="M9.653 5.496A2.986 2.986 0 0 0 8 5c-.61 0-1.179.183-1.653.496L4.694 2.992A5.972 5.972 0 0 1 8 2c1.222 0 2.358.365 3.306.992zm1.342 2.324a2.986 2.986 0 0 1-.884 2.312 3.01 3.01 0 0 1-.769.552l1.342 2.683c.57-.286 1.09-.66 1.538-1.103a5.986 5.986 0 0 0 1.767-4.624l-2.994.18Zm-5.679 5.548 1.342-2.684A3 3 0 0 1 5.005 7.82l-2.994-.18a6 6 0 0 0 3.306 5.728ZM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>
                </svg>
                </div>
                <h4 className='text-surfacedark-primary dark:text-surfacelight-primary'>Advanced Threat Intelligence</h4>
                <p className='text-surfacedark-primary dark:text-surfacelight-secondary'>Providing access to threat intelligence feeds and services to proactively identify and defend against emerging threats.</p>
              </div>

              <div className='flex-wrap rounded-sm bg-white dark:bg-surfacedark-secondary p-10 space-y-2 border-b-secondry-100 border-b-4 '>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#3783F5" className="bi bi-building relative inline-block m-1 " viewBox="0 0 16 16">
                <path d="M8 0a.5.5 0 0 1 .5.5v.518A7.001 7.001 0 0 1 14.982 7.5h.518a.5.5 0 0 1 0 1h-.518A7.001 7.001 0 0 1 8.5 14.982v.518a.5.5 0 0 1-1 0v-.518A7.001 7.001 0 0 1 1.018 8.5H.5a.5.5 0 0 1 0-1h.518A7.001 7.001 0 0 1 7.5 1.018V.5A.5.5 0 0 1 8 0m-.5 2.02A6.001 6.001 0 0 0 2.02 7.5h1.005A5.002 5.002 0 0 1 7.5 3.025zm1 1.005A5.002 5.002 0 0 1 12.975 7.5h1.005A6.001 6.001 0 0 0 8.5 2.02v1.005ZM12.975 8.5A5.002 5.002 0 0 1 8.5 12.975v1.005a6.002 6.002 0 0 0 5.48-5.48h-1.005ZM7.5 12.975A5.002 5.002 0 0 1 3.025 8.5H2.02a6.001 6.001 0 0 0 5.48 5.48v-1.005ZM10 8a2 2 0 1 0-4 0 2 2 0 0 0 4 0"/>
                </svg>
                </div>
                <h4 className='text-surfacedark-primary dark:text-surfacelight-primary'>Vulnerability Scanning and Assessment</h4>
                <p className='text-surfacedark-primary dark:text-surfacelight-secondary'>Identifying and remediating vulnerabilities in the network and applications to prevent exploitation by attackers.</p>
              </div>
        </div>
              <Link href="/contact">
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 gap-2 mt-5"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right relative inline-block mr-2" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                    </svg>Know More
                </button>
              </Link>

        </section>
    </main>    
  )
}

export default Sequrityandnetwork