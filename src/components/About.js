import React from "react";
import { Box, Container, Typography } from "@mui/material";

const About = () => {
    return (
        <>
            <Container
                sx={{
                    border: 1,
                    borderRadius: 3,
                    // display: "inline-flex",
                    direction: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 4/5,
                }}
            >
                <Typography
                    variant="h4"
                    component="h4"
                    sx={{
                        textAlign: "center",
                        borderRadius: 3,
                        m: 2,
                    }}
                >
                    About Me page
                </Typography>
                <Typography sx={{ textAlign: "center", }}>Lorem</Typography>
                <Typography sx={{ textAlign: "center", }}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea
                    nostrum explicabo accusantium, et illum officiis tempore
                    laboriosam vero adipisci facere in earum deleniti ratione
                    nisi, esse consequuntur aliquam suscipit enim! Commodi culpa
                    nam maxime quidem, at optio eos asperiores reprehenderit, a
                    minima accusantium rerum, reiciendis molestiae esse expedita
                    suscipit error? Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Ea nostrum explicabo accusantium, et illum
                    officiis tempore laboriosam vero adipisci facere in earum
                    deleniti ratione nisi, esse consequuntur aliquam suscipit
                    enim! Commodi culpa nam maxime quidem, at optio eos
                    asperiores reprehenderit, a minima accusantium rerum,
                    reiciendis molestiae esse expedita suscipit error? Lorem
                    ipsum, dolor sit amet consectetur adipisicing elit. Ea
                    nostrum explicabo accusantium, et illum officiis tempore
                    laboriosam vero adipisci facere in earum deleniti ratione
                    nisi, esse consequuntur aliquam suscipit enim! Commodi culpa
                    nam maxime quidem, at optio eos asperiores reprehenderit, a
                    minima accusantium rerum, reiciendis molestiae esse expedita
                    suscipit error? Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Ea nostrum explicabo accusantium, et illum
                    officiis tempore laboriosam vero adipisci facere in earum
                    deleniti ratione nisi, esse consequuntur aliquam suscipit
                    enim! Commodi culpa nam maxime quidem, at optio eos
                    asperiores reprehenderit, a minima accusantium rerum,
                    reiciendis molestiae esse expedita suscipit error? Lorem
                    ipsum, dolor sit amet consectetur adipisicing elit. Ea
                    nostrum explicabo accusantium, et illum officiis tempore
                    laboriosam vero adipisci facere in earum deleniti ratione
                    nisi, esse consequuntur aliquam suscipit enim! Commodi culpa
                    nam maxime quidem, at optio eos asperiores reprehenderit, a
                    minima accusantium rerum, reiciendis molestiae esse expedita
                    suscipit error? Ea nostrum explicabo accusantium, et illum
                    officiis tempore laboriosam vero adipisci facere in earum
                    deleniti ratione nisi, esse consequuntur aliquam suscipit
                    enim! Commodi culpa nam maxime quidem, at optio eos
                    asperiores reprehenderit, a minima accusantium rerum,
                    reiciendis molestiae esse expedita suscipit error? Lorem
                    ipsum, dolor sit amet consectetur adipisicing elit. Ea
                    nostrum explicabo accusantium, et illum officiis tempore
                    laboriosam vero adipisci facere in earum deleniti ratione
                    nisi, esse consequuntur aliquam suscipit enim! Commodi culpa
                    nam maxime quidem, at optio eos asperiores reprehenderit, a
                    minima accusantium rerum, reiciendis molestiae esse expedita
                    suscipit error? Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Ea nostrum explicabo accusantium, et illum
                    officiis tempore laboriosam vero adipisci facere in earum
                    deleniti ratione nisi, esse consequuntur aliquam suscipit
                    enim! Commodi culpa nam maxime quidem, at optio eos
                    asperiores reprehenderit, a minima accusantium rerum,
                    reiciendis molestiae esse expedita suscipit error?
                </Typography>
            </Container>
        </>
    );
};

export default About;
