import React, {Component, useState} from 'react'
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox'

import GridTable from '../../GridTable'



import Menu from '../AdminMenu'
import Header from '../../Header'
import firebase from '../../../services/firebase';
import axios from 'axios';

import ReactQuill, { Quill, Mixin, Toolbar } from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6
import parse from 'html-react-parser';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

import { Dropdown, Tooltip, Form } from 'react-bootstrap';

import { Table, Snackbar } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';




function Question ()
{
    const [LevelId,setLevelId] = useState(1);
    const [SubjectId,setSubjectId] = useState(1);
    const [ChapterId,setChapterId] = useState(1);
    const [QuestionTypeId,setQuestionTypeId] = useState(1);
    const [QuestionName,setQuestionName] = useState("");
    
    const [strErrMessage,setstrErrMessage] = useState("");
    const [OptionText,setOptionText] = useState("");
    
    const [isCorrectOption,setisCorrectOption] = useState(false);
    const [AnswerGuidance,setAnswerGuidance] = useState("");

    const [Options,setOptions] = useState([
        /*
        {OptionText:"Yes",
            isCorrectOption:"1"},
            {OptionText:"No",
            isCorrectOption:"0"},
            */
    ])
    
    
    const HandleChange= (value)=>
    {
        //[e.target.name] : e.target.value
        //alert(QuestionType);
        setQuestionTypeId(value);
        //alert(value);
    }
    const HandleRichChange = (value)=>
    {
        setQuestionName(value);
    }
    const HandleRichChangeAG = (value)=>
    {
        setAnswerGuidance(value);
    }
    const fnAddOption=()=>
      {
          //Logic goes here
          const newOption = [
            {OptionText:OptionText,
            isCorrectOption:isCorrectOption},
          ];
          const Arr = Options.concat(newOption)

          setOptions(Arr)
          /*
          this.setState({Optiondata:ExistingOptions});

          alert(this.state.Optiondata.length);
          */
          


      }
    const HandleOptionChange=(value)=>
    {
        setOptionText(value);
    }
    const HandleCheckChange=()=>
    {
        setisCorrectOption(!isCorrectOption);
    }
    const modules = {
        toolbar: [
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline','strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image'],
          ['clean']
        ],
      };
     
      const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
      ];
    
      
      
    const fnSubmitQuestion=()=> {
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
        if (QuestionName == "") {
            strErr = strErr + "Please enter Question\n";

        }
        /*
        if (Answer1Name == "") {
            strErr = strErr + "Please enter Answer 1\n";
        }
        if (Answer2Name == "") {
            strErr = strErr + "Please enter Answer 2\n";
        }
        if (Answer3Name == "") {
            strErr = strErr + "Please enter Answer 2\n";
        }
        if (Answer4Name == "") {
            strErr = strErr + "Please enter Answer 4\n";
        }
        if (CorrectAnswer == "") {
            strErr = strErr + "Please select Correct Answer option \n";
        }
        */
        

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

                    /*
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
                    */
                    const question = {
            
                        LevelId: LevelId,
                        SubjectId: SubjectId,
                        ChapterId: ChapterId,
                        QuestionTypeId: QuestionTypeId,
                        QuestionName: QuestionName,
                        Options: Options,
                        AnswerGuidance:AnswerGuidance,
                        
                    }

                    //alert(question);

                    //to pass data to backend
                    //console.log(registered.userName);
                    axios.post('http://localhost:4000/app/Question', question)
                    .then(response => {
                        console.log(response.data);
                        alert("Quesiton Inserted Successfully!");
                        //window.location = "/StaffDetails";
                    })    

                    //alert("Record Added Successfully");
                    //this.fnFetchData();
                }
            }
            
            catch (error) {
                alert(error.message);
            }
        }
    }
        

    
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
                                    <td>
                                    <Form.Label>Level</Form.Label>
                                    </td>
                                    <td>
                                        <Form.Group  controlId="formGridState">
                                            <Form.Control as="select" value={LevelId} onChange={HandleChange} >
                                                            <option value={1}>First</option>
                                                            <option value={2}>Second</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    <Form.Label>Subject</Form.Label>
                                    </td>
                                    <td>
                                        <Form.Group  controlId="formGridState">
                                            <Form.Control as="select" value={SubjectId} onChange={HandleChange} >
                                                            <option value={1}>Nouns</option>
                                                            <option value={2}>Pronouns</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    <Form.Label>Chapter</Form.Label>
                                    </td>
                                    <td>
                                        <Form.Group  controlId="formGridState">
                                            <Form.Control as="select" value={ChapterId} onChange={HandleChange} >
                                                            <option value={1}>Identify Nouns</option>
                                                            <option value={2}>Differentiate Nouns</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    <Form.Label>Question Type</Form.Label>
                                    </td>
                                    <td>
                                        <Form.Group  controlId="formGridState">
                                            <Form.Control as="select" value={QuestionTypeId} onChange={HandleChange} >
                                                            <option value={1}>Single Choice</option>
                                                            <option value={2}>Multiple Choice</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Question Description</td>
                                    <td>
                                        <ReactQuill
                                            placeholder="Write your question"
                                            value={QuestionName}
                                            theme="snow"
                                            modules={modules}
                                            formats={formats}
                                            onChange={HandleRichChange}
                                        >

                                        </ReactQuill>
                                        
                                    </td>
                                </tr>
                                
                                <tr >
                                    <td>
                                        Options                    
                                    </td>
                                    <td>
                                        <ReactQuill
                                            placeholder="Write your question"
                                            value={OptionText}
                                            
                                            theme="snow"
                                            modules={modules}
                                            formats={formats}
                                            onChange={HandleOptionChange}
                                        >

                                        </ReactQuill>
                                        
                                        Is this a correct Option?
                                        <Checkbox checked={isCorrectOption} onChange={HandleCheckChange}>
                                            
                                        </Checkbox>

                                        <Button
                                                    style={{
                                                        width:"360px",
                                                    }}
                                            onClick={fnAddOption}
                                            

                                        >
                                            Add Option
                                        </Button>

                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        The Existing Options

                                        

                                        <Table class="GridTable" >
                                            <TableHead >
                                                <TableRow>
                                                    <TableCell>Option Text</TableCell>
                                                    <TableCell>Is this correct option</TableCell>
                                                    <TableCell>Edit|Delete</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {Options &&
                                                Options.map(item=>{
                                                    return( 
                                                        <TableRow key={item.OptionText}>
                                                            
                                                            <TableCell>{parse(item.OptionText)}</TableCell>
                                                            <TableCell>
                                                                {item.isCorrectOption ? <DoneIcon className="CorrectAnswerIcon"></DoneIcon> : <ClearIcon className="WrongAnswerIcon"></ClearIcon>}
                                                            </TableCell>
                                                            
                                                            <TableCell>{
                                                                <span>
                                                                    <button class="btn"><a><EditIcon></EditIcon></a></button>
                                                                     | <button class="btn"><DeleteIcon></DeleteIcon></button> 
                                                                </span>
                                                                        }
                                                            </TableCell>
                                                        </TableRow>
                                                    )
                                                })
                                                }
                                            </TableBody>
                                        </Table> 

                                    </td>
                                </tr>
                                <tr>
                                    <td>Answer Guidance</td>
                                    <td>
                                        <ReactQuill
                                            placeholder="Write your guidance"
                                            value={AnswerGuidance}
                                            theme="snow"
                                            modules={modules}
                                            formats={formats}
                                            onChange={HandleRichChangeAG}
                                        >

                                        </ReactQuill>
                                        
                                    </td>
                                </tr>

                                
                                <tr>
                                    <td></td>
                                    <td>
                                        <Button
                                                    style={{
                                                        width:"360px",
                                                    }}
                                            onClick={fnSubmitQuestion}
                                            

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
export default Question