import  { useEffect, useState } from 'react'
// import axios from 'axios';
import Box from '@mui/material/Box';
import "./dashboard.css"
export const Dashboard = () => {
const [data,setData]=useState()

useEffect(()=>{
  getData()
},[])

const getData=async()=>{
    try {
       let res=await fetch("http://localhost:4000/users")
       let data=await res.json()
       console.log(data.length)
       setData(data)
    } catch (error) {
        
    }
}

  return (
    <div className='dashboard'>
     
      <Box
      className='box'
      sx={{
        width: 200,
        height: 100,
        backgroundColor: 'white',
        borderRadius:5 ,
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <div>
        <h4>Todays</h4>
        <h3>45841</h3>
      </div>
    </Box>
     <Box
     className='box'
      sx={{
        width: 200,
        height: 100,
        backgroundColor: 'white',
        borderRadius:5 ,
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <div>
        <h4>Todays</h4>
        <h3>4155</h3>
      </div>
    </Box>
     <Box
     className='box'
      sx={{
        width: 200,
        height: 100,
        backgroundColor: 'white',
        borderRadius:5 ,
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <div>
        <h4>Todays</h4>
        {
          data?<h3>{data.length}</h3>:<h3>0</h3>
        }
      </div>
    </Box>
     <Box
     className='box'
      sx={{
        width: 200,
        height: 100,
        backgroundColor: 'white',
        borderRadius:5 ,
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <div>
        <h4>Todays</h4>
        <h3>45841</h3>
      </div>
    </Box>
    </div>
  )
}


