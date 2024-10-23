import React, {useState} from 'react'
import Experience from './Experience'
import Education from './Education'
import Home from './Home'



function Show() {
    const [showexp,setshowexp] = useState(false)
    const [showedu,setshowedu] = useState(false)
    const [showHome,setshowHome] = useState(false)
  return (
    <>
    <div>
      <h1 className='text-4xl mt-10 mb-10'>This is Hide & Show Section</h1>
      <button onClick={()=>setshowexp(!showexp)} className='border-b-2 bg-gray-950 text-blue-50 p-1.5 rounded-ful active:bg-blue-600'>Experience</button>
      {showexp && <Experience/>}
      </div>
      <div>
      <button onClick={()=>setshowedu(!showedu)} className='border-b-2 bg-gray-950 text-blue-50 p-1.5 rounded-ful active:bg-blue-600'>Education</button>
      {showedu && <Education/>}
    </div>
    <div>
      <button onClick={()=>setshowHome(!showHome)} className='border-b-2 bg-gray-950 text-blue-50 p-1.5 rounded-ful active:bg-blue-600'>Home</button>
      {showHome && <Home/>}
    </div>
    </>
  )
}

export default Show
