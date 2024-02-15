import React from 'react'
import Aboutherosection from "@/components/Aboutherosection";
import Breadcrumb from "@/components/Breadcrumb";
import Cta from "@/components/Cta";
import Globalexpantion from "@/components/Globalexpantion";
import Meetourteam from "@/components/Meetourteam";
import Ourclients from "@/components/Ourclients";
import Ourexpertise from "@/components/Ourexpertise";
import Ournetwork from "@/components/Ournetwork";


export default function About() {
  return (
    <main>
    <Aboutherosection/>
    <Breadcrumb/>
    <Ourexpertise/>
    <Globalexpantion/>
    <Meetourteam/>
    <Ournetwork/>
    <Ourclients/>
    <Cta/>
    </main>
  )
}