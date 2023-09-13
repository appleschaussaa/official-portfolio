import React, { useRef } from "react";
import { useState } from "react";
import { IconButton, Icon, Snackbar } from "@mui/material";
import { mdiContentCopy } from '@mdi/js';

const CopyToClipboardButton = () => {
    const textRef = useRef(null);
    const [open, setOpen] = useState(false);

    const handleCopy = () => {
        const textElement = textRef.current;

        if (textElement) {
            textElement.select();
            document.execCommand("copy");
            setOpen(true);
        }
    };

    return (
        <>
            <IconButton onClick={handleCopy}>
                <Icon
                    alt={"click here to copy"}
                    path={mdiContentCopy}
                    size={1}
                />
            </IconButton>
            <Snackbar
                open={open}
                message="Copied to Clipboard"
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                autoHideDuration={2000}
                onClose={() => setOpen(false)}
            />
        </>
    );
};

export default CopyToClipboardButton;