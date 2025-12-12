import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin-ext'],
  weight: ['300','400'],
})

const myComponentStyle = {
  fontFamily: `${poppins}, sans-serif`, // Add sans-serif as a fallback
  // Other styles for your component
}

export const metadata: Metadata = {
  title: 'eLife America',
  description: 'Powerd by Meditech Data International',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      
      <body>
        <div className='pb-10'>
        <Navbar/>
        </div>
        <main style={poppins.style}>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
