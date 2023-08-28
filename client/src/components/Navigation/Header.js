import React from "react";
import { useLocation } from "react-router-dom";
import { Box, Typography, Link, Breadcrumbs } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../utils/Theme";

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
            <ThemeProvider theme={theme}>
                <Box
                    className="Header"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        borderBottomLeftRadius: 8,
                        borderBottomRightRadius: 8,
                        height: 65,
                        width: "100%",
                        mb: 2,
                        backgroundColor: "primary.main",
                        border: 2,
                        borderColor: "#C7B6DC",
                        borderTop: 0,
                        boxShadow: 6,
                    }}
                >
                    <Breadcrumbs
                        separator="›"
                        color="primary.mainBackground"
                        aria-label="breadcrumb"
                        onClick={handleClick}
                        sx={{}}
                    >
                        <Link underline="hover" color="primary.mainBackground" href="/">
                            <Typography>Home</Typography>
                        </Link>
                        <Link underline="hover" color="primary.mainBackground" href="/portfolio">
                            <Typography>Portfolio</Typography>
                        </Link>
                        <Link underline="hover" color="primary.mainBackground" href="/resume">
                            <Typography>Resume</Typography>
                        </Link>
                        <Link underline="hover" color="primary.mainBackground" href="/contact">
                            <Typography>Contact</Typography>
                        </Link>
                    </Breadcrumbs>
                </Box>
                <Box
                    component="div"
                    sx={{
                        // boxShadow: "11px -4px 8px black",
                        boxShadow: 6,
                        mb: 3,
                        p: "-1px 1px 1px",
                        border: 1,
                        borderRadius: 2,
                    }}
                >
                    <Typography
                        variant="h3"
                        component="h3"
                        sx={{
                            display: "inline",
                            textAlign: "center",
                            textDecoration: "underline",
                            textDecorationThickness: "4",
                            color: "#483D8B",
                            // border: 1,
                            borderRadius: 2,
                            p: 2,
                        }}
                    >
                        {getTitle()}
                    </Typography>
                </Box>
            </ThemeProvider>
        </>
    );
};

export default Header;
