import React from "react";
import { Box, TextField, Typography, Button, Container } from "@mui/material";

const Contact = () => {
    return (
        <Container>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "left",
                    // justifyContent: "center",
                    height: "10vh",
                    border: 1,
                    borderRadius: 2,
                    ml: 2,
                    p: 2,
                }}
            >
                <Typography
                    variant="h4"
                    component="h4"
                    sx={{ textAlign: "center", m: 0 }}
                >
                    Contact Page
                </Typography>
                <Typography
                    variant="h5"
                    component="h5"
                    sx={{ textAlign: "center", m: 2 }}
                >
                    Feel free to reach out!
                </Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "left",
                    // justifyContent: "center",
                    height: "60vh",
                    border: 1,
                    borderRadius: 2,
                    ml: 2,
                    p: 2,
                }}
            >
                <TextField
                    required
                    id="filled-required"
                    label="First Name"
                    variant="filled"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        width: 300,
                        border: 1,
                        borderRadius: 2,
                        my: 1,
                        ml: 2,
                    }}
                />
                <TextField
                    required
                    id="filled-required"
                    label="Last Name"
                    variant="filled"
                    sx={{
                        width: 300,
                        border: 1,
                        borderRadius: 2,
                        my: 1,
                        ml: 2,
                    }}
                />
                <TextField
                    id="filled-multiline-static"
                    label="Feedback"
                    multiline
                    rows={10}
                    variant="filled"
                    sx={{
                        width: 500,
                        border: 1,
                        borderRadius: 2,
                        my: 1,
                        ml: 2,
                    }}
                />
                <Button
                    variant="contained"
                    color="primary"
                    sx={{ width: "10%", my: 2, ml: 2 }}
                >
                    Submit
                </Button>
            </Box>
        </Container>
    );
};

export default Contact;
