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

import { useState } from "react";

import { Link,useNavigate } from "react-router-dom";




export const Login = () => {
  const [text, setText] = useState();
  const navigate=useNavigate()


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
      console.log(payload);

      let res = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payload),
      });
    //   console.log(res)
      let data = await res.json();
      navigate("/dashboard");
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
              sx={{}}
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
