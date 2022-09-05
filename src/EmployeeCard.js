import React from 'react'
import male from "./images/maleProfile.jpg"
import female from "./images/femaleProfile.jpg"

export default function EmployeeCard({fullName, designation, gender, teamName}) {
  return (
    <article>
        <img src={gender==="male"?male:female}/>
        <h4>Name: {fullName}</h4>
        <p>Designation: {designation}</p>
        <p>Gender: {gender}</p>

    </article>
  )
}
