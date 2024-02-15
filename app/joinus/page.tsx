import React from 'react'
import Breadcrumb from '@/components/Breadcrumb'
import Cta from '@/components/Cta'
import Joinushero from '@/components/Joinushero'
import Joinusbody from '@/components/Joinusbody'


export default function Joinus() {
  return (
    <main>
        <Joinushero/>
        <Breadcrumb/>
        <Joinusbody/>
        <Cta/>
    </main>
    )
  }  