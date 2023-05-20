import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { Project } from ".";

const Portfolio = () => {
    return (
        <>
            <Box sx={{ border: 1, borderRadius: 2, m: 1, }}>
                <Container>
                    <Typography
                        variant="h4"
                        component="h4"
                        sx={{
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 3,
                        }}
                    >
                        Portfolio page
                    </Typography>
                </Container>
                <Project
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                />
            </Box>
        </>
    );
};

export default Portfolio;
