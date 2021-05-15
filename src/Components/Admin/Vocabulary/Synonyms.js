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

import ReactQuill, { Quill, Mixin, Toolbar } from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6





class Synonyms extends Component
{
    
    constructor(props)
    {
        super(props);
        //this.fnCreateAccount = this.fnCreateAccount.bind(this);
        this.fnSubmitSynonyms = this.fnSubmitSynonyms.bind(this);        
        this.HandleChange = this.HandleChange.bind(this);
        this.HandleRichChange = this.HandleRichChange.bind(this);
        //this.fnShowError = this.fnShowError.bind(this);
        
        this.state = {
            SynonymLevel : "1",
            SynonymCategory : "1",
            SName :"",
            Synonym1:"",
            Synonym2:"",
            Synonym3:"",
            strErrMessage:"",
            QRichText : "",

            

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
    HandleRichChange(value)
    {
        this.setState(
            {
                QRichText : value
            }
        )
    }
    modules = {
        toolbar: [
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline','strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image'],
          ['clean']
        ],
      };
     
      formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
      ];

    
    
    fnSubmitSynonyms() {
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
        if (this.state.SynonymCategory == "") {
            strErr = strErr + "Please Select Category\n";

        }
        if (this.state.SynonymLevel == "") {
            strErr = strErr + "Please Select Level\n";

        }
        if (this.state.SName == "") {
            strErr = strErr + "Please enter Synonym \n";
        }
        if (this.state.Synonym1 == "") {
            strErr = strErr + "Please enter Synonym 1 \n";
        }
        
        alert(this.state.QRichText);
        

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
                db.collection("Synonyms").add({
                    SynonymCategory:this.state.SynonymCategory,
                    SynonymLevel:this.state.SynonymLevel,
                    SName: this.state.SName,
                    Synonym1: this.state.Synonym1,
                    Synonym2: this.state.Synonym2,
                    Synonym3: this.state.Synonym3,
                    QRichText:this.state.QRichText,
                    //uid: localStorage.getItem("g_user_id")
                })

                alert("Synonym Added Successfully");
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
                                    <td colSpan="2"><div>Synonym Management</div></td>
                                </tr>

                                <tr>
                                    <td>Rich Text Editor</td>
                                    <td>
                                        <ReactQuill
                                            placeholder="Write your question"
                                            value={this.state.QRichText}
                                            theme="snow"
                                            modules={this.modules}
                                            formats={this.formats}
                                            onChange={this.HandleRichChange}
                                        >

                                        </ReactQuill>
                                    </td>
                                </tr>

                                <tr>
                                    <td>Synonym Category</td>
                                    <td>
                                    <FormControl variant="filled" color="primary">
                                                    <InputLabel htmlFor="outlined-SynonymCategory-native-simple">Synonym Category</InputLabel>
                                                    <Select
                                                    native
                                                    value={this.state.SynonymCategory}
                                                    onChange={this.HandleChange}
                                                    label="SynonymCategory"
                                                    inputProps={{
                                                        name: 'SynonymCategory',
                                                        id: 'outlined-SynonymCategory-native-simple',
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
                                    <td>Synonym Level</td>
                                    <td>
                                    <FormControl variant="filled" color="primary">
                                                    <InputLabel htmlFor="outlined-SynonymLevel-native-simple">Vocabulary Level</InputLabel>
                                                    <Select
                                                    native
                                                    value={this.state.SynonymLevel}
                                                    onChange={this.HandleChange}
                                                    label="SynonymLevel"
                                                    inputProps={{
                                                        name: 'VocabLevel',
                                                        id: 'outlined-SynonymLevel-native-simple',
                                                    }}
                                                    style={{
                                                        //height: "45px",
                                                        width:"360px",
                                                    }}
                                                    >
                                                    
                                                    <option value={1}>Basic</option>
                                                    <option value={2}>Intermediate</option>
                                                    <option value={3}>Advanced</option>
                                                    
                                                    </Select>
                                                </FormControl>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Synonym Description</td>
                                    <td>
                                        <TextField
                                            label="Add Synonym"
                                            variant= "outlined"
                                            id='SName'
                                            value={this.state.SName}
                                            onChange={this.HandleChange}
                                            name="SName"
                                            
                                        />
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td>Synonym 1</td>
                                    <td>
                                        <TextField
                                            label="Synonym  1"
                                            variant= "outlined"
                                            id='idSynonym1'
                                            value={this.state.Synonym1}
                                            onChange={this.HandleChange}
                                            name="Synonym1"
                                            
                                        />
                                    </td>
                                </tr>

                                <tr>
                                    <td>Synonym 2</td>
                                    <td>
                                        <TextField
                                            label="Synonym  2"
                                            variant= "outlined"
                                            id='idSynonym2'
                                            value={this.state.Synonym2}
                                            onChange={this.HandleChange}
                                            name="Synonym2"
                                            
                                        />
                                    </td>
                                </tr>

                                <tr>
                                    <td>Synonym 3</td>
                                    <td>
                                        <TextField
                                            label="Synonym  3"
                                            variant= "outlined"
                                            id='idSynonym3'
                                            value={this.state.Synonym3}
                                            onChange={this.HandleChange}
                                            name="Synonym3"
                                            
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
                                            onClick={this.fnSubmitSynonyms}
                                            

                                        >
                                            Submit Synonym
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

export default Synonyms

