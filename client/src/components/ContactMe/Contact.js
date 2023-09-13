import * as React from "react";
import Icon from "@mdi/react";
import {
    mdiGithub,
    mdiLinkedin,
    mdiEmailPlusOutline,
    // mdiContentCopy,
} from "@mdi/js";
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
    IconButton,
} from "@mui/material";
import { contactLinks } from "../../utils/ContactData.js";
import { CopyToClipboardButton } from "../Index"

const iconMappings = {
    email: mdiEmailPlusOutline,
    github: mdiGithub,
    linkedin: mdiLinkedin,
};

const Contact = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedLabel, setSelectedLabel] = React.useState(null);
    // const textElementRef = React.useRef(null);

    const handleOpen = (event, label) => {
        setSelectedLabel(label);
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setSelectedLabel(null);
        setAnchorEl(null);
    };

    // const copybutton = () => {
    //     const textElement = textElementRef.current;

    //     if (textElement) {
    //         const range = document.createRange();
    //         range.selectNode(textElement);

    //         window.getSelection().removeAllRanges();
    //         window.getSelection().addRange(range);

    //         document.execCommand("copy");

    //         window.getSelection().removeAllRanges();

    //         alert("Text copied to clipboard!");
    //     }
    // };

    return (
        <Container sx={{ pl: 20, pt: 8, border: 1 }}>
            <Box
                sx={{
                    height: "fit-content",
                    width: 200,
                    backgroundColor: "#EBE8FC",
                    boxShadow: 6,
                    ml: 7,
                    borderRadius: 2,
                    border: 1,
                    // py: 1,
                }}
            >
                <List sx={{ py: 4 }}>
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
                                    <ListItemText
                                        // component={Typography}
                                        // variant="h6"
                                        // primary={label}
                                        primary={
                                            <Typography sx={{}} variant="h5">
                                                {label}
                                            </Typography>
                                        }
                                    />
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
                                    sx={{ display: "flex", flexDirection: "row" }}
                                >
                                    <Typography
                                        variant="h6"
                                        sx={{ p: 2, borderRadius: 2 }}
                                        // ref={textElementRef}
                                    >
                                        {/* {selectedLabel} */}
                                        {/* {selectedLabel === "email"
                                            ? " robertschauss91@gmail.com"
                                            : selectedLabel === "github"
                                            ? " https://github.com/appleschaussaa"
                                            : selectedLabel === "linkedin"
                                            ? " www.linkedin.com/in/robert-apple-schauss"
                                            : null} */}
                                        {selectedLabel === "email"
                                            ? contactLinks.find(
                                                  (obj) => obj.email
                                              ).email
                                            : selectedLabel === "github"
                                            ? contactLinks.find(
                                                  (obj) => obj.github
                                              ).github
                                            : selectedLabel === "linkedin"
                                            ? contactLinks.find(
                                                  (obj) => obj.linkedin
                                              ).linkedin
                                            : selectedLabel === "others"
                                            ? contactLinks.find(
                                                  (obj) => obj.others
                                              ).others
                                            : null}
                                    </Typography>
                                    {/* <IconButton onClick={copybutton}>
                                        <Icon
                                            alt="click to copy"
                                            path={mdiContentCopy}
                                            size={1}
                                            font={1}
                                        />
                                        Click here to copy
                                    </IconButton> */}
                                    <CopyToClipboardButton />
                                </Popover>
                            </ListItem>
                        );
                    })}
                </List>
            </Box>
        </Container>
    );
};

export default Contact;
