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
    Divider,
    Typography,
    Modal,
    Dialog
} from "@mui/material";
import { contactLinks } from "../../utils/ContactData";
// import theme from "../../utils/Theme";

const iconMappings = {
    email: mdiEmailPlusOutline,
    github: mdiGithub,
    linkedin: mdiLinkedin,
};

const Contact = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Container sx={{ pl: 15, pt: 10 }}>
            <Box
                sx={{
                    height: "fit-content",
                    width: 200,
                    backgroundColor: "#EBE8FC",
                    boxShadow: 6,
                    ml: 7
                    // border: 2,
                }}
            >
                <List>
                    {contactLinks.map((contacts, index) => {
                        const label = Object.keys(contacts)[0];
                        const link = contacts[label];
                        const icon = iconMappings[label]; // Get the correct icon from iconMappings

                        return (
                            <ListItem key={index}>
                                <ListItemButton onClick={handleOpen}>
                                    <ListItemIcon>
                                        {label === "email" ? (
                                            <a
                                                href={`mailto:${link}`}
                                                // href={`mailto:${contactLinks.email}`}
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
                                        <Dialog
                                                open={open}
                                                onClose={handleClose}
                                                aria-labelledby="modal-modal-title"
                                                aria-describedby="modal-modal-description"
                                        >

                                        </Dialog>
                                    </ListItemIcon>
                                    <ListItemText primary={label} />
                                    {/* <Typography>
                                        Hello there
                                    </Typography> */}
                                </ListItemButton>
                            </ListItem>
                        );
                    })}
                </List>
            </Box>
        </Container>
    );
};

export default Contact;
