import React from "react";
import { Box, Container, Typography, Card, CardMedia } from "@mui/material";
import Selfie from "../images/bootcamp-selfie.jpg"

const About = () => {
    return (
        <>
            <Container
                sx={{
                    // border: 1,
                    borderRadius: 3,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "top",
                    height: "80vh",
                    width: "80%",
                }}
            >
                <Box>
                    <Typography
                        variant="h4"
                        component="h4"
                        sx={{
                            textAlign: "center",
                            borderRadius: 3,
                            m: 2,
                        }}
                    >
                        About Me page
                    </Typography>
                    <Typography sx={{ textAlign: "center" }}>Lorem</Typography>
                    <Typography
                        sx={{
                            height: "70%",
                            width: "60%",
                            display: "flex",
                            order: 0,
                            flexDirection: "column",
                            // flex: 1,
                            justifyContent: "center",
                            m: 1,
                            border: 2,
                            // pt: 3,
                        }}
                    >
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Ea nostrum explicabo accusantium, et illum
                        officiis tempore laboriosam vero adipisci facere in
                        earum deleniti ratione nisi, esse consequuntur aliquam
                        suscipit enim! Commodi culpa nam maxime quidem, at optio
                        eos asperiores reprehenderit, a minima accusantium
                        rerum, reiciendis molestiae esse expedita suscipit
                        error? Lorem ipsum, dolor sit amet consectetur
                    </Typography>
                    <Card 
                        sx={{ 
                            display: "flex", 
                            order: 1, 
                            flexDirection: "row", 
                            direction: "right", 
                            flex: "shrink", 
                            height: "50%", 
                            width: "20%"  }}
                    >
                        <CardMedia
                            component="img"
                            // height="100px"
                            // width="20%"
                            alt="portrait picture of myself"
                            image={Selfie}
                        />
                    </Card>
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
