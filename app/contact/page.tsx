import Breadcrumb from "@/components/Breadcrumb";
import Contactbody from "@/components/Contactbody";
import Contacthero from "@/components/Contacthero";

import Cta from "@/components/Cta";
import Visitus from "@/components/Visitus";

export default function Contact() {
    return (
      <main>
        <Contacthero/>
        <Breadcrumb/>
        <Contactbody/>
        <Visitus/>
        <Cta/>
      </main>
    )
  }