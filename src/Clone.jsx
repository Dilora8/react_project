import { Grid, Typography, Button, AppBar, Toolbar, IconButton } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';


function Clone() {
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
          <Typography variant="h2" sx={{ mb: 2 }}>
            Heading 1
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget metus convallis dapibus eu eget metus.
          </Typography>
          <Button variant="contained" color="primary">
            Call to Action
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Heading 2
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Duis euismod tellus vel dolor pharetra, a interdum tellus rutrum. Nullam feugiat mi sapien, non tincidunt neque blandit non.
          </Typography>
          <Button variant="outlined" color="secondary">
            Learn More
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Heading 3
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Quisque varius tellus a libero hendrerit, nec sagittis massa rutrum. Vivamus ac tristique enim, id malesuada risus.
          </Typography>
          <Button variant="contained" color="primary" size="small">
            Sign Up
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Clone;
