import React, {Component} from 'react'
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';



import Menu from '../Menu'
import Header from '../../Header'
import firebase from '../../../services/firebase';

import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';



class Chapter extends Component
{
    constructor(props)
    {
        super(props);
        //this.fnCreateAccount = this.fnCreateAccount.bind(this);
        this.fnSubmitChapter = this.fnSubmitChapter.bind(this);        
        this.HandleChange = this.HandleChange.bind(this);
        //this.fnShowError = this.fnShowError.bind(this);
        
        this.state = {
            SubjectId:"",
            ChapterName:"",
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
    
    fnSubmitChapter() {
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
        if (this.state.SubjectId == "") {
            strErr = strErr + "Please select Subject\n";

        }
        if (this.state.ChapterName == "") {
            strErr = strErr + "Please enter Chapter\n";

        }
        

        if (strErr != "") {
            alert(strErr);
        }
        else {
            try {
                if(localStorage.getItem("g_user_id") == null)
                {
                    //alert("You are not logged in. Please Login.");
                }
                else
                {
                //alert(this.state.SoilMoisture + "\n" + this.state.SoilTemperature + "\n" + this.state.SoilpH + "\n" + this.state.SunLight + "\n" + this.state.EnvTemp);
                //firebase.auth().createUserWithEmailAndPassword(this.state.Email,this.state.Password);
                const db = firebase.firestore();
                //alert(document.getElementById("posted_datetime-local").value);
                //alert(localStorage.getItem("g_user_id"));
                db.collection("Chapters").add({
                    ChapterName:this.state.ChapterName,
                    SubjectId:this.state.SubjectId,
                    //uid: localStorage.getItem("g_user_id")
                })

                alert("Chapter Added Successfully");
                //this.fnFetchData();
                }
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
                                    <td colSpan="2"><div>Chapter Management</div></td>
                                </tr>
                                <tr>
                                    <td>Subject</td>
                                    <td>
                                    <FormControl variant="filled" color="primary">
                                                    <InputLabel htmlFor="outlined-SubjectId-native-simple">Subject</InputLabel>
                                                    <Select
                                                    native
                                                    value={this.state.SubjectId}
                                                    onChange={this.HandleChange}
                                                    label="SubjectId"
                                                    inputProps={{
                                                        name: 'SubjectId',
                                                        id: 'outlined-SubjectId-native-simple',
                                                    }}
                                                    style={{
                                                        //height: "45px",
                                                        width:"360px",
                                                    }}
                                                    >
                                                    
                                                    <option value={1}>Nouns</option>
                                                    <option value={2}>Pronouns</option>
                                                    <option value={3}>Adjectives</option>
                                                    <option value={4}>Verbs</option>
                                                    <option value={5}>Adverbs</option>
                                                    </Select>
                                                </FormControl>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Chapter Name</td>
                                    <td>
                                        <TextField
                                            label="Add Chapter"
                                            variant= "outlined"
                                            id='ChapterName'
                                            value={this.state.ChapterName}
                                            onChange={this.HandleChange}
                                            name="ChapterName"
                                            
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
                                            onClick={this.fnSubmitChapter}
                                            

                                        >
                                            Submit Chapter
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
export default Chapter