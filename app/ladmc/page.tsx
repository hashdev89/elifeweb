import Breadcrumb from '@/components/Breadcrumb'
import Cta from '@/components/Cta'
import Ladmchero from '@/components/Ladmchero'
import Ladmcproject from '@/components/Ladmcproject'

import React from 'react'

export default function Ladmc() {
  return (
    <main>
        <Ladmchero/>
         {/* @ts-ignore */}
         <Breadcrumb project="Project"/>
        <Ladmcproject/>
        <Cta/>
    </main>
  )
}