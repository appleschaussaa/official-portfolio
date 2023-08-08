import React from "react";
import { Box, Container, Typography } from "@mui/material";

const Footer = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                // position: "fixed",
                background: "#483D8B",
                color: "white",
                height: 50,
                width: "100%",
                marginTop: "auto",
                bottom: 0,
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                border: 2,
                borderBottom: 0,
                borderColor: "#ffff",
            }} 
            // component="footer"
        >
            <Typography variant="body1" sx={{ textAlign: "center" }}>
                Footer
            </Typography>
        </Box>
    );
};

export default Footer;
