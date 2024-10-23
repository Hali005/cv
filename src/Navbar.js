import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <ul className='flex flex-row justify-center gap-5 bg-slate-800 text-black mt-5 p-3'>
        <li className='border px-2 py-1 border-solid border-blue-50 bg-slate-300 rounded-full'>
            <Link to="/">About me</Link>
        </li>
        <li className='border px-2 py-1 border-solid border-blue-50 bg-slate-300 rounded-full'>
            <Link to="/Project">Project</Link>
        </li>
        <li className='border px-2 py-1 border-solid border-blue-50 bg-slate-300 rounded-full'>
            <Link to="/Education">Education</Link>
        </li>
        <li className='border px-2 py-1 border-solid border-blue-50 bg-slate-300 rounded-full'>
            <Link to="/Experience">Experience</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
