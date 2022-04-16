import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { AccountCircle, CatchingPokemon } from '@mui/icons-material'

import React from "react";

function Navbar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <CatchingPokemon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Pokedex
                </Typography>
                <Button color="warning" variant='outlined' href="http://github.com/douglasbaltazar">
                    <AccountCircle /> /douglasbaltazar</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
