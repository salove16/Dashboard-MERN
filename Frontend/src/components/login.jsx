import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
  Paper,
} from "@mui/material";
import { useContext } from "react";

import { useState } from "react";

import { Link,useNavigate } from "react-router-dom";
import { AuthContext } from "./PrivateRoute/AuthContext";




export const Login = () => {
  const [text, setText] = useState();
  // const [token, setToken] = useState();
  const navigate=useNavigate()
const {handleAuth}=useContext(AuthContext)

console.log(handleAuth)

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name,value)
    setText({ ...text, [name]: value });
  };
  // console.log(text)

  const loginReq = async (e) => {
    try {
        e.preventDefault()
        // console.log(text)
      const { Email, password } = text;
      let payload;
      if (Email && password) {
        payload = {
          email: Email,
          password: password,
        };
      }
      // console.log(payload);

      let res = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payload),
      });
    //   console.log(res)
      let data = await res.json();
      console.log(data.token)
      localStorage.setItem("token",data.token)
      handleAuth()
      // console.log(data.token,"dfghjhgfdsfghgfdfg87456845")
      if(data.token){
        alert("Login successful")
      navigate("/dashboard");
      }else{
        alert("Your user ID or password is incorrect")
      }
    } catch (error) {
      console.log({ message: error.message });
    }
  };

  return (
    
    <Container component="main" sx={{ m: 5, mx: "auto" }} maxWidth="sm">
      <Avatar sx={{ width: 100, height: 100, m: 5, mx: "auto" }}>SS</Avatar>
      <Box component="form">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <TextField
              required
              fullWidth
              id="Email"
              label="Email"
              name="Email"
              type="email"
              // autoComplete="family-name"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              required
              fullWidth
              id="name"
              label="password"
              name="password"
              type="password"
              onChange={handleChange}
            />
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            display="flex"
            justifyContent="space-between"
          >
            <Button
              variant="contained"
              type="submit"
              sx={{width:'25%'}}
              onClick={loginReq}
            >
              Login
            </Button>

            <Typography>
              Dont't have an Account? <Link to="/">signup</Link>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
