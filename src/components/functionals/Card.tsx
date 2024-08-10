import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Container, Grid } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { fetchGetCharacters, selectCharacters } from '../../store/modules/charactersSlice';
import { useEffect } from 'react';




export default function CardContainer() {
    const characters = useAppSelector(selectCharacters)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchGetCharacters()) 
    },[dispatch])

    console.log(characters.payload);
    

  return (
        <Container fixed component='section' sx={{marginTop: '2rem'}}> 
                <Box sx={{ width: '100%' }}>
                    <Grid gap={5} justifyContent="center" container>
                        {characters.payload.map((character) => (
                            <Card key={character.id}  sx={{ minWidth: 200, backgroundColor:'#3a3a3a', color:'#ffff'}}> 
                                <CardMedia
                                    sx={{ height: 250 }}
                                    image={character.imageUrl}
                                    title={character.firstName}
                                    />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {character.firstName}
                                    </Typography>
                                    <Typography variant="body2" color="white">
                                        {character.lastName}
                                    </Typography>
                                    <Typography variant="body2" color="white">
                                         {character.family}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Favorite</Button>
                                </CardActions>
                            </Card>
                        ))}
                    </Grid>
                </Box>
        </Container>
  );
}
