import React from 'react'
import { FaPython,  FaJava, FaPhp, FaSwift, FaNode } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { SiTensorflow, SiHuggingface  } from "react-icons/si";
import { SiNumpy, SiPandas, SiScikitlearn, SiNextdotjs, SiExpress } from "react-icons/si";

function Skills() {
  return (
   <>
   <div className='mb-2'>
    <h1 className='text-2xl font-semibold text-white'>Technologies</h1>
    <div className='bg-white rounded-md  border-white mt-3 border-2 p-3'>
<div>
  <h3 className='text-black font-semibold text-xl '>Languages</h3>
  <div className='mt-2 mb-3 flex md:justify-start md:items-start justify-center items-center' >
<FaPython className='text-black text-6xl'  />
<FaJava  className='text-black text-6xl ml-2'/>
<RiJavascriptFill  className='text-black text-6xl ml-2' />
<FaPhp  className='text-black text-6xl ml-2'/>
<FaSwift  className='text-black text-6xl ml-2' />
  </div>
  <h3 className='text-black mb-2 mt-2 font-semibold text-xl'>Frameworks/Libraries</h3>
  <div className='mt-2 p-2 flex md:justify-start md:items-start justify-center items-center' >
<SiNumpy className='text-black text-4xl'/>
<SiPandas className='text-black text-4xl ml-3'/>
<SiScikitlearn className='text-black text-4xl ml-3' />
<SiTensorflow className='text-black text-4xl ml-3'/>
<SiHuggingface className='text-black text-4xl ml-3'/>

<SiNextdotjs className='text-black text-4xl ml-3' />
<SiExpress className='text-black text-4xl ml-3' />
<FaNode className='text-black text-4xl ml-3'/>
    </div>
</div>
    </div>
   </div>
   </>
  )
}

export default Skills