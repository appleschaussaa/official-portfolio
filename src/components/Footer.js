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
                background: "#282c34",
                color: "white",
                height: 45,
                width: "100%",
                marginTop: "auto",
                bottom: 0,
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
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
