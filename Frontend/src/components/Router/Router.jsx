import { Table } from '../table/Table'
import React from 'react'
import { Sidebar } from '../Sidebar/Sidebar'
import { Dashboard } from '../dashboard/Dashboard'
import {Routes,Route} from "react-router-dom"
export const RouterComponent = () => {
  return (
    <div style={{display:'flex'}}>
        <Sidebar/>
        {/* <Table/> */}
        <Routes>
        <Route path='/table' element={<Table/>}></Route>
            <Route path='/dashboard' element={<Dashboard/>}></Route>
            
        </Routes>
      
      
      
    </div>
  )
}




