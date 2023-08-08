import React from "react";
import { Box, Container, Typography, Divider, List, ListItem, ListItemText } from "@mui/material";
import { jobHistory, schoolHistory } from "../../utils/ResumeData";

const Resume = () => {
    return (
        <Container
            sx={{
                display: "flex",
                justifyContent: "space-evenly",
                border: 1,
                height: "70vh",
                px: 50,
                // flexDirection: "column",
            }}
        >
            {/* {resume.map((job, index) => (
                <Box key={index} sx={{ border: 1, width: 350, textAlign: "center" }}>
                    <Typography variant="h5" sx={{ mb: 3 }}>
                        Job History
                    </Typography>
                    <Typography sx={{ textAlign: "left", ml: 1 }}>
                        {job.company}
                    </Typography>
                    <Typography sx={{ textAlign: "left", ml: 1 }}>
                        {job.title}
                    </Typography>
                    <Typography sx={{ textAlign: "left", ml: 1 }}>
                        {`${job.startDate} - ${job.endDate}`}
                    </Typography>
                    <Typography sx={{ textAlign: "left", ml: 1 }}>
                        {job.description}
                    </Typography>
                </Box>
            ))} */}
            <Box sx={{ border: 1, width: 350, textAlign: "center", pt: 2, }}>
                <Typography variant="h5" sx={{ mb: 3 }}>
                    Job History
                </Typography>
                {jobHistory.map((job, index) => (
                    <>
                        <Typography
                        variant="h6"
                            key={index}
                            sx={{ 
                                textAlign: "left", 
                                ml: 2, 
                                mt: 2, 
                                textDecorationLine: "underline" 
                            }}
                        >
                            {`${job.company}`}
                        </Typography>
                        <Typography
                            key={index}
                            sx={{ textAlign: "left", ml: 2, mb: 2, display: "flex",
                            flexDirection: "column", }}
                        >
                            {`${job.title}`}
                            <br></br>
                            {`${job.startDate} - ${job.endDate}`}
                            <br></br>
                            {`Job description: ${job.description}`}
                            <Divider />
                        </Typography>
                    </>
                ))}
            </Box>
            <Box sx={{ border: 1, width: 350, textAlign: "center", pt: 2, }}>
                <Typography variant="h5" sx={{ mb: 3 }}>
                    Education
                </Typography>
                {schoolHistory.map((school, index) => (
                    <>
                        <Typography
                        variant="h6"
                            key={index}
                            sx={{ 
                                textAlign: "left", 
                                ml: 2, 
                                mt: 2, 
                                textDecorationLine: "underline" 
                            }}
                        >
                            {`${school.name}`}
                        </Typography>
                        <Typography
                            key={index}
                            sx={{ textAlign: "left", ml: 2, mb: 2, display: "flex",
                            flexDirection: "column", }}
                        >
                            {/* {`${job.title}`}
                            <br></br> */}
                            {`${school.startDate} - ${school.endDate}`}
                            <br></br>
                            {`description: ${school.special}`}
                            <Divider />
                        </Typography>
                    </>
                ))}
            </Box>
            <Box
                sx={{
                    border: 1,
                    width: 350,
                    mx: 0,
                    px: 0,
                    pt: 2,
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Box
                    sx={{
                        border: 1,
                        height: "60%",
                        width: 350,
                        mb: 2,
                        flex: 1,
                        textAlign: "center",
                    }}
                >
                    <Typography variant="h5" sx={{ mb: 3, }}>
                        {" "}
                        Skills{" "}
                    </Typography>
                    <List>
                    <ListItem sx={{ textAlign: "left", }}>
                        <ListItemText sx={{  }}>
                        Snowboarding, Backpacking
                        </ListItemText>
                    </ListItem>
                    </List>
                </Box>
                <Box
                    sx={{
                        border: 1,
                        height: "40%",
                        width: 350,
                        flex: 2,
                        textAlign: "center",
                    }}
                >
                    <Typography variant="h5" sx={{ mb: 3 }}>
                        {" "}
                        Interests & Hobbies{" "}
                    </Typography>
                    <Typography sx={{ textAlign: "left", ml: 1 }}>
                        This is for my interests and hobbies
                    </Typography>
                </Box>
            </Box>
            {/* <Box sx={{ border: 1, maxWidth: 300, minWidth: 280, }}>
                <Typography variant="h5">
                    {" "}
                    Feels like somethings missing{" "}
                </Typography>
                <Typography>This is for my "fill in later"</Typography>
            </Box> */}
        </Container>
    );
};

export default Resume;