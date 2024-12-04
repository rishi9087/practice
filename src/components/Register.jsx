import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button, Box, Typography, Container } from '@mui/material';

export default function Register() {


  const [formData, setFormData] = useState({
    username: '', //name: value
    email: '',
    password: '',
  })

  const [errors, setErrors] = useState({
    username: '',
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

    if (!formData.username.trim()) { //trim for whitespaces

      validationErrors.username = "Username is required";
    }

    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    }

    if (!formData.password.trim()) {
      validationErrors.password = "Password is required";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
        localStorage.setItem('formData', JSON.stringify(formData));
      alert("Registered successfully");
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
          Registration Page
        </Typography>

        <form onSubmit={handleSubmit} noValidate>
          <TextField
            fullWidth
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            margin="normal"
            error={errors.username}
            helperText={errors.username}
          />

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
                       Register
          </Button>
        </form>

        <Typography variant="body2" sx={{ marginTop: 2 }}>
          Already have an account?
          <Link to="/login" style={{ textDecoration: 'none' }}>
            Login
          </Link>
        </Typography>
      </Box>
    </Container>
  );
}