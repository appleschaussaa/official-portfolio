import * as React from "react";
import { styled } from "@mui/material/styles";
import {
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    CardActions,
    Collapse,
    IconButton,
    Typography,
    Container,
    Grid,
    Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { project } from "../utils/Data";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
    }),
}));

const Project = () => {
    const [expanded, setExpanded] = React.useState([
        { expanded: false },
        { expanded: false },
        { expanded: false },
        { expanded: false },
    ]);

    const handleExpandClick = (index) => {
        setExpanded((prevExpanded) => {
            const newExpanded = [...prevExpanded];
            newExpanded[index] = { expanded: !newExpanded[index].expanded };
            return newExpanded;
        });
    };

    const createExpandHandler = (index) => () => {
        handleExpandClick(index);
    };

    return (
        // <div>
        // <Grid
        //     container
        //     spacing={0}
        //     sx={{ justifyContent: "center", alignItems: "center" }}
        // >
        // <Box
        //     sx={{ display: "flex"}}>
        <Container sx={{ display: "flex", flexWrap: "wrap" }}>
            {project.slice(0, 4).map((project, index) => (
                <Box
                    key={index}
                    sx={{
                        flex: "0 0 50%",
                        display: "flex",
                        justifyContent: "center",
                        mb: 2,
                    }}
                >
                    <Card
                        variant="outlined"
                        sx={{
                            // display: "flex",
                            Height: 400,
                            width: 500,
                            mb: 2,
                            // padding: 0,
                            // alignItems: "center",
                            // boxSizing: "border-box",
                            border: 2,
                        }}
                    >
                        <CardMedia
                            component="img"
                            height="250"
                            width="200px"
                            image={project.image}
                            alt={project.alt}
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                {project.maintext}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <ExpandMore
                                expand={expanded[index].expanded}
                                onClick={createExpandHandler(index)}
                                aria-expanded={expanded[index].expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse
                            in={expanded[index].expanded}
                            timeout="auto"
                            unmountOnExit
                        >
                            <CardContent>
                                <Typography paragraph>
                                    {project.fulltext}
                                </Typography>
                            </CardContent>
                        </Collapse>
                    </Card>
                </Box>
            ))}
        </Container>
        /* </Box> */
        // </Grid>
        // </div>
    );
};

export default Project;
