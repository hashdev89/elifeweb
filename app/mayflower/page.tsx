import Breadcrumb from '@/components/Breadcrumb'
import Cta from '@/components/Cta'
import Mayflowerhero from '@/components/Mayflowerhero'
import Mayflowerproject from '@/components/Mayflowerproject'

import React from 'react'

export default function Mayflower() {
  return (
    <main>
        <Mayflowerhero/>
         {/* @ts-ignore */}
         <Breadcrumb project="Project"/>
        <Mayflowerproject/>
        <Cta/>
    </main>
    )
  }  