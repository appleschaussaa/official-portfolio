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
                    sx={
                        {
                            // display: "flex",
                            // flexDirection: "column",
                        }
                    }
                >
                    <Typography
                        variant="h4"
                        component="h4"
                        sx={{
                            textAlign: "center",
                            borderRadius: 3,
                            m: 2,
                            width: "100%",
                        }}
                    >
                        About Me page
                    </Typography>
                    <Typography sx={{ textAlign: "center" }}>Lorem</Typography>
                </Box>
                <Box 
                    sx={{ 
                        display: "flex",
                        spacing: 0, 
                        }}
                >
                    <Typography
                        sx={{
                            height: "500px",
                            width: "40%",
                            display: "flex",
                            // order: 1,
                            // flexDirection: "row",
                            direction: "left",
                            // flex: 1,
                            // justifyContent: "center",
                            m: 1,
                            border: 2,
                            pt: 5,
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
                        sx={{ width: "200px", height: "200px" }}
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
