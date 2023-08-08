import React from "react";
import { Box, Container, Typography, Paper, Avatar } from "@mui/material";
import Selfie from "../../static/images/bootcamp-selfie.jpg";

const About = () => {
    return (
        <>
            <Container
                sx={{
                    borderRadius: 3,
                    alignItems: "top",
                    height: "80vh",
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
                            width: "40%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            m: 1,
                            mt: 4,
                            border: 2,
                            borderRadius: 2,
                            pt: 5,
                            px: 2,
                            //   backgroundColor: "#EBE8FC",
                        }}
                    >
                        <Typography
                            variant="h6"
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
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Ea nostrum explicabo
                                accusantium, et illum officiis tempore
                                laboriosam vero adipisci facere in earum
                                deleniti ratione nisi, esse consequuntur aliquam
                                suscipit enim! Commodi culpa nam maxime quidem,
                                at optio eos asperiores reprehenderit, a minima
                                accusantium rerum, reiciendis molestiae esse
                                expedita suscipit error? Lorem ipsum, dolor sit
                                amet consectetur suscipit enim!Commodi culpa nam
                                maxime quidem, at optio eos asperiores
                                reprehenderit, a minima accusantium rerum,
                                reiciendis molestiae esse expedita suscipit
                                error? Lorem ipsum, dolor sit amet consectetur
                        </Typography>
                    </Box>
                    <Box sx={{ border: 2 }}>
                    <Avatar
                        alt="My portrait picture"
                        src={Selfie}
                        sx={{
                            width: 250,
                            height: 290,
                            m: 1,
                            mt: 2,
                            ml: "180px",
                            p: 2,
                            border: 1,
                        }}
                    />
                    </Box>
                </Box>
            </Container>
        </>
    );
};

export default About;
