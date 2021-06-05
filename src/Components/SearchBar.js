import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { FiPhoneCall } from "react-icons/fi";
import { BsEnvelope } from "react-icons/bs";
import { ImSearch} from "react-icons/im";
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useHistory } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import { ImNext } from 'react-icons/im';
import { FcNext } from 'react-icons/fc';
import { GrNext } from 'react-icons/gr'
import { GoTriangleRight } from 'react-icons/go'


const useStyles = makeStyles((theme) => ({
     title:{
        color:'white',
        marginLeft:"10px",
        display:"flex",
        fontFamily:"Arial,Helvetica,sans-serif",
        fontWeight:"bold",
        flexGrow:1
    },
    searchIcon: {
      height: '100%',
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      color:'black',
      marginLeft:'150px'
  },
      text1:{
        width:'100%',
        padding:'5px',
        borderRadius:'20px',
        border:'0px none',
        }
}));
export default function SearchBar() {
    const classes = useStyles();
    const history = useHistory();

    async function onLoginPage() {
    
        history.push("/LoginRegister");
      
    }

    return (
        <div class="top-searchbar">

                <div >
                        <Grid container>
                            <Grid item xs={12} sm={10} >
                                <div>
                                    <div>
                                    Call Us +91 9108705205 

                                    </div>
                                    
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={2} >
                                <div >
                                <Button  id="regmenu-btn" 
                                        style={{
                                          color:'black',
                                          fontWeight:'bold'
                                        }} onClick={() => {
                onLoginPage();
              }}><ExitToAppIcon></ExitToAppIcon>Login</Button>
                                </div>
                            </Grid>
                        </Grid>
                    </div>

            
        </div>
    )
}
