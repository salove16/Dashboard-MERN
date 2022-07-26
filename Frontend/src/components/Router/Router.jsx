import { Table } from '../table/Table'
import React, { useContext, useEffect } from 'react'
import { Sidebar } from '../Sidebar/Sidebar'
import { Dashboard } from '../dashboard/Dashboard'
import {Routes,Route} from "react-router-dom"
import { EditFile } from '../Edit/EditFile'
import {AuthContext} from "../PrivateRoute/AuthContext"
export const RouterComponent = () => {
const {checkAuth}=useContext(AuthContext)

useEffect(()=>{
  checkAuth()
},[])

  return (
    <div style={{display:'flex'}}>
        <Sidebar/>
        {/* <Table/> */}
        <Routes>
        <Route path='/table' element={<Table/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path='/:id/edit'element={<EditFile/>} ></Route>  
        </Routes>
      
      
      
    </div>
  )
}




