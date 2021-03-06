import React, {Component} from 'react'
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';



import Menu from '../AdminMenu'
import Header from '../../Header'
import firebase from '../../../services/firebase';

import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import axios from 'axios';



class Subject extends Component
{
    constructor(props)
    {
        super(props);
        //this.fnCreateAccount = this.fnCreateAccount.bind(this);
        this.fnSubmitSubject = this.fnSubmitSubject.bind(this);        
        this.HandleChange = this.HandleChange.bind(this);
        //this.fnShowError = this.fnShowError.bind(this);
        
        this.state = {
            SubjectName:"",
            strErrMessage:"",
            

        }
    }
    HandleChange(e)
    {
        this.setState(
            {
                [e.target.name] : e.target.value
            }
        )
    }
    
    fnSubmitSubject() {
        /*
        try {
          await signUp(
            "Tushar",
            "ktushar19@gmail.com",
            "Tushar@1909"
          );
          history.push("/");
        } catch (error) {
          alert(error.message);
        }
        */

        let strErr = "";
        if (this.state.SubjectName == "") {
            strErr = strErr + "Please enter Subject\n";

        }
        

        if (strErr != "") {
            alert(strErr);
        }
        else {
            try {
               // if(localStorage.getItem("g_user_id") == null)
               // {
                    //alert("You are not logged in. Please Login.");
               // }
                //else
               // {
                    const subject = {
            
                        Subject: this.state.SubjectName,
                        
                    }
                    axios.post('http://localhost:4000/app/Subject', subject)
                    .then(response => {
                        console.log(response.data);
                        alert("Subject Inserted Successfully!");
                        //window.location = "/StaffDetails";
                    })    
                    
               // }
            }
            
            catch (error) {
                alert(error.message);
            }
        }
    }
        

    render(){
        return(
            <div class="AdminPanelDiv">
                
                <Header></Header>

                <table class="AdminPanelTable">
                    <tr>
                        <td>
                            <Menu></Menu>
                        </td>
                        <td>
                            
                            <table class="DataEntryTable">
                                
                                <tr>
                                    <td colSpan="2"><div>Subject Management</div></td>
                                </tr>
                                
                                <tr>
                                    <td>Subject Name</td>
                                    <td>
                                        <TextField
                                            label="Add Subject"
                                            variant= "outlined"
                                            id='SubjectName'
                                            value={this.state.SubjectName}
                                            onChange={this.HandleChange}
                                            name="SubjectName"
                                            
                                        />
                                    </td>
                                </tr>
                                
                                
                                <tr>
                                    <td></td>
                                    <td>
                                        <Button
                                                    style={{
                                                        width:"360px",
                                                    }}
                                            onClick={this.fnSubmitSubject}
                                            

                                        >
                                            Submit Subject
                                        </Button>
                                    </td>
                                </tr>

                            </table>
                        </td>
                    </tr>
                    
                </table>
                
            </div>
        )
    }
}
export default Subject