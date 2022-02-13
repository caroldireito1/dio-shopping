import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core/';
import Cart from './Cart';

const Header = () => {
    return(
        <Grid container direction="row" justify="space-between" alignItems="center" xs={12}>
            <Typography variant='h3'>
                Loja de Canecas The Office
            </Typography>
            <Link to="/">
                <Button button type="button" class="btn btn-outline-primary">Home</Button>
            </Link>
            <Link to="/contato">
                <Button cbutton type="button" class="btn btn-outline-primary">Contato</Button>
            </Link>
            <Cart />   

            
        </Grid>
    )
}

export default Header;
