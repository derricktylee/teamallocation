import React from 'react'
import male from "./images/maleProfile.jpg"
import female from "./images/femaleProfile.jpg"
import { useGlobalContext } from './Context'

export default function EmployeeCard({id,fullName, designation, gender, teamName}) {
  const {teamSelected, onClickCard} = useGlobalContext()
  return (
    <article className={teamSelected===teamName?"card-container card-selected":"card-container"} onClick={()=>onClickCard(id)}>
        <img src={gender==="male"?male:female}/>
        <h4>Name: {fullName}</h4>
        <p>Designation: {designation}</p>
        <p>Gender: {gender}</p>

    </article>
  )
}
