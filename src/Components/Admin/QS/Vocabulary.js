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



class Vocabulary extends Component
{
    constructor(props)
    {
        super(props);
        //this.fnCreateAccount = this.fnCreateAccount.bind(this);
        this.fnSubmitVocabulary = this.fnSubmitVocabulary.bind(this);        
        this.HandleChange = this.HandleChange.bind(this);
        //this.fnShowError = this.fnShowError.bind(this);
        
        this.state = {
            VocabCategory :"",
            Vocabulary:"",
            VocabMeaning:"",
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
    
    fnSubmitVocabulary() {
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
        if (this.state.VocabCategory == "") {
            strErr = strErr + "Please Select Category\n";

        }
        if (this.state.Vocabulary == "") {
            strErr = strErr + "Please enter Vocabulary Text 1\n";
        }
        if (this.state.VocabMeaning == "") {
            strErr = strErr + "Please enter Vocabulary Meaning 2\n";
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
                db.collection("Vocabulary").add({
                    VocabCategory:this.state.VocabCategory,
                    Vocabulary: this.state.Vocabulary,
                    VocabMeaning: this.state.VocabMeaning,
                    //uid: localStorage.getItem("g_user_id")
                })

                alert("Record Added Successfully");
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
                                    <td colSpan="2"><div>Vocabulary Management</div></td>
                                </tr>
                                <tr>
                                    <td>Vocabulary Category</td>
                                    <td>
                                    <FormControl variant="filled" color="primary">
                                                    <InputLabel htmlFor="outlined-VocabCategory-native-simple">Vocabulary Category</InputLabel>
                                                    <Select
                                                    native
                                                    value={this.state.VocabCategory}
                                                    onChange={this.HandleChange}
                                                    label="VocabCategory"
                                                    inputProps={{
                                                        name: 'VocabCategory',
                                                        id: 'outlined-VocabCategory-native-simple',
                                                    }}
                                                    style={{
                                                        //height: "45px",
                                                        width:"360px",
                                                    }}
                                                    >
                                                    
                                                    <option value={1}>Hospital</option>
                                                    <option value={2}>House</option>
                                                    <option value={3}>School</option>
                                                    <option value={4}>Education</option>
                                                    <option value={5}>Business</option>
                                                    </Select>
                                                </FormControl>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Vocabulary Description</td>
                                    <td>
                                        <TextField
                                            label="Add Vocabulary"
                                            variant= "outlined"
                                            id='VocabName'
                                            value={this.state.Vocabulary}
                                            onChange={this.HandleChange}
                                            name="Vocabulary"
                                            
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Meaning</td>
                                    <td>
                                        <TextField
                                            label="Vocabulary Meaning"
                                            variant= "outlined"
                                            id='idVocabMeaning'
                                            value={this.state.VocabMeaning}
                                            onChange={this.HandleChange}
                                            name="VocabMeaning"
                                            
                                        />
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td>Correct Answer</td>
                                    <td>
                                        <Button
                                                    style={{
                                                        width:"360px",
                                                    }}
                                            onClick={this.fnSubmitVocabulary}
                                            

                                        >
                                            Submit Vocabulary
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
export default Vocabulary