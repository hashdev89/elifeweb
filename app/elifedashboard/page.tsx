import React from 'react'
import Breadcrumb from '@/components/Breadcrumb'
import Cta from '@/components/Cta'
import Dashboardhero from '@/components/Dashboardhero'
import Dashboardproject from '@/components/Dashboardproject'

export default function Carehero() {
  return (
    <main>
        <Dashboardhero/>
        {/* @ts-ignore */}
        <Breadcrumb project="Project"/>
        <Dashboardproject/>
        <Cta/>
    </main>
  )
}