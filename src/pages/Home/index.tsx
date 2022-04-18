import {
    Container,
    Box,
    Card,
    CardHeader,
    CardContent,
    Chip,
} from "@mui/material";
import React from "react";
import { useQueryGetPokemons } from "services/api/queries/useQueryGetPokemons";
import { IPokeType, PokeTypesData } from "types/PokeType";

// import { Container } from './styles';

const Home: React.FC = () => {
    const apiPokemons = useQueryGetPokemons();
    return (
        <Container
            sx={{
                height: "100vh",
            }}
            maxWidth="lg"
        >
            <Box p={2}>
                <Card
                    variant="outlined"
                    sx={{
                        backgroundColor: "transparent",
                    }}
                >
                    <CardHeader
                        title="Selecione o tipo de pokemon que você deseja buscar"
                        sx={{
                            color: "white",
                        }}
                    />
                    <CardContent>
                        <Box>
                            {PokeTypesData.data.map((type: IPokeType) => (
                                <Chip key={type.name} label={type.name} sx={{
                                    backgroundColor: type.color,
                                    margin: '3px',
                                    cursor: 'pointer',
                                    minWidth: '80px',
                                }} />
                            ))}
                        </Box>
                    </CardContent>
                </Card>
                <Card
                    elevation={3}
                    sx={{
                        backgroundColor: 'transparent',
                        marginTop: '20px'
                    }}
                >
                    <CardHeader 
                        title="Listagem Pokemons"
                        sx={{
                            color: 'white'
                        }}
                    />
                    <CardContent>
                    {apiPokemons.data?.results && apiPokemons.data.results.map((item: any) => (
                            <Box key={item.name}>
                                <h1>{item.name} </h1>
                            </Box>
                        ))}
                    </CardContent>
                </Card>
            </Box>
        </Container>
    );
};

export default Home;
