import Casestudies from "@/components/Casestudies";
import Hero from "@/components/Hero";
import Ourprocess from "@/components/Ourprocess";
import Ourtechstack from "@/components/Ourtechstack";
import Someinteresting from "@/components/Someinteresting";
import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import Newsandupdates from "@/components/Newsandupdates";
import Cta from "@/components/Cta";
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin-ext'],
  weight: ['300','400'],
})

const myComponentStyle = {
  fontFamily: `${poppins}, sans-serif`, // Add sans-serif as a fallback
  // Other styles for your component
}

export default function Home() {
  return (
    <main className="bg-surfacelight-primary dark:bg-surfacedark-tertiary">
      <Hero/>
      <Ourprocess/>
      <Someinteresting/>
      <Casestudies/>
      <Ourtechstack/>
      <Industries/>
      <Testimonials/>
      <Newsandupdates/>
      <Cta/>

    </main>
  )
}
