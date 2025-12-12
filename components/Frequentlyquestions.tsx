import React from 'react'

const Frequentlyquestions = () => {
  return (
    <main className='container-fluid bg-surfacelight-primary dark:bg-surfacedark-primary py-10 px-2'>
        <section className='max-container space-y-2'>
            
        <div className='flex-wrap '>
        <h1 className='text-surfacedark-primary dark:text-surfacelight-primary'>Frequently Asked Questions</h1>
        <h3 className='text-surfacedark-secondary dark:text-surfacelight-secondary'>It’s ok to have Questions !</h3>
        </div>

        <div className='flex-wrap pt-2'>
            <h6 className='text-surfacedark-secondary dark:text-surfacelight-secondary'>Are there any free or trial plans available?</h6>
            <p className='text-surfacedark-tertiary dark:text-surfacelight-tertiary'>Yes you can have a free beta version of a software or web development product is often made available to users for testing and feedback before the official release. Beta versions are pre-release versions of the product that are not fully polished or bug-free, but they allow users to get an early look at the software and provide valuable feedback to the developers. </p>
        </div>
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-sm text-sm px-2 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 gap-2 mt-5">
        Create a Exclusive Beta App for Free
        </button>

        
        <div className='flex-wrap'>
            <h6 className='text-surfacedark-secondary dark:text-surfacelight-secondary'>Can I change my plan later?</h6>
            <p className='text-surfacedark-tertiary dark:text-surfacelight-tertiary'>Yes you can upgrade your plan to a higher-tier or more feature-rich plan is a common option offered by most service providers. This allows you to access additional features, increased resources, or expanded capabilities as your needs grow.</p>
        </div>

           
        <div className='flex-wrap'>
            <h6 className='text-surfacedark-secondary dark:text-surfacelight-secondary'>What payment methods do you accept?</h6>
            <p className='text-surfacedark-tertiary dark:text-surfacelight-tertiary'>Credit cards like Visa, MasterCard, American Express, and Discover, as well as debit cards with major card network logos, are commonly accepted. PayPal, via bank transfer</p>
        </div>

        <div className='flex-wrap'>
            <h6 className='text-surfacedark-secondary dark:text-surfacelight-secondary'>Can I customize my plan with add-ons or extra features?</h6>
            <p className='text-surfacedark-tertiary dark:text-surfacelight-tertiary'>The ability to customize your plan with add-ons can provide flexibility, as it allows you to pay only for the features or resources you actually need, rather than upgrading to a higher-priced plan.</p>
        
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-sm text-sm px-2 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 gap-2 mt-2">
            Contact a consultant
        </button>

        </div>

        <div className='flex-wrap'>
            <h6 className='text-surfacedark-secondary dark:text-surfacelight-secondary'>Do you offer customer support or technical assistance for all plans?</h6>
            <p className='text-surfacedark-tertiary dark:text-surfacelight-tertiary'>Providers may differentiate the level of customer support and technical assistance based on the plan you choose. Higher-tier or premium plans often come with priority or 24/7 support, while lower-tier plans might have limited or slower support response times.</p>
        </div>

        </section>

        
    </main>
  )
}

export default Frequentlyquestions