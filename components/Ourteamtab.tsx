"use client";
import React from 'react'


import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

const Ourteamtab = () => {

  const data = [
    {
      label: "Development",
      value: "development",
      member: [
    {
      name:"Janith Champika",
      desc:"DIRECTOR",
      image:"../janithchampika.svg",
    },
    {
      name:"Shashika Pradeep",
      desc:"FULL STACK ARCHITECT",
      image:"../shashika.svg",
    },
    {
      name:"Chathuranga",
      desc:"FULL STACK ENGINEER",
      image:"../chathuranga.svg",
    },
    {
      name:"Sameera Herath",
      desc:"FULL STACK ENGINEER",
      image:"../sameera.svg",
    },
    {
      name:"Michael Nguyen",
      desc:"FULL STACK ENGINEER",
      image:"../michaelnguyen.svg",
    },
    {
      name:"Erick Mittel",
      desc:"FULL STACK ENGINEER",
      image:"../erickmittel.svg",
    },
 
 
 
    
  ]

 },
    {
      label: "Admin",
      value: "systemadmin",
      member: [
        {
          name:"Tom Luu",
          desc:"CIO",
          image:"../tomlee.svg",
        },
        {
          name:"Mark Brook",
          desc:"SYSTEM ADMINISTRATOR",
          image:"../markbrook.svg",
        },
        {
          name:"Devin Hettiarachchi",
          desc:"SYSTEM ADMINISTRATOR",
          image:"../devin.svg",
        },
      ]
    },
    {
      label: "UI/UX",
      value: "uiux",
      member: [
        {
          name:"Steven Jaber",
          desc:"UI/UX ENGINEER",
          image:"../stevenjaber.svg",
        },
        {
          name:"Hashantha Bandara",
          desc:"UI/UX ENGINEER",
          image:"../hashantha.svg",
        },
        {
          name:"Ragavarman",
          desc:"UI/UX ENGINEER",
          image:"../ragavarman.svg",
        },
      ]
    },
    {
      label: "Database",
      value: "databasemanagment",
      member: [
        {
          name:"Janith Champika",
          desc:"DIRECTOR",
          image:"../janithchampika.svg",
        },
        {
          name:"Sameera Herath",
          desc:"FULL STACK ENGINEER",
          image:"../sameera.svg",
        },
      ]
    },
    {
      label: "Project",
      value: "projectmanagment",
      member: [
        {
          name:"Veronia Cabraja",
          desc:"PROJECT MANAGER",
          image:"../veronia.svg",
        },
        {
          name:"Udula Dissanayaka",
          desc:"PROJECT MANAGER",
          image:"../udula.svg",
        },
      ]
    },
    {
      label: "Business",
      value: "businessanalyst",
      member: [
        {
          name:"Janith Champika",
          desc:"DIRECTOR",
          image:"../janithchampika.svg",
        },
        {
          name:"Anuththara",
          desc:"SOFTWARE T.WRITER",
          image:"../anuththara.svg",
        },
        {
          name:"Michael Goodman",
          desc:"BUSINESS ANALYST",
          image:"../michaelgoodman.svg",
        },
      ]
    },
    {
      label: "Sales",
      value: "sales&marketing",
      member: [
        {
          name:"Anuththara",
          desc:"SOFTWARE T.WRITER",
          image:"../anuththara.svg",
        },
      ]
    },
    {
      label: "IT Support",
      value: "itsupport",
      member: [
        {
          name:"Ayomal Herath",
          desc:"SYSTEM SUPPORT",
          image:"../ayomal.svg",
        },
        {
          name:"Yasindu Widusara",
          desc:"SYSTEM SUPPORT",
          image:"../yasindu.svg",
        },
      ]
    },
    {
      label: "General",
      value: "general",
      member: [
        {
          name:"Saroj Roshan",
          desc:"HR MANAGER",
          image:"../saroj.svg",
        },
      ]
    },


  ];
  
  return (
    <main className='container-fluid flex-nowrap pt-5'>
        <section className='max-container flex-wrap'>
        <Tabs value="development" className="w-full text-surfacedark-primary dark:text-surfacelight-primary">
      <TabsHeader
        className="bg-transparent"
        indicatorProps={{
          className: "bg-gray-600/10 shadow-none text-gray-600 ",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab key={value} value={value}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, member }) => (
          <TabPanel key={value} value={value}>
            <div className='grid grid-cols-1 lg:grid-cols-6 max-sm:grid-cols-2 gap-5'>
              {member.map((item) => (
                
                 <div className='flex-warp text-center space-y-2 text-surfacedark-primary dark:text-surfacelight-primary hover:text-tertiary-100 transition-all ease-in-out'>
                 <div className='rounded-t-md bg-gray-100'>    
                 <img src={item.image} className="mx-auto w-10/12 grayscale hover:grayscale-0 transition-all ease-in-out duration-1500"/>
                 </div>
                 <h6>{item.name}</h6>
                 <span className='text-gray-300 capitalize'>{item.desc}</span>
                 </div>
                
              ) )}
            </div>  

          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
        </section>
    </main>
  )
}

export default Ourteamtab
