import React from "react";
import { TextField, Typography, Grid, Button, Container } from "@mui/material";

const Contact = () => {
    return (
            <Grid sx= {{
                spacing: 1, 
                direction: "column", 
                border: 1, 
                borderRadius: 2}}>
                <Grid item  sx={{ m: 1 }}>
                    <Typography
                        variant="h4"
                        component="h4"
                        sx={{
                            textAlign: "center",
                            // borderRadius: 3,
                            m: 2,
                        }}
                    >
                        Contact Page
                    </Typography>
                    <Typography 
                        variant="h5"
                        component="h5" 
                        sx={{ m: 2 }}> Feel free to reach out! </Typography>
                </Grid>
                <Grid item sx={{ ml: 1 }}>
                    <TextField
                        required
                        id="filled-required"
                        label="First Name"
                        variant="filled"
                        sx={{ 
                            width: 300, 
                            border: 1, 
                            borderRadius: 2, 
                            m: 2, 
                        }}
                    />
                </Grid>
                <Grid item sx={{ m:1 }}>
                    <TextField
                        required
                        id="filled-required"
                        label="Last Name"
                        variant="filled"
                        sx={{ 
                            width: 300, 
                            border: 1, 
                            borderRadius: 2, 
                            m: 2, 
                        }}
                    />
                </Grid>
                <Grid item sx={{ ml: 1 }}>
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
                            m: 2, 
                        }}
                    />
                </Grid>
                <Grid item padding={1}>
                    <Button variant="contained" color="primary" 
                        sx={{ m: 2, mt: 0 }}>
                        Submit
                    </Button>
                </Grid>
            </Grid>
    );
};

export default Contact;
