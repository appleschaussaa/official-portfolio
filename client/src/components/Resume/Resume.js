import React from "react";
import {
    Box,
    Container,
    Typography,
    Divider,
    List,
    ListItem,
    ListItemText,
} from "@mui/material";
import {
    jobHistory,
    schoolHistory,
    skillsHobbys,
} from "../../utils/ResumeData";

const Resume = () => {
    const [dense] = React.useState(true);

    return (
        <Container
            sx={{
                display: "flex",
                justifyContent: "space-evenly",
                border: 1,
                height: "70vh",
                // px: 50,
                // flexDirection: "column",
            }}
        >
            <Box 
                sx={{ 
                    border: 1, 
                    width: 350, 
                    textAlign: "center", 
                    pt: 2, 
                    backgroundColor: "#EBE8FC", 
                    borderRadius: 2, 
                    height: "fit-content" 
                }}
            >
                <Typography
                    variant="h4"
                    sx={{ 
                        mb: 3, 
                        textDecorationLine: "underline" 
                    }}
                >
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

                                    
                                textDecorationLine: "underline",
                            }}
                        >
                            {`${job.company}`}
                        </Typography>
                        <Typography
                            key={index}
                            sx={{
                                textAlign: "left",
                                ml: 2,
                                mb: 2,
                                display: "flex",
                                flexDirection: "column",
                            }}
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
            <Box 
                sx={{ 
                    border: 1, 
                    width: 350, 
                    textAlign: "center", 
                    pt: 2, 
                    backgroundColor: "#EBE8FC", 
                    borderRadius: 2, 
                    height: "fit-content" 
                }}
            >
                <Typography
                    variant="h4"
                    sx={{ 
                        mb: 3, 
                        textDecorationLine: "underline" 
                    }}
                >
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
                                textDecorationLine: "underline",
                            }}
                        >
                            {`${school.name}`}
                        </Typography>
                        <Typography
                            key={index}
                            sx={{
                                textAlign: "left",
                                ml: 2,
                                mb: 2,
                                display: "flex",
                                flexDirection: "column",
                            }}
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
                    height: "fit-content"
                }}
            >
                <Box
                    sx={{
                        border: 1,
                        borderRadius: 2,
                        height: "fit-content",
                        width: 350,
                        mb: 2,
                        // flex: 1,
                        textAlign: "center", 
                        backgroundColor: "#EBE8FC",
                        
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{ 
                            mb: 3, 
                            textDecorationLine: "underline"
                        }}
                    >
                        {" "}
                        Skills{" "}
                    </Typography>
                    <Typography sx={{ fontSize: "16px" }}
                    // variant="body1"
                    >
                    {skillsHobbys.map((item, index) => (
                        <List key={index} dense={dense} sx={{ fontSize: "16px" }}>
                            {item.skillsArray.map((skill, skillIndex) => (
                                <ListItem key={skillIndex} sx={{ fontSize: "16px" }}>
                                    <ListItemText primary={skill} sx={{ fontSize: "16px" }} />
                                </ListItem>
                            ))}
                        </List>
                    ))}
                    </Typography>
                </Box>
                <Box
                    sx={{
                        border: 1,
                        borderRadius: 2,
                        height: "fit-content",
                        width: 350,
                        flex: 2,
                        textAlign: "center", 
                        backgroundColor: "#EBE8FC",
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{ mb: 3, textDecorationLine: "underline" }}
                    >
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
