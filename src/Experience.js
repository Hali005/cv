import React from 'react'


function Experience() {
  const experience = [
    {
      designation:"Lab Instructor",
      company:"Shifa Tameer-e-Millat University",
      location:"Islamabad",
      Responsibilities:['Successfully conducted and supervised Digital Logic Design (DLD) and Computer Organization & Assembly Language labs imparting essential practical knowledge to students.']
    },
    {
      designation:"Technical Sales Engineer",
      company:"BoltSun Energy",
      location:"Rawalpindi",
      Responsibilities:['Designed and implemented detailed construction drawings','Arranged and conducted customer site visits','Troubleshoot the problem in already installed system']
    },
  ]
  return (
    <div>
      <p>I have over 8 months of industry experience and more than 1.5 years of teaching experience. My primary expertise is in embedded systems, where I have completed numerous projects.</p>
      <ul>
        {experience.map((task,index)=>(
          <li>
            <h3 className='text-3xl'>{index+1} {task.designation} at {task.company}</h3>
            <p className='text-2xl'>Location: {task.location}</p>
            
            <ul>{task.Responsibilities.map((job)=>(
              <li className='list-disc ml-4'> {job}</li>
            ))}</ul>
            <br></br>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Experience