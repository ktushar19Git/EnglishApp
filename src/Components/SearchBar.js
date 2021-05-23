import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { FiPhoneCall } from "react-icons/fi";
import { BsEnvelope } from "react-icons/bs";
import { ImSearch} from "react-icons/im";
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useHistory } from "react-router-dom";

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
        <div>
            <AppBar position="static">
                <Toolbar class="top-searchbar"> 
                    <div style={{display: "inherit",  transform: "translate(100%, 2%)"}}>
                    <div class="phone">
                        
                        <Typography className={classes.title}>Call Us +91 9108705205</Typography>
                    </div>                                            
                    
                    <div>
                    <Button  id="regmenu-btn" 
                                        style={{
                                          padding: "0px 10px 0px 0px !important",
                                          width: "280px !important",
                                          color:'white',
                                        }} onClick={() => {
                onLoginPage();
              }}><ExitToAppIcon></ExitToAppIcon>Login</Button>
                    </div>                
                    <div class="search" style={{position:"relative"}}>
                            <div className={classes.searchIcon}>
                                <ImSearch/>
                            </div>
                            <input type="text" className={classes.text1}/>
                    </div>
                    </div>
                </Toolbar> 
            </AppBar>
        </div>
    )
}
