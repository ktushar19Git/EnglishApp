import React from 'react'
//import logoheader from '../images/Logo.jpg'
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Avatar } from '@material-ui/core';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import Menu from './Menu'
import SearchBar from './SearchBar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


function Header()
{
  const classes = useStyles();
    const [checked, setChecked] = React.useState(false);

    const toggleChecked = () => {
        setChecked((prev) => !prev);
      };
    return(

    <div class="Logo-main-Div">
                <div>
                  <Grid item xs={12} sm={12}>
                      <SearchBar></SearchBar>
                  </Grid>
                </div>
                <div class="log-section">
                  <Grid container>
                      <Grid item xs={12} sm={1} >
                            <div class="CE-logo">
                            
                            </div>
                      </Grid>
                      <Grid item xs={12} sm={11} >
                        
                        <Menu></Menu>
                      </Grid>
                    </Grid>
                </div>
                <div>
                  <Grid item xs={12} sm={12}>
                          <div class="bg-banner">
                            </div>
                  </Grid>
                </div>  
                
                
                
                

    </div>

       


       
    )
}

export default Header