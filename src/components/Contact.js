import React from "react";
import { TextField, Typography, Grid, Button, Container } from "@mui/material";

const Contact = () => {
    return (
        <Container sx={{ m: 1 }}>
            <Grid spacing={2} direction="column" border={1} borderRadius={2}>
                <Grid item>
                    <Typography
                        variant="h4"
                        component="h4"
                        sx={{
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 3,
                            m: 1,
                        }}
                    >
                        Contact Page
                    </Typography>
                    <Typography sx={{ m: 1, }}>Feel free to reach out!</Typography>
                </Grid>
                <Grid item>
                    <TextField
                        required
                        id="filled-required"
                        label="First Name"
                        variant="filled"
                        sx={{ width: 300, border: 1, borderRadius: 2, m: 1, }}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        required
                        id="filled-required"
                        label="Last Name"
                        variant="filled"
                        sx={{ width: 300, border: 1, borderRadius: 2, m: 1, }}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        id="filled-multiline-static"
                        label="Feedback"
                        multiline
                        rows={10}
                        variant="filled"
                        sx={{ width: 500, border: 1, borderRadius: 2, m: 1, }}
                    />
                </Grid>
                <Grid item padding={1}>
                    <Button variant="contained" color="primary">
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Contact;
