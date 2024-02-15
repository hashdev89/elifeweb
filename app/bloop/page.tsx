import Bloophero from '@/components/Bloophero'
import Bloopproject from '@/components/Bloopproject'
import Breadcrumb from '@/components/Breadcrumb'
import Cta from '@/components/Cta'

import React from 'react'

export default function Bloop() {
  return (
    <main>
        <Bloophero/>
        {/* @ts-ignore */}
        <Breadcrumb project="Project"/>
        <Bloopproject/>
        <Cta/>
    </main>
    )
  }  