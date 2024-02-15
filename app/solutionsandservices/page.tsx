import Backup from '@/components/Backup'
import Breadcrumb from '@/components/Breadcrumb'
import Consulting from '@/components/Consulting'
import Cta from '@/components/Cta'
import Herosolution from '@/components/Herosolution'
import Insfrastructure from '@/components/Insfrastructure'
import Sequrityandnetwork from '@/components/Sequrity'
import Softwareappandwebsolutions from '@/components/Softwareappandwebsolutions'
import React from 'react'

export default function Solutionsandservices() {
    return (
      <main>
        <Herosolution/> 
        <Breadcrumb/>
        <Softwareappandwebsolutions/>
        <Sequrityandnetwork/>
        <Insfrastructure/>
        <Consulting/>
        <Backup/>
        <Cta/>
      </main>
    )
  }