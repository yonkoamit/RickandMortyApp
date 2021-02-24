import React from 'react'
import Logo from './logo.png';

import { Card, CardContent, Grid, Typography } from '@material-ui/core';
const Footer = () => {
    return (
        <Grid container style={{justifyContent:"space-around"}}>
            <Grid item >
                <img src={Logo} alt='rick and morty logo' style={{height:"200px"}}/>
            </Grid>
            <Grid item > 
                  <Card style={{maxWidth:"500px",border:"none",boxShadow:"none"}}>
                      <CardContent>
                          <Typography variant="h6">
                              Rick and Morty is an American adult animated science fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's late-night programming block Adult Swim.
                          </Typography>
                      <hr/>
                      <Typography variant="h5">Made By: Amit Ranjan</Typography>
                      </CardContent>
                  </Card>   
             </Grid>
        </Grid>
    )
}

export default Footer
