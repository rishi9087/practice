import React, { useState } from "react";
import {
    Drawer, IconButton, Box, TextField, Typography, List, ListItem, ListItemButton,
    ListItemText, AppBar, Toolbar, Button, Dialog, DialogTitle, DialogContent, DialogActions, Table,
    TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
    Container, ListItemIcon
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import SettingsIcon from '@mui/icons-material/Settings';
import CallIcon from '@mui/icons-material/Call';
import './Dashboard.css';

const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    const [formData, setFormData] = useState({
        pid: "",
        pname: "",
        price: "",
    });
    const [openForm, setOpenForm] = useState(false);
    const [tableData, setTableData] = useState([]);


    const handleClick = () => {
        setOpenForm(true);
    }
    const handleClose = () => {
        setOpenForm(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setTableData([...tableData, formData]);
        console.log("Form Submitted:", formData);
        handleClose();
    };


    return (
        <>
            {/* Navbar */}
            <AppBar position="static" class="appbar" >
                <Toolbar className="toolbar">
                    <IconButton onClick={toggleDrawer} edge="start" color="inherit" aria-label="menu" className="menu-icon">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h4" className="navtext">
                        DASHBOARD
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* sidebar */}
            <Drawer
                anchor="left"
                open={isOpen}
                onClose={toggleDrawer}
                className="sidebar"
            >
                <Box role="presentation" className="sidebarbox">

                    <List>
                        <ListItem >
                            <ListItemButton className="sidebar-item" >
                                <HomeIcon />
                                <ListItemText primary='Home' className="sidebar-text" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem >
                            <ListItemButton className="sidebar-item">
                                < DesignServicesIcon />
                                <ListItemText primary='Services' className="sidebar-text" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem >
                            <ListItemButton className="sidebar-item" >
                                <SettingsIcon />
                                <ListItemText primary='Settings' className="sidebar-text" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem >
                            <ListItemButton className="sidebar-item">
                                <CallIcon />
                                <ListItemText primary='Contact' className="sidebar-text" />
                            </ListItemButton>
                        </ListItem>

                    </List>
                </Box>
            </Drawer>

            <Box className='formbtnbox'>
                <Button onClick={handleClick} class="formbtn" >
                    Add data +
                </Button>

                {openForm && (
                    <Dialog open={openForm} onClose={handleClose} className="dialog">
                        <DialogTitle className="dialogtitle">Input Form</DialogTitle>
                        <DialogContent>
                            <Box component="form" onSubmit={handleSubmit} className="dialogform">
                                <TextField
                                    label="Product id"
                                    name="pid"
                                    value={formData.pid}
                                    onChange={handleChange}
                                    fullWidth
                                    className="textfield"
                                />
                                <TextField
                                    label="product name"
                                    name="pname"
                                    value={formData.pname}
                                    onChange={handleChange}
                                    fullWidth
                                    className="textfield"
                                />
                                <TextField
                                    label="price"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleChange}
                                    fullWidth
                                    className="textfield"
                                />
                            </Box>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color="secondary">
                                Close
                            </Button>
                            <Button onClick={handleSubmit} variant="contained" color="primary">
                                Submit
                            </Button>
                        </DialogActions>
                    </Dialog>
                )}

                <Box sx={{ margin: 4 }} className='tableBox'>
                    <TableContainer component={Paper} elevation={4} className="tablebox-1">
                        <Table class="tablebox-2">
                            <TableHead>
                                <TableRow sx={{ backgroundColor: "lightblue" }}>
                                    <TableCell sx={{ fontWeight: "bold" }}>Product ID</TableCell>
                                    <TableCell sx={{ fontWeight: "bold" }}>Product Name</TableCell>
                                    <TableCell sx={{ fontWeight: "bold" }}>Price</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {tableData.map((row, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{row.pid}</TableCell>
                                        <TableCell>{row.pname}</TableCell>
                                        <TableCell>{row.price}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>

            </Box>

        </>
    );
};

export default Dashboard;
