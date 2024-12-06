import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button, Box, Typography, Container, Alert, Stack } from '@mui/material';
import LoginIcon from "@mui/icons-material/Login";
import './Register.css'

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


    const [successMessage, setSuccessMessage] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = {}

        if (!formData.username.trim()) {

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
            setSuccessMessage(true);

        }

    }

    return (
        <Container maxWidth="xs" className='container'>
            <Box className='box'>
                {successMessage && (
                    <Stack className='alert'>
                        <Alert severity="success" onClose={() => { setSuccessMessage(false) }}>
                            Registration successful!
                        </Alert>
                    </Stack>
                )}

                <Typography variant="h4" className='titlebox'>
                    Registration page
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
                        startIcon={<LoginIcon />}
                        color="success"
                        fullWidth>
                        Register
                    </Button>
                </form>



                <Typography variant="body2" className='textfield'>
                    Already have an account?
                    <Link to="/login" className='link'>
                        Login
                    </Link>
                </Typography>

            </Box>
        </Container>
    );
}