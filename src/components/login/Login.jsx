import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { TextField, Button, Box, Typography, Container, Alert, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LoginIcon from "@mui/icons-material/Login";
import './Login.css'

function Login() {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  })

  const [warningMessage, setWarningMessage] = useState(false);

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
      if (existingUsers.email == formData.email && existingUsers.password == formData.password) {
        navigate('/dashboard')
      } else {
        setWarningMessage(true);
      }
    }

  }
  return (
    <>
      <Container maxWidth="xs" className='container'>


        <Box className='box'>


          {warningMessage && (
            <Stack className='loginalert'>
              <Alert severity="warning" onClose={() => { setWarningMessage(false) }}>
                Wrong credentials!
              </Alert>
            </Stack>
          )}

          <Typography variant="h4" className='titlebox'>
            Login page
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
              color="success"
              fullWidth
              startIcon={<LoginIcon />}>
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
    </>
  )
}

export default Login
