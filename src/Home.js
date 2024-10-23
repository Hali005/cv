import React from 'react'
import cv from './images/cv.jpg'

function Home() {
    let mydata ={
        name:"Hassan Ali",
        gender:"Male",
        degree:"Electrical Engineer",
        address:"Soan Garden Islamabad",
        Intro:"I am passionate about harnessing the transformative power of electrical systems to contribute to a sustainable and technologically advanced world. My academic background has equipped me with a solid foundation in electrical principles, circuit design, and power systems."
    }
  return (
      <div className='flex flex-col justify-center'>
          <h3 className='flex justify-center  mt-5 text-amber-950 text-3xl'>Personal Information</h3>
          <div className="flex justify-center">
          <img src={cv} alt='PIC' height={100} width={100} className='rounded-full'/>
          </div>
          <div className='flex flex-col text-center'>
            <p>{mydata.name}</p>
            <p>{mydata.degree}</p>
            <p>{mydata.gender}</p>
            <p>{mydata.address}</p>
            <p>{mydata.Intro}</p>
          </div>
      </div>
  )
}

export default Home
