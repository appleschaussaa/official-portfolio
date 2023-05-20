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
    Grid,
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
        <div>
            <Grid container>
			{/* pacing={}> */}
                {project.slice(0, 4).map((project, index) => (
                    <Grid item xs={6} md={6} key={index}>
                        <Card
                            variant="outlined"
                            sx={{ flexDirection: "row", Height: 400, width: 500, margin: 1 }}
                        >
                            <CardMedia
                                component="img"
                                height="250"
								// width="200px"
                                image={project.image}
                                alt={project.alt}
                            />
                            <CardContent>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
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
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Project;
