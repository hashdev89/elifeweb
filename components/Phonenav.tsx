import Link from "next/link";
import  React from "react"; 
import Button from "./Button";
import ThemeSwitch from "./Themeswitch";
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin-ext'],
  weight: ['300','400'],
})


//Mobile View Nav
function Phonenav ({}) {
  return (
    //Mobile View Nav
    <div className={'absolute border-t-4 border-secondry-600 sm:hidden shadow-sm w-screen bg-surfacelight-secondary dark:bg-surfacedark-tertiary transform ${open ? "-translate-y-0": "-translate-y-full"} transition-transform duration-300 ease-in-out filter'}>
            <div className="flex flex-col pt-2 pb-5 px-2 space-y-2 ">
            <Link href="/" className="text-lg font-medium text-surfacedark-primary dark:text-surfacelight-primary hover:text-primary-600 dark:hover:text-primary-600">Home</Link>
            <Link href="/about" className="text-lg font-medium text-surfacedark-primary dark:text-surfacelight-primary hover:text-primary-600 dark:hover:text-primary-600 ">About</Link>
            <Link href="/solutionsandservices" className="text-lg font-medium text-surfacedark-primary dark:text-surfacelight-primary hover:text-primary-600 dark:hover:text-primary-600">Solutions & Services</Link>
            <Link href="/ourprojects" className="text-lg font-medium text-surfacedark-primary dark:text-surfacelight-primary hover:text-primary-600 dark:hover:text-primary-600">Our Projects</Link>
            <Link href="/pricing" className="text-lg font-medium text-surfacedark-primary dark:text-surfacelight-primary hover:text-primary-600 dark:hover:text-primary-600">Pricing</Link>
            <Link href="/contact" className="text-lg font-medium text-surfacedark-primary dark:text-surfacelight-primary hover:text-primary-600 dark:hover:text-primary-600">Contact</Link>
            <Link href="/joinus" className="text-lg font-medium text-surfacedark-primary dark:text-surfacelight-primary hover:text-primary-600 dark:hover:text-primary-600">Join Us</Link>
            </div>
            <div className="px-2 pb-5 max-sm:justify-center">
           <div className="grid max-sm:grid-cols-1 gap-4">
          
          <div> <Button
          type="button"
          title="Get Support"
          icon="/supportagent.svg"
          variant="btn_light"
          key="Get Support"
        /> 
        </div>
        <div> 
       <ThemeSwitch/>
       </div>
        </div>
        </div>
    </div>
  )
}

export default Phonenav
