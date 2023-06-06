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
                ml: 2,
                backgroundColor: "#483D8B",
                opacity: "75%",
                color: "#ffff",
            }}
        >
            Submit
        </Button>
    );
};

export default UseableButton;