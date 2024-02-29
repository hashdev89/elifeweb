import Image from 'next/image'
import React from 'react'

const Servicebrakdown = () => {
    return (
        <main className="container-fluid bg-surfacelight-primary dark:bg-surfacedark-tertiary py-10 h-full px-2">
            <section className='max-container h-full flex-wrap pb-10' data-aos="fade">
                <h1 className='text-surfacedark-primary dark:text-surfacelight-primary'>Services Breakdown </h1>
                <h3 className='text-surfacedark-secondary dark:text-surfacelight-secondary'>You can see the service areas </h3>

                <div className="grid lg:grid-cols-4 max-sm:grid-cols-1 grid-rows-1 grid-flow-start gap-4 pt-5" id="pricing-header" data-aos="fade-up">


                    <div className='flex-wrap rounded-sm bg-surfacelight-secondary dark:bg-surfacedark-primary p-10 space-y-2 h-full hover:shadow-md'>
                        <div className="w-16 h-16 bg-secondry-500 hover:bg-primary-100 rounded-full relative float-left blur-2xl"></div>
                        <div className='float-right'>
                            <Image
                                src="/consultant.svg"
                                alt="consult"
                                width={85}
                                height={180}
                            />
                        </div>
                        <h6 className='text-surfacedark-primary dark:text-surfacelight-primary'>CONSULTING</h6>
                        <p className='text-surfacedark-secondary dark:text-surfacelight-secondary pt-5 font-bold'>
                            IDEA
                        </p>
                        <span className='text-surfacedark-secondary dark:text-surfacelight-secondary font-semibold'>
                            Pre Revenue
                        </span>
                        <ul className='list-none text-surfacedark-secondary dark:text-surfacelight-secondary text-sm space-y-2'>
                            <li>Product & Service Assessments</li>
                            <li>Product Scope & Goals</li>
                            <li>Market Share Analysis</li>
                        </ul>

                        <p className='text-surfacedark-secondary dark:text-surfacelight-secondary pt-2 font-bold'>
                            TEAM
                        </p>
                        <span className='text-surfacedark-secondary dark:text-surfacelight-secondary font-semibold'>
                            Post Revenue
                        </span>
                        <ul className='list-none text-surfacedark-secondary dark:text-surfacelight-secondary text-sm space-y-2'>
                            <li>Process Challenge</li>
                            <li>Tech Challenge</li>
                            <li>Transparency Challenge</li>
                        </ul>

                        <p className='text-surfacedark-secondary dark:text-surfacelight-secondary pt-2 font-bold'>
                            FINANCE
                        </p>
                        <span className='text-surfacedark-secondary dark:text-surfacelight-secondary font-bold'>
                            Scaling
                        </span>
                        <ul className='list-none text-surfacedark-secondary dark:text-surfacelight-secondary text-sm space-y-2'>
                            <li>Tech Bottlenecks</li>
                            <li>Customer Success</li>
                            <li>Sales KPIs</li>

                        </ul>

                        <p className='text-surfacedark-secondary dark:text-surfacelight-secondary pt-2 font-bold'>
                            GROWTH
                        </p>
                        <span className='text-surfacedark-secondary dark:text-surfacelight-secondary font-bold'>
                            Expansion
                        </span>
                        <ul className='list-none text-surfacedark-secondary dark:text-surfacelight-secondary text-sm space-y-2'>
                            <li>Benchmarking Development</li>
                            <li>Process Maturation</li>
                            <li>Tech Runways</li>

                        </ul>
                        <div className='rounded-full w-32 h-32 bg-surfacelight-primary dark:bg-surfacedark-secondary text-center border-4 border-secondry-500 content-center'>
                            <p className='text-surfacedark-primary dark:text-surfacelight-primary font-semibold pt-4'>Fundling</p>
                            <h4 className='text-surfacedark-secondary dark:text-surfacelight-secondary'>$500K</h4>
                        </div>
                    </div>


                    <div className='flex-wrap rounded-sm bg-surfacelight-secondary dark:bg-surfacedark-primary p-10 space-y-2 h-full hover:shadow-md'>
                        <div className="w-16 h-16 bg-secondry-500 rounded-full relative float-left blur-2xl"></div>
                        <div className='float-right'>
                            <Image
                                src="/devlopment.svg"
                                alt="consult"
                                width={85}
                                height={180}
                            />
                        </div>
                        <h6 className='text-surfacedark-primary dark:text-surfacelight-primary'>Development</h6>
                        <p className='text-surfacedark-secondary dark:text-surfacelight-secondary pt-5 font-bold'>
                            IDEA
                        </p>
                        <span className='text-surfacedark-secondary dark:text-surfacelight-secondary font-semibold'>
                            Pre Revenue
                        </span>
                        <ul className='list-none text-surfacedark-secondary dark:text-surfacelight-secondary text-sm space-y-2'>
                            <li>MVP / Prototype</li>
                            <li><br /></li>
                            <li><br /></li>
                        </ul>

                        <p className='text-surfacedark-secondary dark:text-surfacelight-secondary pt-2 font-bold'>
                            TEAM
                        </p>
                        <span className='text-surfacedark-secondary dark:text-surfacelight-secondary font-semibold'>
                            Post Revenue
                        </span>
                        <ul className='list-none text-surfacedark-secondary dark:text-surfacelight-secondary text-sm space-y-2'>
                            <li>Staffed Dev Maintanance</li>
                            <li><br /></li>
                            <li><br /></li>
                        </ul>

                        <p className='text-surfacedark-secondary dark:text-surfacelight-secondary pt-2 font-bold'>
                            FINANCE
                        </p>
                        <span className='text-surfacedark-secondary dark:text-surfacelight-secondary font-bold'>
                            Scaling
                        </span>
                        <ul className='list-none text-surfacedark-secondary dark:text-surfacelight-secondary text-sm space-y-2'>
                            <li>Staffed Dev Right-Sized Dev Cycle</li>
                            <li><br /></li>
                            <li><br /></li>

                        </ul>

                        <p className='text-surfacedark-secondary dark:text-surfacelight-secondary pt-2 font-bold'>
                            GROWTH
                        </p>
                        <span className='text-surfacedark-secondary dark:text-surfacelight-secondary font-bold'>
                            Expansion
                        </span>
                        <ul className='list-none text-surfacedark-secondary dark:text-surfacelight-secondary text-sm space-y-2'>
                            <li>Staffed Dev Productivity, Values, Quality</li>
                            <li><br /></li>


                        </ul>
                        <div className='rounded-full w-32 h-32 bg-surfacelight-primary dark:bg-surfacedark-secondary text-center border-4 border-secondry-500 content-center'>
                            <p className='text-surfacedark-primary dark:text-surfacelight-primary font-semibold pt-4'>Fundling</p>
                            <h4 className='text-surfacedark-secondary dark:text-surfacelight-secondary'>$1.5M</h4>
                        </div>
                    </div>

                    <div className='flex-wrap rounded-sm bg-surfacelight-secondary dark:bg-surfacedark-primary p-10 space-y-2 h-full hover:shadow-md'>
                        <div className="w-16 h-16 bg-secondry-500 rounded-full relative float-left blur-2xl"></div>
                        <div className='float-right'>
                            <Image
                                src="/consulting2.svg"
                                alt="consult"
                                width={85}
                                height={180}
                            />
                        </div>
                        <h6 className='text-surfacedark-primary dark:text-surfacelight-primary'>CONSULTING</h6>
                        <p className='text-surfacedark-secondary dark:text-surfacelight-secondary pt-5 font-bold'>
                            IDEA
                        </p>
                        <span className='text-surfacedark-secondary dark:text-surfacelight-secondary font-semibold'>
                            Pre Revenue
                        </span>
                        <ul className='list-none text-surfacedark-secondary dark:text-surfacelight-secondary text-sm space-y-2'>
                            <li>CTO / Dev Team -Agile</li>
                            <li><br /></li>
                            <li><br /></li>
                        </ul>

                        <p className='text-surfacedark-secondary dark:text-surfacelight-secondary pt-2 font-bold'>
                            TEAM
                        </p>
                        <span className='text-surfacedark-secondary dark:text-surfacelight-secondary font-semibold'>
                            Post Revenue
                        </span>
                        <ul className='list-none text-surfacedark-secondary dark:text-surfacelight-secondary text-sm space-y-2'>
                            <li>CTO / Dev Team -Agile</li>
                            <li><br /></li>
                            <li><br /></li>
                        </ul>

                        <p className='text-surfacedark-secondary dark:text-surfacelight-secondary pt-2 font-bold'>
                            FINANCE
                        </p>
                        <span className='text-surfacedark-secondary dark:text-surfacelight-secondary font-bold'>
                            Scaling
                        </span>
                        <ul className='list-none text-surfacedark-secondary dark:text-surfacelight-secondary text-sm space-y-2'>
                            <li>CTO / Dev Team -Agile</li>
                            <li><br /></li>
                            <li><br /></li>

                        </ul>

                        <p className='text-surfacedark-secondary dark:text-surfacelight-secondary pt-2 font-bold'>
                            GROWTH
                        </p>
                        <span className='text-surfacedark-secondary dark:text-surfacelight-secondary font-bold'>
                            Expansion
                        </span>
                        <ul className='list-none text-surfacedark-secondary dark:text-surfacelight-secondary text-sm space-y-2'>
                            <li>CTO / Dev Team -Agile</li>
                            <li><br /></li>
                            <li><br /></li>

                        </ul>
                        <div className='rounded-full w-32 h-32 bg-surfacelight-primary dark:bg-surfacedark-secondary text-center border-4 border-secondry-500 content-center'>
                            <p className='text-surfacedark-primary dark:text-surfacelight-primary font-semibold pt-4'>Fundling</p>
                            <h4 className='text-surfacedark-secondary dark:text-surfacelight-secondary'>$5M</h4>
                        </div>
                    </div>

                    <div className='flex-wrap rounded-sm bg-surfacelight-secondary dark:bg-surfacedark-primary p-10 space-y-2 h-full hover:shadow-md'>
                        <div className="w-16 h-16 bg-secondry-500 rounded-full relative float-left blur-2xl"></div>
                        <div className='float-right'>
                            <Image
                                src="/managedsoultions.svg"
                                alt="consult"
                                width={85}
                                height={180}
                            />
                        </div>
                        <h6 className='text-surfacedark-primary dark:text-surfacelight-primary'>INTEGRATED..</h6>
                        <p className='text-surfacedark-secondary dark:text-surfacelight-secondary pt-5 font-bold'>
                            IDEA
                        </p>
                        <span className='text-surfacedark-secondary dark:text-surfacelight-secondary font-semibold'>
                            Pre Revenue
                        </span>
                        <ul className='list-none text-surfacedark-secondary dark:text-surfacelight-secondary text-sm space-y-2'>
                            <li>Infrastructure</li>
                            <li>PM & Time Tracking</li>
                            <li><br /></li>
                        </ul>

                        <p className='text-surfacedark-secondary dark:text-surfacelight-secondary pt-2 font-bold'>
                            TEAM
                        </p>
                        <span className='text-surfacedark-secondary dark:text-surfacelight-secondary font-semibold'>
                            Post Revenue
                        </span>
                        <ul className='list-none text-surfacedark-secondary dark:text-surfacelight-secondary text-sm space-y-2'>
                            <li>Infrastructure</li>
                            <li>PM & Time Tracking</li>
                            <li><br /></li>
                        </ul>

                        <p className='text-surfacedark-secondary dark:text-surfacelight-secondary pt-2 font-bold'>
                            FINANCE
                        </p>
                        <span className='text-surfacedark-secondary dark:text-surfacelight-secondary font-bold'>
                            Scaling
                        </span>
                        <ul className='list-none text-surfacedark-secondary dark:text-surfacelight-secondary text-sm space-y-2'>
                            <li>Infrastructure</li>
                            <li>PM & Time Tracking</li>
                            <li>Customer Engagement</li>

                        </ul>

                        <p className='text-surfacedark-secondary dark:text-surfacelight-secondary pt-2 font-bold'>
                            GROWTH
                        </p>
                        <span className='text-surfacedark-secondary dark:text-surfacelight-secondary font-bold'>
                            Expansion
                        </span>
                        <ul className='list-none text-surfacedark-secondary dark:text-surfacelight-secondary text-sm space-y-2'>
                            <li>Infrastructure</li>
                            <li>Analytics</li>
                            <li><br /></li>

                        </ul>
                        <div className='rounded-full w-32 h-32 bg-surfacelight-primary dark:bg-surfacedark-secondary text-center border-4 border-secondry-500 content-center'>
                            <p className='text-surfacedark-primary dark:text-surfacelight-primary font-semibold pt-4'>Fundling</p>
                            <h4 className='text-surfacedark-secondary dark:text-surfacelight-secondary'>$5M</h4>
                        </div>
                    </div>


                </div>
            </section>
        </main>
    )
}

export default Servicebrakdown