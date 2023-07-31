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
import { project } from "../utils/ProjectData";

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
  const [expandedIndexes, setExpandedIndexes] = React.useState([]);

  const handleExpandClick = (index) => {
    setExpandedIndexes((prevIndexes) => {
      if (prevIndexes.includes(index)) {
        return prevIndexes.filter((i) => i !== index);
      } else {
        return [...prevIndexes, index];
      }
    });
  };

  return (
    <Container sx={{ display: "flex", flexWrap: "wrap" }}>
      {project.slice(0, 4).map((project, index) => (
        <Box
          key={index}
          spacing={2}
          sx={{
            flex: "0 0 calc(50% - 16px)",
            display: "flex",
            justifyContent: "center",
            mb: 2,
            alignItems: "center",
            "@media (min-width: 600px)": {
              flex: "0 0 calc(50% - 8px)",
              maxWidth: "calc(50% - 8px)",
            },
          }}
        >
          <Card
            variant="outlined"
            sx={{
              height: expandedIndexes.includes(index) ? "auto" : "minContent",
              width: 550,
              border: 1,
              boxShadow: "10px -5px 5px black",
            }}
          >
            <CardMedia
              component="img"
              height="230"
              width="200px"
              image={project.image}
              alt={project.alt}
            />
            <CardContent
              sx={{
                maxHeight: expandedIndexes.includes(index) ? "50%" : 150,
                overflow: "auto",
                backgroundColor: "#FEF9E9",
              }}
            >
              <Typography variant="body2" color="text.secondary">
                {project.maintext}
              </Typography>
            </CardContent>
            <CardActions
              disableSpacing
              sx={{
                marginTop: "auto",
                bottom: 0,
                backgroundColor: "#FEF9E9",
              }}
            >
              <ExpandMore
                expand={expandedIndexes.includes(index)}
                onClick={() => handleExpandClick(index)}
                aria-expanded={expandedIndexes.includes(index)}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse
              in={expandedIndexes.includes(index)}
              timeout="auto"
              unmountOnExit
              sx={{
                maxHeight: expandedIndexes.includes(index) ? "90%" : 0,
                overflow: "hidden",
                transition: "max-height 0.3s ease-out",
              }}
            >
              <CardContent sx={{ backgroundColor: "#FEF9E9", }}>
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
