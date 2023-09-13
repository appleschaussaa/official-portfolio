import React from "react";
import { Box } from "@mui/material";
import { About, Contact, Portfolio, Resume } from "../../components/Index/index";

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
