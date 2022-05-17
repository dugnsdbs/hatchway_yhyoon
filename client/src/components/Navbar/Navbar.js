import React, { useState, useEffect } from 'react'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import useStyles from './styles';
import { Main, AppBar, DrawerHeader, drawerWidth, openedMixin} from './addtional'
import MovieCreationRoundedIcon from '@mui/icons-material/MovieCreationRounded';
import { Link, useHistory, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';


const Navbar = () => {

  const [user , setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const userName = user?.result?.name.toUpperCase()

  const logout =() => {
    dispatch({ type: "LOGOUT"})
    history.push('/')
    setUser(null)
    
  }

  useEffect(()=> {
    const token = user?.token;
    if(token){
      const decodedToken = decode(token);

      if(decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')))
  },[location])

  return (
    <Box sx={{ display: 'flex' }}>
      {/* <CssBaseline /> */}
      <AppBar position="fixed" open={open} className={classes.AppbarColor}>
        <Toolbar>
          {user && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          )}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
            Movie Start!!
          </Typography>
          { user? (
          <>
            <Typography className={classes.userName}>WELCOME!~  {userName}</Typography>
            {/* <Button color="inherit" component={Link} to="/cart"><ShoppingCartTwoToneIcon /></Button> */}
            <Button color="inherit" component={Link} to="/" onClick={logout}>Logout</Button>
          </>
          ) : 
            <Button color="inherit" component={Link} to="/auth">Login</Button>
          }
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
           <ListItem  disablePadding>
              <ListItemButton component={Link} to="/">
              <HomeIcon color="primary" className={classes.buttonIcon}/>
                <ListItemText className={classes.buttonText} >
                Home
                </ListItemText>
              </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem  disablePadding>
              <ListItemButton component={Link} to="/item">
                <MovieCreationRoundedIcon className={classes.buttonIcon}/>
                <ListItemText className={classes.buttonText} >
                Movie List
                </ListItemText>
              </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem  disablePadding>
              <ListItemButton component={Link} to="/posts">
                <MovieCreationRoundedIcon className={classes.buttonIcon}/>
                <ListItemText className={classes.buttonText} >
                Share Movie
                </ListItemText>
              </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
      </Main>
    </Box>
  );
}


export default Navbar