import { useEffect, useState } from 'react'
// import { DataGrid } from '@mui/x-data-grid';
// import Box from '@mui/material/Box';
import "./Table.css"
import {useNavigate} from "react-router-dom"
export const Table = () => {
    const [data,setData]=useState()
const navigate =useNavigate()
    useEffect(()=>{
      getData()
    },[])
    
    const getData=async()=>{
        try {
           let res=await fetch("http://localhost:4000/employee")
           let data=await res.json()
           console.log(data)
           setData(data)
        } catch (error) {
            
        }
    }
    
const handleEdit=(id)=>{
navigate(`/${id}/edit`)
    
}

    

  return (
    <div >
        <table>
            <thead>
                <tr >
                    <th>AUTHOR</th>
                    <th>FUNCTION</th>
                    <th>STATUS</th>
                    <th>EMPLOYED</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                   data? data.map((e,k)=>(
                    <tr key={k} className="tbody">
                        <td>
<div className='author-flex'>
    <div>
        <img src={e.profile_pic} alt="" />
    </div>
    <div>
        <h5>{e.name}</h5>
        <p>{e.email}</p>
    </div>
</div>
                        </td>
                        <td>
                            <div>
                                <h5>{e.role}</h5>
                                <p>{e.position}</p>
                            </div>
                        </td>
                        <td>{e.status?"online":"offline"}</td>
                        <td>{e.employed}</td>
                        <td>
                            <button onClick={()=>{
                                handleEdit(e._id)
                            }}>edit</button>
                        </td>
                    </tr>
                )):null
                }
            </tbody>
        </table>
     
    </div>
  )
}


