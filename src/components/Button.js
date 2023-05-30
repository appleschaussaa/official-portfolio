import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";




const UseableButton = () => {

    return (
        <Button 
            variant="contained"
            sx={{ 
                width: "10%", 
                my: 2, 
                ml: 2 
            }}
        >
            Contained
        </Button>
    );
};

export default UseableButton;