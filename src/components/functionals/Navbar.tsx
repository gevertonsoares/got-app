import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

export default function Navbar() {
  return (
      <AppBar color='transparent' component='header' position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 5 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Game Of Thrones APP
          </Typography>
          <Button  size='medium' color="primary" sx={{ mr: 5 }}> <b>Show Favorites</b> </Button>
        </Toolbar>
      </AppBar>
  );
}