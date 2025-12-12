import React from 'react'
import Breadcrumb from '@/components/Breadcrumb'
import Careheroproducthero from '@/components/Careheroproducthero'
import Careheroproject from '@/components/Careheroproject'
import Cta from '@/components/Cta'

export default function Carehero() {
  return (
    <main>
        <Careheroproducthero/>
        {/* @ts-ignore */}
        <Breadcrumb project="Project"/>
        <Careheroproject/>
        <Cta/>
    </main>
  )
}