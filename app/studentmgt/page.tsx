import Bloophero from '@/components/Bloophero'
import Bloopproject from '@/components/Bloopproject'
import Breadcrumb from '@/components/Breadcrumb'
import Cta from '@/components/Cta'
import Studentmgthero from '@/components/Studentmgthero'
import Studentmgtproject from '@/components/Studentmgtproject'

import React from 'react'

export default function Studentmgt() {
  return (
    <main>
        <Studentmgthero/>
        <Breadcrumb/>
        <Studentmgtproject/>
        <Cta/>
    </main>
    )
  }  