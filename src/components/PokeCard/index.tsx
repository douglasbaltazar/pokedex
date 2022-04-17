import { Box, Card, CardContent, CardHeader, Typography } from '@mui/material';
import React from 'react';
import { IPokemon } from 'types/Pokemon';

type Props = {
    pokemon: IPokemon
}

function PokeCard({pokemon}: Props) {
  return (
      <Box>
          <Card>
                <CardHeader 
                    title={pokemon.name}
                />
                <CardContent>
                    <Box>
                        <Typography
                            variant='body2'
                        >
                            {pokemon.name}
                        </Typography>
                    </Box>
                </CardContent>
          </Card>
      </Box>
  );
}

export default PokeCard;