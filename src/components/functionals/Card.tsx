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
    <Container fixed component='section' sx={{marginTop: '4rem'}}> 
        <Box>
            <Grid container spacing={2}>
                {characters.payload.map((character) => (
                    <Card key={character.id} sx={{ minWidth: 200 }}> 
                    <CardMedia
                        sx={{ height: 140 }}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="green iguana"
                        />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {character.firstName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            sobrenome
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                    </CardActions>
                    </Card>
                ))}
            </Grid>
        </Box>
    </Container>
  );
}
