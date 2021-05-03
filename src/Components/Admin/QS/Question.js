import React, {Component} from 'react'
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';



import Menu from '../Menu'
import Header from '../../Header'
import firebase from '../../../services/firebase';


class Question extends Component
{
    constructor(props)
    {
        super(props);
        //this.fnCreateAccount = this.fnCreateAccount.bind(this);
        this.fnSubmitQuestion = this.fnSubmitQuestion.bind(this);        
        this.HandleChange = this.HandleChange.bind(this);
        //this.fnShowError = this.fnShowError.bind(this);
        
        this.state = {
            QuestionName :"",
            Answer1Name:"",
            Answer2Name:"",
            Answer3Name:"",
            Answer4Name:"",
            CorrectAnswer:"",
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
    
    fnSubmitQuestion() {
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
        if (this.state.QuestionName == "") {
            strErr = strErr + "Please enter Question\n";

        }
        if (this.state.Answer1Name == "") {
            strErr = strErr + "Please enter Answer 1\n";
        }
        if (this.state.Answer2Name == "") {
            strErr = strErr + "Please enter Answer 2\n";
        }
        if (this.state.Answer3Name == "") {
            strErr = strErr + "Please enter Answer 2\n";
        }
        if (this.state.Answer4Name == "") {
            strErr = strErr + "Please enter Answer 4\n";
        }
        if (this.state.CorrectAnswer == "") {
            strErr = strErr + "Please select Correct Answer option \n";
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
                db.collection("Questions").add({
                    Question:this.state.QuestionName,
                    Answer1: this.state.Answer1Name,
                    Answer2: this.state.Answer2Name,
                    Answer3: this.state.Answer3Name,
                    Answer4: this.state.Answer4Name,
                    CorrectAnswer: this.state.CorrectAnswer,
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
                                    <td colSpan="2"><div>Question Management</div></td>
                                </tr>
                                <tr>
                                    <td colSpan="2"><div>Question Management</div></td>
                                </tr>
                                <tr>
                                    <td>Question Description</td>
                                    <td>
                                        <TextField
                                            label="Add Question"
                                            variant= "outlined"
                                            id='idQuestionName'
                                            value={this.state.QuestionName}
                                            onChange={this.HandleChange}
                                            name="QuestionName"
                                            
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Answer1 Description</td>
                                    <td>
                                        <TextField
                                            label="Add Answer 1"
                                            variant= "outlined"
                                            id='idAnswer1'
                                            value={this.state.Answer1Name}
                                            onChange={this.HandleChange}
                                            name="Answer1Name"
                                            
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Answer2 Description</td>
                                    <td>
                                        <TextField
                                            label="Add Answer 2"
                                            variant= "outlined"
                                            id='idAnswer2'
                                            value={this.state.Answer2Name}
                                            onChange={this.HandleChange}
                                            name="Answer2Name"
                                            
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Answer3 Description</td>
                                    <td>
                                        <TextField
                                            label="Add Answer 3"
                                            variant= "outlined"
                                            id='idAnswer3'
                                            value={this.state.Answer3Name}
                                            onChange={this.HandleChange}
                                            name="Answer3Name"
                                            
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Answer4 Description</td>
                                    <td>
                                        <TextField
                                            label="Add Answer 4"
                                            variant= "outlined"
                                            id='idAnswer4'
                                            value={this.state.Answer4Name}
                                            onChange={this.HandleChange}
                                            name="Answer4Name"
                                            
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Correct Answer</td>
                                    <td>
                                        <TextField
                                            label="Choose Correct Answer"
                                            variant= "outlined"
                                            id='idCorrectAnswer'
                                            value={this.state.CorrectAnswer}
                                            onChange={this.HandleChange}
                                            name="CorrectAnswer"
                                            
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
                                            onClick={this.fnSubmitQuestion}
                                            

                                        >
                                            Submit Question
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
export default Question