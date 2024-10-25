import React from 'react'

function Education() {
  const myedu = [
    {
      degree:"BS Electrical Engineering",
      university:"Capital University of Science & Technology",
      batch:"2018 - 2022",
    },
    {
      degree:"Pre-Engineering",
      university:"Army Public School & College",
      batch:"2016 - 2018",
    } 
  ]
  return (
    
    <div>
      <ul>
          {myedu.map((edu)=>(
            <li>{edu.degree}
            <ul>
              <li>{edu.university}</li>
              <li>{edu.batch}</li>

            </ul>
            <br></br>
            </li>
               
          ))}
        
      </ul>
    </div>
  )
}

export default Education
