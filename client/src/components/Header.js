import React from "react";
// import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Box, Typography } from "@mui/material";

function handleClick(event) {
    // event.preventDefault();
    console.info("You clicked a breadcrumb.");
}

const Header = () => {
    return (
        <Box
            className="Header"
            sx={{
                borderBottomLeftRadius: 8,
                borderBottomRightRadius: 8,
                height: 55,
                width: "100%",
                border: 2,
                borderColor: "#ffff",
                borderTop:0,
            }}
        >
            <Breadcrumbs
                separator="›"
                color="#FDF5E6"
                aria-label="breadcrumb"
                onClick={handleClick}
                sx={{}}
            >
                <Link underline="hover" color="white" href="/">
                    <Typography>Home</Typography>
                </Link>
                <Link underline="hover" color="white" href="/portfolio">
                    <Typography>Portfolio</Typography>
                </Link>
                <Link underline="hover" color="white" href="/resume">
                    <Typography>Resume</Typography>
                </Link>
                <Link underline="hover" color="white" href="/contact">
                    <Typography>Contact</Typography>
                </Link>
            </Breadcrumbs>
        </Box>
    );
};

export default Header;
