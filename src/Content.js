import React from 'react'
import { useGlobalContext } from './Context'
import EmployeeCard from './EmployeeCard'


export default function Content() {
    const {employees} = useGlobalContext()
  return (
    <div className='employees-container'>
        {employees.map(employee=><EmployeeCard key={employee.id} {...employee}/>)}
    </div>
  )
}
