import { Grid } from '@mui/material';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import Clone from './Clone';


function App() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My App
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Grid container spacing={2} sx={{ p: 3 }}>
        <Grid item xs={12} sm={6} md={4}>
          {/* Your content goes here */}
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          {/* Your content goes here */}
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          {/* Your content goes here */}
        </Grid>
      </Grid>
      <Clone/>
    </div>
  );
}

export default App;
