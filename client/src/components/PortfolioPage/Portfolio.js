import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { Project } from "../Route";

const Portfolio = () => {
    return (
        <>
            {/* <Typography
                variant="h4"
                component="h4"
                sx={{
                    textAlign: "center",
                    borderRadius: 3,
                    m: 2,
                }}
            >
                Portfolio page
            </Typography> */}
            <Container
                sx={{
                    border: 1,
                    // m: 1,
                    justifyContent: "center",
                    alignItem: "center",
                    borderRadius: 3,
                }}
            >
                {/* <Box
                    sx={{
                        justifyContent: "center",
                        alignContent: "center",
                        marginTop: "40px",
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
                </Box> */}
                <Box
                    sx={{
                        marginTop: "10px",
                        // margin: "40px"
                    }}
                >
                    <Project />
                </Box>
            </Container>
        </>
    );
};

export default Portfolio;
