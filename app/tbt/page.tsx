import Breadcrumb from '@/components/Breadcrumb'
import Cta from '@/components/Cta'
import MdProject from '@/components/MdProject'
import Tbthero from '@/components/Tbthero'
import Tbtproject from '@/components/Tbtproject'

import React from 'react'

export default function Tbt() {
  return (
    <main>
        <Tbthero/>
         {/* @ts-ignore */}
         <Breadcrumb project="Project"/>
        <Tbtproject/>
        <Cta/>
    </main>
  )
}