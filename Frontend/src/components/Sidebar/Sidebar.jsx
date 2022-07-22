import { Dashboard } from '../dashboard/Dashboard'
import React from 'react'
import "./Sidebar.css"
import { SidebarData } from './SidebarData'
import { Table } from '../table/Table'

import {useNavigate} from "react-router-dom"
export const Sidebar = () => {
  const navigate=useNavigate()
  return (
    <div className='app' >
      <div className='Sidebar'>
     <ul className='sidebarList'>
     {
        SidebarData.map((e,k)=>{
          return(
          <li key={k} className="row" onClick={()=>{navigate(`${e.link}`) }}>
          
            <div id='icon'>{e.icon}</div>
            <div id='title'>{e.title}</div>
          </li>
        ) })
      }
     </ul>
      </div>

      {/* <Dashboard/> */}
      {/* <Table/> */}
    </div>
  )
}



