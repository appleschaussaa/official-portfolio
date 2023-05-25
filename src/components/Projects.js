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
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { project } from "../utils/Data";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: `rotate(${expand ? 180 : 0}deg)`,
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Project = () => {
  const [expandedIndex, setExpandedIndex] = React.useState(null);

  const handleExpandClick = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <Container sx={{ display: "flex", flexWrap: "wrap", }}>
      {project.slice(0, 4).map((project, index) => (
        <Box
          key={index}
          spacing={2}
          sx={{
            flex: "0 0 50%",
            display: "flex",
            justifyContent: "center",
            mb: 2,
            alignItems: "center",
          }}
        >
          <Card
            variant="outlined"
            sx={{
              height: expandedIndex === index ? "auto" : 400,
              width: 500,
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
            <CardActions disableSpacing sx={{ 
                marginTop: "auto",
                bottom: 0, 
            }}>
              <ExpandMore
                expand={expandedIndex === index}
                onClick={() => handleExpandClick(index)}
                aria-expanded={expandedIndex === index}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse
              in={expandedIndex === index}
              timeout="auto"
              unmountOnExit
            >
              <CardContent>
                <Typography paragraph>{project.fulltext}</Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Box>
      ))}
    </Container>
  );
};

export default Project;
