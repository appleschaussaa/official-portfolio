import * as React from "react";
import Icon from "@mdi/react";
import { mdiGithub, mdiLinkedin, mdiEmailPlusOutline } from "@mdi/js";
import {
    Box,
    Container,
    Link,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Popover,
    Typography,
} from "@mui/material";
import { contactLinks } from "../../utils/ContactData";

const iconMappings = {
    email: mdiEmailPlusOutline,
    github: mdiGithub,
    linkedin: mdiLinkedin,
};

const Contact = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedLabel, setSelectedLabel] = React.useState(null);

    const handleOpen = (event, label) => {
        setSelectedLabel(label);
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setSelectedLabel(null);
        setAnchorEl(null);
    };

    return (
        <Container sx={{ pl: 15, pt: 10 }}>
            <Box
                sx={{
                    height: "fit-content",
                    width: 200,
                    backgroundColor: "#EBE8FC",
                    boxShadow: 6,
                    ml: 7,
                    borderRadius: 2,
                }}
            >.
            0
                <List>
                    {contactLinks.map((contacts, index) => {
                        const label = Object.keys(contacts)[0];
                        const link = contacts[label];
                        const icon = iconMappings[label]; // Get the correct icon from iconMappings

                        return (
                            <ListItem key={index}>
                                <ListItemButton
                                    onClick={(event) =>
                                        handleOpen(event, label)
                                    }
                                >
                                    <ListItemIcon>
                                        {label === "email" ? (
                                            <a
                                                href={`mailto:${link}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                color="inherit"
                                                underline="none"
                                            >
                                                <Icon
                                                    alt={`${label} Icon`}
                                                    path={icon}
                                                    size={1}
                                                />
                                            </a>
                                        ) : (
                                            <Link
                                                href={link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                color="inherit"
                                                underline="none"
                                            >
                                                <Icon
                                                    alt={`${label} Icon`}
                                                    path={icon}
                                                    size={1}
                                                />
                                            </Link>
                                        )}
                                    </ListItemIcon>
                                    <ListItemText primary={label} />
                                </ListItemButton>
                                <Popover
                                    open={
                                        Boolean(anchorEl) &&
                                        selectedLabel === label
                                    }
                                    anchorEl={anchorEl}
                                    onClose={handleClose}
                                    anchorOrigin={{
                                        vertical: "bottom",
                                        horizontal: "center",
                                    }}
                                    transformOrigin={{
                                        vertical: "top",
                                        horizontal: "center",
                                    }}
                                >
                                    <Typography sx={{ p: 2, borderRadius: 2 }}>
                                        {selectedLabel}:
                                        {selectedLabel === "email"
                                            ? " robertschauss91@gmail.com"
                                            : selectedLabel === "github"
                                            ? " https://github.com/appleschaussaa"
                                            : selectedLabel === "linkedin"
                                            ? " www.linkedin.com/in/robert-apple-schauss"
                                            : null}
                                    </Typography>
                                </Popover>
                            </ListItem>
                        );
                    })};
                </List>
            </Box>
        </Container>
    );
};

export default Contact;
