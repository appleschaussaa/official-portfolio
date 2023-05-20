import React from "react";
import { Box, Container, Typography } from "@mui/material";

const Footer = () => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Typography variant="body1" sx={{ textAlign: "center" }}>
                Footer
            </Typography>
        </Box>
    );
};

export default Footer;
