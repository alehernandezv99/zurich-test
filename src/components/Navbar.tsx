import React,{useState, useEffect} from "react";

import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button,
    IconButton,
  } from "@mui/material"
  
  import {
    Menu
  } from "@mui/icons-material"

export const Navbar:React.FC<any> = props => {

    return  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="sticky" >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <Menu/>
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Zurich Test
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  </Box>
}