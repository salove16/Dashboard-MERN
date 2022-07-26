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
  InputAdornment,
  IconButton,
} from "@mui/material";

import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

export const EditFile = () => {
  const [Data, setData] = useState();
  const [text, setText] = useState();
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    getData();
  }, []);
  // console.log(id)

  const handleChange = (e) => {
    const { name, value } = e.target;

    setText({ ...text, [name]: value });
  };

  const getData = async () => {
    try {
      let res = await fetch(`http://localhost:4000/employee/${id}`);
      let data = await res.json();
      // console.log(data)
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  const updateReq = async (e) => {
    try {
      e.preventDefault();
      console.log(text)
      const { name, email, position, role, status, employed, profile_pic } =
        text;
      let payload;
      if (
        name ||
        email ||
        position ||
        role ||
        status ||
        employed ||
        profile_pic
      ) {
        payload = {
          name: name||Data.name,
          email: email||Data.email,
          position: position||Data.position,
          role: role||Data.role,
          status: status||Data.status,
          employed: employed||Data.employed,
          profile_pic: profile_pic||Data.profile_pic,
        };
      }
      

  let res = await fetch(`http://localhost:4000/employee/${id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      //   console.log(res)
      let data = await res.json();

alert("Updated Successfully")
 navigate("/table");
    } catch (error) {
      console.log({ message: error.message });
      alert("Nothing Updated ")
      navigate("/table");
    }
  };

  return (
    <div>
      {Data && (
        <Container component="main" sx={{ m: 5, mx: "auto" }} maxWidth="sm">
          {/* <Avatar sx={{ width: 100, height: 100 ,m:5, mx:"auto"  }} >SS</Avatar> */}
          <Box component="form">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  id="name"
                  label="name"
                  name="name"
                  defaultValue={Data.name}
                  onChange={handleChange}
                  // autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="email"
                  name="email"
                  defaultValue={Data.email}
                  onChange={handleChange}
                  // autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  id="position"
                  label="position"
                  name="position"
                  defaultValue={Data.position}
                  onChange={handleChange}
                  // autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  id="role"
                  label="role"
                  name="role"
                  defaultValue={Data.role}
                  onChange={handleChange}
                  // autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  id="status"
                  label="status"
                  name="status"
                  defaultValue={Data.status}
                  onChange={handleChange}
                  // autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  id="employed"
                  label="employed"
                  name="employed"
                  defaultValue={Data.employed}
                  onChange={handleChange}
                  // autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  id="profile_pic"
                  label="profile_pic"
                  name="profile_pic"
                  defaultValue={Data.profile_pic}
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
                  sx={{width:'100%'}}
                  onClick={updateReq}
                >
                  update
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      )}
    </div>
  );
};
