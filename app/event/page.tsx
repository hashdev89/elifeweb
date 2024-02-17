import Breadcrumb from '@/components/Breadcrumb'
import Cta from '@/components/Cta'
import Eventcheckproducthero from '@/components/Eventcheckproducthero'
import Eventcheckproject from '@/components/Eventcheckproject'
import React from 'react'

export default function Event() {
  return (
    <main>
        <Eventcheckproducthero/>
        {/* @ts-ignore */}
        <Breadcrumb project="Project"/>
        <Eventcheckproject/>
        <Cta/>
    </main>
    )
  }  