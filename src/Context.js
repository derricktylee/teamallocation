import React, { createContext, useContext, useEffect, useState } from 'react'
import { data } from './data'

const AppContext = createContext()

export function AppProvider ({children}){

    const saveData = JSON.parse(localStorage.getItem("employees"))
    const saveTeam = JSON.parse(localStorage.getItem("team"))
    const [employees, setEmployees] = useState(saveData || data)
    const [teamSelected, setTeamSelected] = useState(saveTeam || "TeamA")

    const [teams, setTeams] = useState(
        [{team:"TeamA",
        collapsed:teamSelected==="TeamA"?false:true},
        {team:"TeamB",
        collapsed:teamSelected==="TeamB"?false:true},
        {team:"TeamC",
        collapsed:teamSelected==="TeamC"?false:true},
        {team:"TeamD",
        collapsed:teamSelected==="TeamD"?false:true}]
    )

    function handleSelectedChange(e){
        setTeamSelected(e.target.value)
    }

    function onClickCard(id){
        setEmployees(employees=>employees.map(
            employee=>{ if(employee.id === id){
                if(employee.teamName!==teamSelected){return {...employee, teamName:teamSelected}}
            return {...employee, teamName:""}}
            return employee

            }
        ))
    }

    function expandTeam(team){
        setTeams(teams=>teams.map(
            item=>{
                if(item.team===team){
                    return {...item, collapsed:!item.collapsed}
                } return item
            }
        ))
    }



    useEffect(()=>{
        localStorage.setItem("employees",JSON.stringify(employees))
    },[employees])

    useEffect(()=>{
        localStorage.setItem("team",JSON.stringify(teamSelected))
    },[teamSelected])

    return <AppContext.Provider value={{employees,teamSelected,handleSelectedChange, onClickCard, teams, expandTeam}}>{children}</AppContext.Provider>
}

export function useGlobalContext(){
    return useContext(AppContext)
}