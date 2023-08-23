import React from "react";
import { Box, Container, Typography, Paper, Avatar } from "@mui/material";
import Selfie from "../../static/images/bootcamp-selfie.jpg";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../utils/Theme";

const About = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Container
                    sx={{
                        borderRadius: 3,
                        alignItems: "top",
                        height: "70vh",
                        width: "80%",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            height: 500,
                            spacing: 0,
                            border: 2,
                        }}
                    >
                        <Box
                            sx={{
                                height: "90%",
                                width: "38%",
                                display: "flex",
                                position: "relative",
                                top: 20,
                                flexDirection: "column",
                                justifyContent: "center",
                                // m: 1,
                                // mt: 4,
                                // ml: 1,
                                border: 2,
                                borderRadius: 2,
                                // pt: 5,
                                // px: 2,
                                //   backgroundColor: "#EBE8FC",
                            }}
                        >
                            <Typography
                                variant="body1"
                                sx={{
                                    boxShadow: 2,
                                    backgroundColor: "#EBE8FC",
                                    p: 2,
                                    outline: "double",
                                    outlineColor: "#C7B6DC",
                                    outlineWidth: 12,
                                    borderRadius: 2,
                                }}
                            >
                                Welcome to my portfolio! Feel free to brows to
                                learn more about me and reach out through one of
                                the ways provided on my contact page
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    position: "relative",
                                    top: 40,
                                    left: 50,
                                    boxShadow: 2,
                                    backgroundColor: "#EBE8FC",
                                    p: 2,
                                    outline: "double",
                                    outlineColor: "#C7B6DC",
                                    outlineWidth: 12,
                                    borderRadius: 2,
                                }}
                            >
                                Lorem
                                ipsum, dolor sit amet consectetur adipisicing
                                elit. Ea nostrum explicabo accusantium, et illum
                                officiis tempore laboriosam vero adipisci facere
                                in earum deleniti ratione nisi
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    position: "relative",
                                    top: 80,
                                    left: 100,
                                    boxShadow: 2,
                                    backgroundColor: "#EBE8FC",
                                    p: 2,
                                    outline: "double",
                                    outlineColor: "#C7B6DC",
                                    outlineWidth: 12,
                                    borderRadius: 2,
                                }}
                            >
                                Lorem
                                ipsum, dolor sit amet consectetur adipisicing
                                elit. Ea nostrum explicabo accusantium, et illum
                                officiis tempore laboriosam vero adipisci facere
                                in earum deleniti ratione nisi
                            </Typography>
                        </Box>
                        {/* <Box sx={{ border: 2 }}> */}
                        <Avatar
                            alt="My portrait picture"
                            src={Selfie}
                            sx={{
                                position: "relative",
                                left: 160,
                                width: 125,
                                height: 200,
                                m: 1,
                                // mt: 3,
                                ml: "170px",
                                p: 2,
                                border: 1, 
                                boxShadow: 2,
                                outline: 1
                                // backgroundColor: "#EBE8FC",
                                // outline: "double",
                                // outlineColor: "#C7B6DC",
                            }}
                        />
                        {/* </Box> */}
                    </Box>
                </Container>
            </ThemeProvider>
        </>
    );
};

export default About;