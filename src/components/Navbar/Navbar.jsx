import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuButton, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import logo from '../../assets/logo.png';
import { Link, useLocation } from 'react-router-dom';
import useStyles from './styles';

const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();
    return (
        <>
          <AppBar position='fixed' className={classes.AppBar} color="inherit">
              <Toolbar>
                  <Typography component={Link} to="/" variant='h6' className={classes.title} color='inherit'>
                      <img src={logo} alt="Lit Store" height="25px" className={classes.image} />
                      Lit Store
                  </Typography>
                  <div className={classes.grow} />
                  {location.pathname == '/' && (
                  <div className={classes.button}>
                     <IconButton component={Link} to="/cart" aria-label='Show cart items' color='inherit'>
                        <Badge badgeContent={ totalItems } color='secondary'>
                            <ShoppingCart />
                        </Badge>
                     </IconButton>
                  </div> )}
              </Toolbar>
         </AppBar>  
        </>
    )
}

export default Navbar
