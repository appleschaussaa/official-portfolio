import React, { useState, useEffect } from "react";
import { Box, TextField, Typography, Button, Container } from "@mui/material";
// import { UseableButton } from ".";

const Contact = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [feedback, setFeedback] = useState("");
    const [savedData, setSavedData] = useState(null);

    const handleSubmit = () => {
        // Create an object with the user input data
        const userInput = {
            firstName,
            lastName,
            feedback,
        };

        // Save the user input to state
        setSavedData(userInput);
    };

    useEffect(() => {
        console.log("Saved Data:", savedData);
      }, [savedData]);

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
                    id="FirstNameInput"
                    name="FirstNameInput"
                    label="First Name"
                    variant="filled"
                    // color="secondary"
                    // focused
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        width: 300,
                        border: 3,
                        borderColor: "#ffff",
                        borderRadius: 2,
                        my: 1,
                        ml: 2,
                        background: "#483D8B",
                        opacity: "75%",
                        "& label": {
                            color: "#ffffff",
                        },
                        "& input": {
                            color: "#ffffff",
                        },
                        "& .MuiInputBase-root": {
                            color: "#ffffff",
                        },
                    }}
                    InputLabelProps={{
                        focused: false,
                        sx: {
                            color: "#ffffff",
                        },
                    }}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <TextField
                    required
                    id="LastNameInput"
                    name="LastNameInput"
                    label="Last Name"
                    variant="filled"
                    // focused
                    sx={{
                        width: 300,
                        border: 3,
                        borderColor: "#ffff",
                        borderRadius: 2,
                        my: 1,
                        ml: 2,
                        background: "#483D8B",
                        opacity: "75%",
                        "& label": {
                            color: "#ffffff",
                        },
                        "& input": {
                            color: "#ffffff",
                        },
                        "& .MuiInputBase-root": {
                            color: "#ffffff",
                        },
                    }}
                    InputLabelProps={{
                        focused: false,
                        sx: {
                            color: "#ffffff",
                        },
                    }}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <TextField
                    id="FeedbackInput"
                    name="FeedbackInput"
                    label="Feedback"
                    multiline
                    rows={10}
                    variant="filled"
                    // focused
                    sx={{
                        width: 500,
                        border: 3,
                        borderColor: "#ffff",
                        borderRadius: 2,
                        my: 1,
                        ml: 2,
                        // color: "#483D8B",
                        background: "#483D8B",
                        opacity: "75%",
                        "& label": {
                            color: "#ffffff",
                        },
                        "& input": {
                            color: "#ffffff",
                        },
                        "& .MuiInputBase-root": {
                            color: "#ffffff",
                        },
                    }}
                    InputLabelProps={{
                        focused: false,
                        sx: {
                            color: "#ffffff",
                        },
                    }}
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                />
                <Button
                    variant="contained"
                    onClick={handleSubmit}
                    sx={{
                        width: "10%",
                        my: 2,
                        ml: 2,
                        backgroundColor: "#483D8B",
                        opacity: "75%",
                        color: "#ffff",
                    }}
                >
                    Submit
                </Button>
                {/* {savedData && (
                    <Box>
                        <Typography variant="h6">Saved Data:</Typography>
                        <Typography>{`First Name: ${savedData.firstName}`}</Typography>
                        <Typography>{`Last Name: ${savedData.lastName}`}</Typography>
                        <Typography>{`Feedback: ${savedData.feedback}`}</Typography>
                    </Box>
                )} */}
            </Box>
        </Container>
    );
};

export default Contact;
