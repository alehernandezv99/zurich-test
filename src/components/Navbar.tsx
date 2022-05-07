import React,{useState, useEffect} from "react";

import {useNavigate, useLocation} from "react-router-dom"

import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button,
    IconButton,
  } from "@mui/material"
  
  import {
    ArrowBack
  } from "@mui/icons-material"

export const Navbar:React.FC<any> = props => {

    const navigate = useNavigate();

    const location = useLocation()

   const backstack = () => {
       navigate(-1)
    }

    const mainPage = () => {
        navigate("/")
    }

    return  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="sticky" >
      <Toolbar>
        {location.pathname !== "/"?<IconButton
        onClick={backstack}
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <ArrowBack/>
        </IconButton>:null}

        <Button variant="text" onClick={mainPage} color="inherit">Zurich Test</Button>
      
      </Toolbar>
    </AppBar>
  </Box>
}