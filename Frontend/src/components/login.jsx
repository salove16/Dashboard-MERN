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

  import {Link} from "react-router-dom" 
  export const Login = () => {
  
  
  
  
    return (
      <Container component="main" sx={{m:5,mx:"auto"}} maxWidth="sm">
          <Avatar sx={{ width: 100, height: 100 ,m:5, mx:"auto"  }} >SS</Avatar>
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
                
              /> 
              
              
             </Grid> 
          
            <Grid item xs={12} sm={12} display="flex" justifyContent="space-between">
              <Button variant="contained" type="submit" sx={{}}>Login</Button>
        
              <Typography >
              Dont't have an Account? <Link to="/">signup</Link>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    );
  };
  