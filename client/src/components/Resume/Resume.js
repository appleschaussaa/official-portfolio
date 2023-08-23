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
                    height: "fit-content",
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        mb: 3,
                        textDecorationLine: "underline",
                    }}
                >
                    Job History
                </Typography>
                {jobHistory.map((job, jobIndex) => (
                    <>
                        <div key={jobIndex}>
                            <Typography
                                variant="h6"
                                // key={index}
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
                                // key={index}
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
                        </div>
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
                    height: "fit-content",
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        mb: 3,
                        textDecorationLine: "underline",
                    }}
                >
                    Education
                </Typography>
                {schoolHistory.map((school, schoolIndex) => (
                    <>
                        <div key={schoolIndex}>
                            <Typography
                                variant="h6"
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
                        </div>
                    </>
                ))}
            </Box>
            <Box
                sx={{
                    border: 1,
                    // width: 350,
                    width: 175,
                    mx: 0,
                    px: 0,
                    pt: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: "fit-content",
                }}
            >
                <Box
                    sx={{
                        border: 1,
                        borderRadius: 2,
                        height: "fit-content",
                        width: 175,
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
                            textDecorationLine: "underline",
                        }}
                    >
                        {" "}
                        Skills{" "}
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ fontSize: "16px" }}
                        // variant="body1"
                    >
                        {skillsHobbys.map((item, index) => (
                            <div key={index}>
                                <List dense={dense} sx={{ fontSize: "16px" }}>
                                    {item.skillsArray.map(
                                        (skill, skillIndex) => (
                                            <ListItem
                                                key={skillIndex}
                                                sx={{ fontSize: "16px" }}
                                            >
                                                <ListItemText
                                                    primary={skill}
                                                    sx={{ fontSize: "16px" }}
                                                />
                                            </ListItem>
                                        )
                                    )}
                                </List>
                            </div>
                        ))}
                    </Typography>
                </Box>
                <Box
                    sx={{
                        border: 1,
                        borderRadius: 2,
                        height: "fit-content",
                        width: 175,
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
                            textDecorationLine: "underline",
                        }}
                    >
                        {" "}
                        Interests & Hobbies{" "}
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ fontSize: "16px" }}
                        // variant="body1"
                    >
                        {skillsHobbys.map((item, index) => (
                            <div key={index}>
                                <List dense={dense} sx={{ fontSize: "16px" }}>
                                    {item.interestHobbyArray.map(
                                        (interestHobby, interestHobbyIndex) => (
                                            <ListItem
                                                key={interestHobbyIndex}
                                                sx={{ fontSize: "16px" }}
                                            >
                                                <ListItemText
                                                    primary={interestHobby}
                                                    sx={{ fontSize: "16px" }}
                                                />
                                            </ListItem>
                                        )
                                    )}
                                </List>
                            </div>
                        ))}
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
};

export default Resume;
