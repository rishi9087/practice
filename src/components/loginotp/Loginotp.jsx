import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button, Box, Typography, Container, Alert, Stack } from '@mui/material'
import './Loginotp.css'

function Loginotp() {

    const [otpMessage, setOtpMessage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setOtpMessage(true);
    }

    return (
        <>
            <Container maxWidth="xs" className='container'>
                <Box className='box'>

                    {otpMessage && (
                        <Stack className='loginalert'>
                            <Alert severity="success" onClose={() => { setOtpMessage(false) }}>
                                OTP sent to your Mobile number!
                            </Alert>
                        </Stack>
                    )}

                    <Typography variant="h4" >
                        Login with OTP
                    </Typography>

                    <form onSubmit={handleSubmit} noValidate className='inputform'>

                        <TextField
                            fullWidth
                            label="Enter your Mobile number"
                            name="number"
                        />

                        <Button
                            type="submit"
                            variant="contained"
                            color="success"
                            fullWidth>
                            Send OTP
                        </Button>
                    </form>
                    <Typography variant="body2" sx={{ marginTop: 2 }}>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            Register
                        </Link>
                    </Typography>
                    <Typography variant="body2" sx={{ marginTop: 2 }}>
                        <Link to="/login" style={{ textDecoration: 'none' }}>
                            Login
                        </Link>
                    </Typography>
                </Box>
            </Container>
        </>
    )
}

export default Loginotp
