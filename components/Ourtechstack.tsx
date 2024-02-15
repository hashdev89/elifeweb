import React from 'react'
import Image from "next/image"

const Ourtechstack = () => {
  return (
    <main className="container-fluid h-full w-full bg-surfacelight-primary dark:bg-surfacedark-primary inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] py-10">
        <section className='max-container'>
        <div className="gap-2 py-10 text-center">
            <h1 className='text-surfacedark-primary dark:text-surfacelight-primary'>Our Tech Stack</h1>
            <h3 className='text-surfacedark-secondary dark:text-surfacelight-secondary'>Our Solutions are Fuelled by Forefront Technologies and Tools</h3>
        </div>
        <div className='flex justify-center items-center bg px-2'>
          <div className='grid grid-cols-1 grid-rows-1 gap-5 grid-flow-row-dense lg:grid-cols-6 max-sm:grid-cols-3 md:grid-cols-3 bg-surfacelight-secondary dark:bg-surfacedark-tertiary rounded-lg bl '>

            <div className='p-4 pr-4 '>
                <img className="w-14 drop-shadow-md" src="/angular.png"  alt="angular"/>
                
            </div>
            <div className='p-4 pr-4'>
                <img className="w-14 drop-shadow-md" src="/react.png" alt="react"/>
            </div>
            <div className='p-4 pr-4'>
                <img className="w-14 drop-shadow-md" src="/js.png" alt="js"/>
            </div> 
            <div className='p-4 pr-4'>
                <img className="w-14 drop-shadow-md" src="/viu.png" alt="viu"/>
            </div>
            <div className='p-4 pr-4'>
                <img className="w-50 drop-shadow-md" src="/nodejs.png" alt="node"/>
            </div>
            <div className='p-4 pr-4'>
                <img className="w-18" src="/nunjux.png" alt="nunjux"/>
            </div>
            <div className='p-4 pr-4'>
                <img className="w-14 drop-shadow-md" src="/lravel.png" alt="larvel"/>
            </div>
            <div className='p-4 pr-4'>
                <img className="w-18" src="/mysql.png" alt="mysql"/>
            </div>
            <div className='p-4 pr-4'>
                <img className="w-18 drop-shadow-md" src="/dotnet.png" alt="dotnet"/>
            </div>
            <div className='p-4 pr-4'>
                <img className="w-18" src="/microsoftsql.png" alt="microsoftsql"/>
            </div>
            <div className='p-4 pr-4'>
                <img className="w-full drop-shadow-md" src="/kubernetes.png" alt="kubernetes"/>
            </div>
            <div className='p-4 pr-4'>
                <img className="w-18 drop-shadow-md" src="/docekr.png" alt="docekr"/>
            </div>
            <div className='p-4 pr-4'>
                <img className="w-18 drop-shadow-md" src="/aws.png" alt="aws"/>
            </div>
            <div className='p-4 pr-4'>
                <img className="w-15 drop-shadow-lg" src="/jenkins.png" alt="jenkins"/>
            </div>
            <div className='p-4 pr-4'>
                <img className="w-15 drop-shadow-lg" src="/kafka.png" alt="kafka"/>
            </div>
            <div className='p-4 pr-4'>
                <img className="w-15 drop-shadow-lg" src="/mongodb.png" alt="mongodb"/>
            </div>
            <div className='p-4 pr-4'>
                <img className="w-15 drop-shadow-lg" src="/nginx.png" alt="nginx"/>
            </div>
            <div className='p-4 pr-4'>
                <img className="w-18 drop-shadow-lg" src="/postgresql.png" alt="post"/>
            </div>
            <div className='p-4 pr-4'>
                <img className="w-18 drop-shadow-lg" src="/se.png" alt="se"/>
            </div>
            <div className='p-4 pr-4'>
                <img className="w-18 drop-shadow-lg" src="/iosandroid.png" alt="iosandroid"/>
            </div>
            <div className='p-4 pr-4'>
                <img className="w-18 drop-shadow-lg" src="/cloud.png" alt="cloud"/>
            </div>
            <div className='p-4 pr-4'>
                <img className="w-17 drop-shadow-lg" src="/elastic.png" alt="elastic"/>
            </div>
            <div className='p-4 pr-4'>
                <img className="w-17 drop-shadow-lg" src="/logstash.png" alt="logstash"/>
            </div>
            <div className='p-4 pr-4'>
                <img className="w-17 drop-shadow-lg" src="/kibana.png" alt="kibana"/>
            </div>
            <div className='p-4 pr-4'> 
                <img className="w-17 drop-shadow-lg" src="greenbone.png" alt="greenbone"/>
            </div>
            <div className='p-4 pr-4'> 
                <img className="w-18 drop-shadow-lg" src="jira.png" alt="jira"/>
            </div>
            <div className='p-4 pr-4'> 
                <img className="w-18 drop-shadow-lg" src="sos.png" alt="sos"/>
            </div>
            <div className='p-4 pr-4'> 
                <img className="w-18 drop-shadow-lg" src="suricata.png" alt="suricata"/>
            </div>
            <div className='p-4 pr-4'> 
                <img className="w-18 drop-shadow-lg" src="zeek.png" alt="zeek"/>
            </div>
            <div className='p-4 pr-4'> 
                <img className="w-18 drop-shadow-lg" src="wazuh.png" alt="wazuh"/>
            </div>


          </div>

        </div>
        </section>
    </main>
  )
}

export default Ourtechstack