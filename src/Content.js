import React from 'react'
import { useGlobalContext } from './Context'
import EmployeeCard from './EmployeeCard'


export default function Content() {
    const {employees,teamSelected, handleSelectedChange} = useGlobalContext()

  return (
    <section>
        <div className="select-team-container">
        <select id='select-team' value={teamSelected} onChange={handleSelectedChange}>
            <option value="TeamA">TeamA</option>
            <option value="TeamB">TeamB</option>
            <option value="TeamC">TeamC</option>
            <option value="TeamD">TeamD</option>
        </select>
        </div>
    <div className='employees-container'>
        {employees.map(employee=><EmployeeCard key={employee.id} {...employee}/>)}
    </div>
    </section>
  )
}
