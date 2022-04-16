import { Container, Typography, Box } from "@mui/material";
import React from "react";

// import { Container } from './styles';

const Home: React.FC = () => {
    return (
        <Container
            sx={{
                height: "100vh",
            }}
            maxWidth="lg"
        >
            <Box
                p={1}
            >
                <Typography variant="h4">Listagem Pokemons</Typography>
                
            </Box>
        </Container>
    );
};

export default Home;
