import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { TextField, Button, Box, Typography, Container } from '@mui/material';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
      })
    
      const [errors, setErrors] = useState({
        email: '',
        password: '',
      })
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      }
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = {}
    
        if (!formData.email.trim()) {
          validationErrors.email = "Email is required";
        }
    
        if (!formData.password.trim()) {
          validationErrors.password = "Password is required";
        }
    
        setErrors(validationErrors);
    
        if (Object.keys(validationErrors).length === 0) {
            const existingUsers = JSON.parse(localStorage.getItem('formData'));
            if(existingUsers.email==formData.email && existingUsers.password==formData.password){
                alert('Logged in successfully')
            } else{
                alert('Enter correct email and password');
            }
        }
    
      }
  return (
    <Container maxWidth="xs" sx={{}}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 3,
          borderRadius: 2,
          boxShadow: 4,
          backgroundColor: 'white',
        }}
      >
        <Typography variant="h4">
          Login Page
        </Typography>

        <form onSubmit={handleSubmit} noValidate>

          <TextField
            fullWidth
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            error={errors.email}
            helperText={errors.email}
          />

          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            margin="normal"
            error={errors.password}
            helperText={errors.password}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth>
                       Login
          </Button>
        </form>

        <Typography variant="body2" sx={{ marginTop: 2 }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            Register
          </Link>
        </Typography>
        <Typography variant="body2" sx={{ marginTop: 2 }}>
          <Link to="/loginotp" style={{ textDecoration: 'none' }}>
            Login with OTP
          </Link>
        </Typography>
      </Box>
    </Container>
  )
}

export default Login
