import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { Project } from ".";

const Portfolio = () => {
    return (
        <>
            <Container
                sx={{
                    border: 1,
                    // m: 1,
                    justifyContent: "center",
                    alignItem: "center",
                    borderRadius: 3,
                }}
            >
                <Box
                sx={{
                    justifyContent: "center",
                    alignContent: "center"
                }}
                >
                <Typography
                    variant="h4"
                    component="h4"
                    sx={{
                        textAlign: "center",
                        borderRadius: 3,
                        m: 2,
                    }}
                >
                        Portfolio page
                    </Typography>
                </Box>
                <Project />
            </Container>
        </>
    );
};

export default Portfolio;
