import React from 'react'
import 'flowbite';
import Image from "next/image"

const SwiperComponent = () => {
  return (
   

<main className="relative w-full" >
    
    <section className="relative h-full overflow-hidden rounded-lg">
       
        <div className="h-full" data-carousel-item="active">
            <div className="grid grid-cols-3 max-sm:grid-cols-1 grid-rows-1 px-2 gap-2">
                
            <div className='flex-wrap py-15 p-5 bg-white dark:bg-surfacedark-secondary rounded-md '>
                   
               <h4 className='text-surfacedark-primary dark:text-surfacelight-primary'>“ eLife America offered us a phenomenal software solution that surpasses our highest expectations. “</h4>
                    <div className='pt-5'>
                           <Image
                        src="/ladmc.png"
                        alt="logo"
                        width={250}
                        height={44}
                        />
                      <h6 className='py-2 text-surfacedark-primary dark:text-surfacelight-primary'>Project</h6> 
                      <p className='text-surfacedark-secondary dark:text-surfacelight-secondary'>A medical platform software, often referred to as a healthcare platform or healthcare software, is a technology solution designed to streamline and enhance various aspects of healthcare delivery, management, and patient engagement.</p> 
                      <h6 className='py-2 text-surfacedark-primary dark:text-surfacelight-primary'>Country</h6>   
                      <Image
                        src="/USA.png"
                        alt="logo"
                        width={80}
                        height={26}
                        />
                    </div>
                
                  
              </div>

                <div className='flex-wrap py-15 p-5 bg-surfacelight-secondary dark:bg-surfacedark-tertiary rounded-md'>
                   
                <h4 className='text-surfacedark-primary dark:text-surfacelight-primary'>“ eLife America offered us a phenomenal software solution that surpasses our highest expectations. “</h4>
                    <div className='pt-5'>
                           <Image
                        src="/ladmc.png"
                        alt="logo"
                        width={250}
                        height={44}
                        />
                      <h6 className='py-2 text-surfacedark-primary dark:text-surfacelight-primary'>Project</h6> 
                      <p className='text-surfacedark-secondary dark:text-surfacelight-secondary'>A medical platform software, often referred to as a healthcare platform or healthcare software, is a technology solution designed to streamline and enhance various aspects of healthcare delivery, management, and patient engagement.</p> 
                      <h6 className='py-2 text-surfacedark-primary dark:text-surfacelight-primary'>Country</h6>   
                      <Image
                        src="/USA.png"
                        alt="logo"
                        width={80}
                        height={26}
                        />
                    </div>
                   
                </div>

                <div className='flex-wrap py-15 p-5 bg-white dark:bg-surfacedark-secondary rounded-md '>
                   
                   <h4 className='text-surfacedark-primary dark:text-surfacelight-primary'>“ eLife America offered us a phenomenal software solution that surpasses our highest expectations. “</h4>
                        <div className='pt-5'>
                               <Image
                            src="/ladmc.png"
                            alt="logo"
                            width={250}
                            height={44}
                            />
                          <h6 className='py-2 text-surfacedark-primary dark:text-surfacelight-primary'>Project</h6> 
                          <p className='text-surfacedark-secondary dark:text-surfacelight-secondary'>A medical platform software, often referred to as a healthcare platform or healthcare software, is a technology solution designed to streamline and enhance various aspects of healthcare delivery, management, and patient engagement.</p> 
                          <h6 className='py-2 text-surfacedark-primary dark:text-surfacelight-primary'>Country</h6>   
                          <Image
                            src="/USA.png"
                            alt="logo"
                            width={80}
                            height={26}
                            />
                        </div>
                    
                      
                  </div>
                
            </div>
        </div>
       
        
    </section>


    
</main>

  );
};

export default SwiperComponent;