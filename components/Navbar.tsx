"use client"
import  React, { useState}  from 'react'
import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import ThemeSwitch from "./Themeswitch"
import Button from './Button'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin-ext'],
  weight: ['300','400'],
})

const myComponentStyle = {
  fontFamily: `${poppins}, sans-serif`, // sans-serif as a fallback//
}


const Navbar = () => {
  const [navbar, setNavbar] = useState(true);

  return (
  <main className="bg-surfacelight-secondary dark:bg-surfacedark-primary fixed top-0 left-0 w-full z-30 shadow-sm">
    <nav className="flexBetween max-container padding-container relative z-30 py-2 px-2">
      <Link href="/">
        <Image className="dark" src="/eLife-logo-light.svg" alt ="logo" width={130} height={29}/>
      </Link>

      <ul className="hidden h-full gap-10 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-surfacedark-primary dark:text-surfacelight-primary flexCenter cursor-pointer transition-all hover:text-bgshades-bluemagento ">
          {link.label}
          </Link>
        ))}

       <Link href={"https://elifeamerica.com/get-support.html"}>
       <Button 
          type="button"
          title="Get Support"
          icon="/supportagent.svg"
          variant="btn_light"    
        /> 
      </Link>
      </ul>

      <div className="lg:flex hidden">
         <ThemeSwitch/>
      </div>
   
      <div className="sm:hidden cursor-pointer pl-24">
      <ul className="hidden h-full">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-surfacedark-primary dark:text-surfacelight-primary flexCenter cursor-pointer transition-all hover:text-bgshades-bluemagento ">
          {link.label}
          </Link>
        ))}
      
      </ul>
    
      </div>
          <button id="hamburger" className="text-primary-100 lg:hidden" onClick={() => setNavbar(!navbar)}>
      {navbar ? (
         <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-list " viewBox="0 0 16 16">
         <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
       </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-x-lg transition-all ease-in-out animate-fade" viewBox="0 0 16 16">
        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
      </svg>
       
      )}
    </button>
        </nav>
    
     {/*Mobile View Nav*/}
     <nav className={`absolute pt-2 text-center border-t-4 border-secondry-600 sm:hidden shadow-sm w-screen bg-surfacelight-secondary dark:bg-surfacedark-tertiary transition-all ease-in-out animate-flip-down ${navbar ? 'hidden' : ''}`}>
  <div className={`flex flex-col pt-2 pb-5 px-2 space-y-2 ${navbar ? 'hidden' : ''}`}>
    <Link href="/" onClick={() => setNavbar(!navbar)} className="text-lg font-medium text-surfacedark-primary dark:text-surfacelight-primary hover:text-primary-600 dark:hover:text-primary-600">Home</Link>
    <Link href="/about" onClick={() => setNavbar(!navbar)} className="text-lg font-medium text-surfacedark-primary dark:text-surfacelight-primary hover:text-primary-600 dark:hover:text-primary-600">About</Link>
    <Link href="/solutionsandservices" onClick={() => setNavbar(!navbar)} className="text-lg font-medium text-surfacedark-primary dark:text-surfacelight-primary hover:text-primary-600 dark:hover:text-primary-600">Solutions & Services</Link>
    <Link href="/ourprojects" onClick={() => setNavbar(!navbar)} className="text-lg font-medium text-surfacedark-primary dark:text-surfacelight-primary hover:text-primary-600 dark:hover:text-primary-600">Our Projects</Link>
    <Link href="/pricing" onClick={() => setNavbar(!navbar)} className="text-lg font-medium text-surfacedark-primary dark:text-surfacelight-primary hover:text-primary-600 dark:hover:text-primary-600">Pricing</Link>
    <Link href="/contact" onClick={() => setNavbar(!navbar)} className="text-lg font-medium text-surfacedark-primary dark:text-surfacelight-primary hover:text-primary-600 dark:hover:text-primary-600">Contact</Link>
    <Link href="/joinus" onClick={() => setNavbar(!navbar)} className="text-lg font-medium text-surfacedark-primary dark:text-surfacelight-primary hover:text-primary-600 dark:hover:text-primary-600">Join Us</Link>
  </div>
  <div className="px-2 pb-5 max-sm:justify-center">
    <div className="grid max-sm:grid-cols-1 gap-4">
      <div className='max-sm: justify-center inline-flex'>
        <Button
          type="button"
          title="Get Support"
          icon="/supportagent.svg"
          variant="btn_light"
          key="Get Support"
        />
      </div>
      <div className='max-sm: justify-center inline-flex'>
        <ThemeSwitch />
      </div>
    </div>
  </div>
</nav>

  </main>  
  )
}

export default Navbar