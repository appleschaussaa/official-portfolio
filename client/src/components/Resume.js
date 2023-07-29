import React from "react";
import { Box, Container, Typography } from "@mui/material";

const Resume = () => {
    return (
        <Container
            sx={{
                display: "flex",
                justifyContent: "space-evenly",
                border: 1,
                height: "80vh",
                // flexDirection: "column",
            }}
        >
            <Box sx={{ border: 1, maxWidth: 300 }}>
                <Typography variant="h5"> Job History </Typography>
                <Typography sx={{ flexDirection: "column" }}>
                    This is for my job history wser fawefw efWEF WEFefe
                    werfwefwe wefw efwef werf
                </Typography>
            </Box>
            <Box sx={{ border: 1, maxWidth: 300 }}>
                <Typography variant="h5"> Education </Typography>
                <Typography>This is for my education history</Typography>
            </Box>
            <Container sx={{ border: 1, maxWidth: 300, mx: 0, px: 0, display: "flex", flexDirection: "column" }}>
                <Box sx={{ border: 1, maxWidth: 300, mb: 2, flex: 1 }}>
                    <Typography variant="h5"> Skills </Typography>
                    <Typography>This is for my skills</Typography>
                </Box>
                <Box sx={{ border: 1, maxWidth: 300, flex: 2 }}>
                    <Typography variant="h5"> Interests & Hobbies </Typography>
                    <Typography>
                        This is for my interests and hobbies
                    </Typography>
                </Box>
            </Container>
            <Box sx={{ border: 1, maxWidth: 300 }}>
                <Typography variant="h5"> Feels like somethings missing </Typography>
                <Typography>This is for my "fill in later"</Typography>
            </Box>
        </Container>
    );
};

export default Resume;
