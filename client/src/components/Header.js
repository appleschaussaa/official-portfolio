import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Box, Typography } from "@mui/material";

function handleClick(event) {
    // event.preventDefault();
    console.info("You clicked a breadcrumb.");
}

const Header = () => {
    const location = useLocation();

    const getTitle = () => {
      const { pathname } = location;
  
      if (pathname === "/") {
        return "Home";
      } else if (pathname === "/portfolio") {
        return "Portfolio";
      } else if (pathname === "/resume") {
        return "Resume";
      } else if (pathname === "/contact") {
        return "Contact";
      } else {
        return "About Me";
      }
    };

    return (
        <>
            <Box
                className="Header"
                sx={{
                    borderBottomLeftRadius: 8,
                    borderBottomRightRadius: 8,
                    height: 55,
                    width: "100%",
                    border: 2,
                    borderColor: "#ffff",
                    borderTop: 0,
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
            <Box>
                <Typography
                    variant="h4"
                    component="h4"
                    sx={{
                        textAlign: "center",
                        border: 1,
                        borderRadius: 2,
                        m: 2,
                    }}
                >
                    {getTitle()}
                </Typography>
            </Box>
        </>
    );
};

export default Header;
