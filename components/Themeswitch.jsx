"use client"
import { useEffect , useState } from 'react'
import { FaMoon} from "react-icons/fa"
import { BsSunFill } from "react-icons/bs"



const ThemeSwitch = () => {
  const [darkmode , setDarkMode] = useState (true)

  useEffect (() => {
    const theme = localStorage.getItem ("theme")
    if (theme === "dark") setDarkMode (true)
}, [])

  useEffect(() => {
    if (darkmode) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem("theme", "light")
     
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem("theme", "dark")
    }
  }, [darkmode])

  return (
   <div className='relative w-8 flex items-center bg-secondry-500 cursor-pointer rounded-full p-1 '
   
   onClick={() => setDarkMode(!darkmode)}
   >
    <BsSunFill className="text-white" size={15}/>
    <div className='absolute bg-surfacelight-primary dark:bg-surfacedark-tertiary w-4 h-4 rounded-full shadow-md transition-all duration-900' style={ darkmode ? { left: "2px"} : { right: "2px" }
    
  }

    ></div>
    <FaMoon className="text-white ml-auto" size={15}
    />
   </div>
  )
}

export default ThemeSwitch