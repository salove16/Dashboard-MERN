import { useEffect, useState } from "react";
import { FaCoins,FaShoppingCart } from "react-icons/fa";
import { TiWorld } from "react-icons/ti"
import { RiFileUserFill } from "react-icons/ri"
import {IconContext} from "react-icons"
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Box from "@mui/material/Box";
import "./dashboard.css";
export const Dashboard = () => {
  const [data, setData] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let res = await fetch("http://localhost:4000/users");
      let data = await res.json();
      console.log(data.length);
      setData(data);
    } catch (error) {}
  };

  return (
    <div className="container">
       <div style={{ marginLeft:'1%'}}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="">
          home
        </Link>
        <Link
          underline="hover"
          color="text.primary"
          href="/dashboard"
          aria-current="page"
        >
          Dashboard
        </Link>
        </Breadcrumbs>
        <h4>DASHBOARD</h4>
    </div>
    
    <div className="dashboard">
     
      <Box
        className="box"
        sx={{
          width: 250,
          height: 100,
          backgroundColor: "#159FB4",
          borderRadius: 5,
          boxShadow: 20,
          "&:hover": {
            backgroundColor: "#7dbce2",
            // opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <div style={{ marginLeft: 15 ,display:'flex'}}>
         <div style={{textAlign: "left"}}>
           <div>
            
            <h4>Today's Money </h4>
            <h3>$53,000</h3>
          </div>
          
          <b>
            <p>
              <span style={{ color: "lime" }}>+55% </span>since yesterday
            </p>
          </b></div>
          <div style={{margin:16}}>
            <IconContext.Provider value={{size:30}}>
            <FaCoins />
            </IconContext.Provider>
           
          </div>
        </div>
      </Box>
      <Box
        className="box"
        sx={{
          width: 250,
          height: 100,
          backgroundColor: "#26A644",
          borderRadius: 5,
          boxShadow: 20,
          "&:hover": {
            backgroundColor: "#64c975",
            // opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        
        <div style={{ marginLeft: 15 ,display:'flex'}}>
         <div style={{textAlign: "left"}}>
           <div>
            
            <h4>Today's Money </h4>
            {data ? <h3>{data.length}</h3> : <h3>0</h3>}
          </div>
          
          <b>
            <p>
            <span style={{ color: "lime" }}>+3% </span> since last week
            </p>
          </b></div>
          <div style={{margin:16}}>
            <IconContext.Provider value={{size:40}}>
            <TiWorld />
            </IconContext.Provider>
           
          </div>
        </div>
      </Box>
      <Box
        className="box"
        sx={{
          width: 250,
          height: 100,
          backgroundColor: "#f9f507",
          borderRadius: 5,
          boxShadow: 20,
          "&:hover": {
            backgroundColor: "#fffd7f",
            // opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
       <div style={{ marginLeft: 15 ,display:'flex'}}>
         <div style={{textAlign: "left"}}>
           <div>
            
            <h4>New Clients</h4>
            <h3>+3,462</h3>
          </div>
          
          <b>
            <p>
              <span style={{ color: "red" }}>-2% </span>since last quarter  
            </p>
          </b></div>
          <div style={{margin:16}}>
            <IconContext.Provider value={{size:30}}>
            <RiFileUserFill/>
            </IconContext.Provider>
           
          </div>
        </div>
      </Box>
      <Box
        className="box"
        sx={{
          width: 250,
          height: 100,
          backgroundColor: "#DA3644",
          borderRadius: 5,
          boxShadow: 20,
          "&:hover": {
            backgroundColor: "#f16d78",
            // opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
         <div style={{ marginLeft: 15 ,display:'flex'}}>
         <div style={{textAlign: "left"}}>
           <div>
            
            <h4>SALES</h4>
            <h3>$103,430 </h3>
          </div>
          
          <b>
            <p>
              <span style={{ color: "lime" }}>+5% </span>than last month 
            </p>
          </b></div>
          <div style={{margin:16}}>
            <IconContext.Provider value={{size:30}}>
            <FaShoppingCart/>
            </IconContext.Provider>
           
          </div>
        </div>
      </Box>
    </div>
    </div>
    
  );
};
