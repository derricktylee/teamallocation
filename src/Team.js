import React from 'react'
import {AiFillCaretDown} from "react-icons/ai"
import { useGlobalContext } from './Context'

export default function Team() {

  const {teamSelected, employees, teams, expandTeam} = useGlobalContext()
  return (
    <section className='teams-container'>
      {teams.map((item,index)=>{
        return(
      <article className='teams' key={index}>
        <div className="team-header-container" onClick={()=>expandTeam(item.team)}>
          <h3>{item.team}</h3>
          <AiFillCaretDown/>
        </div>
        <div className= {item.collapsed?"team-member-container collapsed":"team-member-container"}>
        {employees.filter(employee=>employee.teamName===item.team).map(employee=><div key={employee.id}>{employee.fullName}</div>)}
        </div>
      </article>
)})}
    </section>
  )
}
