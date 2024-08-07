import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Container, Grid } from '@mui/material';

export default function CardContainer() {
  return (
    <Container fixed component='section' sx={{marginTop: '4rem'}}>  
        <Box>
            <Grid container spacing={2}>
                <Card sx={{ minWidth: 200 }}> 
                <CardMedia
                    sx={{ height: 140 }}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="green iguana"
                    />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        nome
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        sobrenome
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                </CardActions>
                </Card>
            </Grid>
        </Box>
    </Container>
  );
}
