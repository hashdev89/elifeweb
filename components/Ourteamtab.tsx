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
      image:"../team/Janith.jpg",
    },
    {
      name:"Shashika Pradeep",
      desc:"FULL STACK ARCHITECT",
      image:"../team/Shashika.jpg",
    },
    {
      name:"Chathuranga",
      desc:"FULL STACK ENGINEER",
      image:"../team/Chathuranga.jpg",
    },
    {
      name:"Sameera Herath",
      desc:"FULL STACK ENGINEER",
      image:"../team/Sameera.jpg",
    },
    {
      name:"Michael Nguyen",
      desc:"FULL STACK ENGINEER",
      image:"../team/Michael.jpg",
    },
    {
      name:"Erick Mittel",
      desc:"FULL STACK ENGINEER",
      image:"../team/Erick.jpg",
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
          image:"../team/Tom.jpg",
        },
        {
          name:"Mark Brook",
          desc:"SYSTEM ADMINISTRATOR",
          image:"../team/Mark.jpg",
        },
        {
          name:"Devin Hettiarachchi",
          desc:"SYSTEM ADMINISTRATOR",
          image:"../team/Devin.jpg",
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
          image:"../team/Steven.jpg",
        },
        {
          name:"Hashantha Bandara",
          desc:"UI/UX ENGINEER",
          image:"../team/Hashantha.jpg",
        },
        {
          name:"Ragavarman",
          desc:"UI/UX ENGINEER",
          image:"../team/Ragav.jpg",
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
          image:"../team/Janith.jpg",
        },
        {
          name:"Sameera Herath",
          desc:"FULL STACK ENGINEER",
          image:"../team/Sameera.jpg",
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
          image:"../team/Veronia.jpg",
        },
        {
          name:"Udula Dissanayaka",
          desc:"PROJECT MANAGER",
          image:"../team/Udula.jpg",
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
          image:"../team/Janith.jpg",
        },
        {
          name:"Anuththara",
          desc:"SOFTWARE T.WRITER",
          image:"../team/Anuththra.jpg",
        },
        {
          name:"Michael Goodman",
          desc:"BUSINESS ANALYST",
          image:"../team/Goodman.jpg",
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
          image:"../team/Anuththra.jpg",
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
          image:"../team/Ayomal.jpg",
        },
        {
          name:"Yasindu Widusara",
          desc:"SYSTEM SUPPORT",
          image:"../team/YASINDU.jpg",
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
          image:"../team/Saroj.jpg",
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
                 <div className='mx-auto w-10/12 rounded-t-md bg-white'>    
                 <img src={item.image} className="mx-auto w-10/10 rounded-t-md grayscale hover:grayscale-0 transition-all ease-in-out duration-1500"/>
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
