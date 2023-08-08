import React from "react";
import { Box, Container, Paper, Typography } from "@mui/material";

const Contact = () => {
    return (
        <Container sx={{ pl: 15, pt: 10 }}>
            <Box
                sx={{
                    height: 380,
                    width: 600,
                    backgroundColor: "#ffff"
                    // border: 2,
                }}
            >
                <Paper
                    // variant="outlined"
                    // elevation={30}
                    sx={{
                        height: 380,
                        width: 600,
                        background: "#483D8B99",
                        // opacity: 0.5,
                        pointerEvents: "none",
                        borderRadius: 2,
                        border: 1,
                        borderColor: "#ffff" 
                    }}
                >
                    <Typography variant="h6"
                        sx={{ 
                            // opacity: 1,
                            p: 2,
                            color: "white"
                        }}
                    >
                        Hello can you read this? What does a comma do, this apparently
                    </Typography>
                </Paper>
            </Box>
        </Container>
    );
};

export default Contact;
