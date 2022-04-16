import { ThemeProvider } from "@mui/system";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { blue, green, purple } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

function App() {
    const theme = createTheme({
        palette: {
            primary: {
                main: purple[900],
            },
            secondary: {
                main: blue[700],
            },
            background: {
                default: "#2c2c2c",
            },
        },
    });
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
