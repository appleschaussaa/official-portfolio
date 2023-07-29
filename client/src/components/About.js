import React from "react";
import { Box, Container, Typography, Card, CardMedia, Avatar } from "@mui/material";
import Selfie from "../static/images/bootcamp-selfie.jpg";
import { spacing } from "@mui/system";

const About = () => {
    return (
        <>
            <Container
                sx={{
                    // border: 1,
                    borderRadius: 3,
                    // display: "flex",
                    // flexDirection: "column",
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
                        border: 2 
                        }}
                >
                    <Typography
                        sx={{
                            height: "90%",
                            width: "40%",
                            display: "flex",
                            // order: 1,
                            flexDirection: "column",
                            direction: "left",
                            // flex: 1,
                            justifyContent: "center",
                            m: 1,
                            mt: 2,
                            border: 2,
                            borderRadius: 2,
                            p: 1,
                            px: 2,
                            background: "#FEF9E9"
                        }}
                    >
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Ea nostrum explicabo accusantium, et illum
                        officiis tempore laboriosam vero adipisci facere in
                        earum deleniti ratione nisi, esse consequuntur aliquam
                        suscipit enim! Commodi culpa nam maxime quidem, at optio
                        eos asperiores reprehenderit, a minima accusantium
                        rerum, reiciendis molestiae esse expedita suscipit
                        error? Lorem ipsum, dolor sit amet consectetur suscipit 
                        enim!Commodi culpa nam maxime quidem, at optio
                        eos asperiores reprehenderit, a minima accusantium
                        rerum, reiciendis molestiae esse expedita suscipit
                        error? Lorem ipsum, dolor sit amet consectetur
                    </Typography>
                    {/* <Card
                        sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            // order: 2,
                            // flexDirection: "row",
                            direction: "right",
                            // flex: "shrink",
                            height: "50",
                            width: "30%",
                            // flexShrink: 1,
                        }}
                    >
                        <CardMedia
                            component="img"
                            // height="100px"
                            // width="20%"
                            alt="portrait picture of myself"
                            image={Selfie}
                        />
                    </Card> */}
                    <Avatar 
                        alt="My portrait picture" 
                        src={Selfie} 
                        sx={{ 
                            width: 150, 
                            height: 190,
                            m: 1,
                            mt: 2,
                            ml: "180px",
                            p: 2, 
                        }}
                    />
                </Box>
                {/* <Box 
                        sx={{
                            display: "flex",
                            // flex: 2,
                            border: 2,
                            flexDirection: "row",
                            // height: "70%",
                            width: "40%",
                        }}
                    >
                    <Card sx={{ height: "250",  }}>
                        <CardMedia
                            component="img"
                            height="194"
                            width="200"
                            alt="portrait picture of myself"
                            image={Selfie}
                        />
                    </Card>
                </Box> */}
            </Container>
        </>
    );
};

export default About;
