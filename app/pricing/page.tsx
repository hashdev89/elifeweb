import Breadcrumb from "@/components/Breadcrumb";
import Cta from "@/components/Cta";
import Frequentlyquestions from "@/components/Frequentlyquestions";
import Getstartedyourplan from "@/components/Getstartedyourplan";
import Heropricing from "@/components/Heropricing";


export default function Pricing() {
    return (
      <main>
        <Heropricing/>
        <Breadcrumb/>
        <Getstartedyourplan/>
        <Frequentlyquestions/>
        <Cta/>
      </main>
    )
  }