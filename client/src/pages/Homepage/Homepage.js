import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { About, Contact, Portfolio, Resume } from "../../components/Route/index";

const Homepage = () => {
    let path = window.location.pathname;

    return (
        <>
            <Box
                sx={{
                    height: "100%",
                    width: "100%",
                    mb: 1,
                    mt: 1,
                    // [theme.breakpoints.up("tablet")]: {
                    //     padding: 30,
                    // },
                    // [theme.breakpoints.up("laptop")]: {
                    //     padding: 40,
                    // },
                    // [theme.breakpoints.up("desktop")]: {
                    //     padding: 50,
                    // },
                }}
            >
                {path === "/" && <About />}
                {path === "/portfolio" && <Portfolio />}
                {path === "/resume" && <Resume />}
                {path === "/contact" && <Contact />}
            </Box>
        </>
    );
};

export default Homepage;
