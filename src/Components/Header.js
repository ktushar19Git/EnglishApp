import React from 'react'
import logoheader from '../images/LogoEnglish.png'
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function Header()
{
    const [checked, setChecked] = React.useState(false);

    const toggleChecked = () => {
        setChecked((prev) => !prev);
      };
    return(

    <div style={{textAlign:'left',}} >
                <img src={logoheader} ></img>
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