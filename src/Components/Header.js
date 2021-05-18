import React from 'react'
import logoheader from '../images/Logo.jpg'
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Avatar } from '@material-ui/core';


function Header()
{
    const [checked, setChecked] = React.useState(false);

    const toggleChecked = () => {
        setChecked((prev) => !prev);
      };
    return(

    <div style={{textAlign:'left',}} >
                <div class="CE-logo"></div>
                
                
                <a href="LoginRegister" style={{textAlign:'right',width:'100%',paddingLeft:'500px'}}>Login/Register</a>   
                <a href="Subject" style={{textAlign:'right',width:'100%',paddingLeft:'20px'}}>Admin Panel</a>   


                <FormControlLabel style={{paddingLeft:'20px'}}
                        control={<Switch checked={checked} onChange={toggleChecked} />}
                        label="Normal"
                    />
                

    </div>

       


       
    )
}

export default Header