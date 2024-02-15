import Breadcrumb from '@/components/Breadcrumb'
import Cta from '@/components/Cta'
import MdProject from '@/components/MdProject'
import Mdproducthero from '@/components/Mdproducthero'

import React from 'react'

export default function Mdonline() {
  return (
    <main>
        <Mdproducthero/>
        {/* @ts-ignore */}
        <Breadcrumb project="Project"/>
        <MdProject/>
        <Cta/>
    </main>
  )
}