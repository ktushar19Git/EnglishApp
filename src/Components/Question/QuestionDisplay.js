import React, {Component,useState}  from 'react'

import firebase from '../../services/firebase';

import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Table } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { useHistory } from "react-router-dom";
import { db } from '../../services/firebase';
import firestore from 'firebase'
import axios from 'axios';
import Checkbox from '@material-ui/core/Checkbox'

import parse from 'html-react-parser';

import Navbar from '../Navbar';
import Header from "../Header";
import Menu from "../Menu";

import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';




function QuestionDisplay()
{
    const [QuestionName,setQuestionName] = useState("");
    const [RecordNumber,setRecordNumber] = useState(0);
    const [AttemptedQuestions,setAttemptedQuestions] = useState(0);
    const [CorectAnswersgiven,setCorectAnswersgiven] = useState(0);
    const [Options,setOptions] = useState([]);
    
    const componentDidMount=()=>
    {
      fnFetchData();
    }
    
    const fnFetchData=()=> {

      axios.get('http://localhost:4000/app/Question')
        .then(response => {
            console.log('inside');

            //setData({Data:response.data})
            setQuestionName(response.data[RecordNumber]["QuestionName"]);
            setOptions(response.data[RecordNumber]["Options"]);
            
            
            

            
            //this.fnSetCurrentQuestion();
        })
        .catch((error) =>{
            console.log(error);
        })


        /*
        
        db.collection("Questions").limit(1).get()
          .then(querySnapshot => {
              console.log(querySnapshot.docs);
              
            
              
              const InputData = []

              //console.log(querySnapshot.doc.slice(1,2));
              //console.log(querySnapshot.docs.length);

              querySnapshot.forEach(doc => {
                const data = doc.data()
                InputData.push(data)
              });
              this.setState({InputData: InputData})
              
          });
          */
      }
      

      const fnfetchCurrentData=()=>
      {
        
        setRecordNumber(RecordNumber+1)
        fnFetchData();

        fnSetSummary();

        

        /*
        let TotalRecords = this.state.InputData.length;
        console.log("Records:",TotalRecords);
        

        let TemperatureArray =  [];

            {
                this.state.InputData &&
                this.state.InputData.map(InputData=> {
                    TemperatureArray.push(InputData);
                })
              
            }

            console.log("Temp Array"+ TemperatureArray);

        
        this.setState({CurrentQuestion:TemperatureArray.slice(1,3)});
        console.log("FInal State"+ this.state.CurrentQuestion);
        alert(this.state.CurrentQuestion);
        */
      }
      const HandleCheckChange=()=>{
        //alert('HI');
      }
      const fnSetSummary=()=>
      {
        setAttemptedQuestions(AttemptedQuestions+1)
      }
      const fnfetchCurrentDataPre=()=>
      {
        
        setRecordNumber(RecordNumber-1)
        fnFetchData();
        fnSetSummary();

        /*
        let TotalRecords = this.state.InputData.length;
        console.log("Records:",TotalRecords);
        

        let TemperatureArray =  [];

            {
                this.state.InputData &&
                this.state.InputData.map(InputData=> {
                    TemperatureArray.push(InputData);
                })
              
            }

            console.log("Temp Array"+ TemperatureArray);

        
        this.setState({CurrentQuestion:TemperatureArray.slice(1,3)});
        console.log("FInal State"+ this.state.CurrentQuestion);
        alert(this.state.CurrentQuestion);
        */
      }
        

    
        return(
          <div >
           
            <Header></Header>
            <div class="Main_div_content">
              <div class="section-outer-box">
                <div class="label-heading">

                </div>
                <div class="div-Question-Summary">
                  <Grid item xs={12} sm={12}>
                    <span>Questions Attempted:</span> {AttemptedQuestions}
                    <span>Answered Correctly:</span> {CorectAnswersgiven}
                    
                  </Grid>
                  
                </div>
                <div >
                <Grid item xs={12} sm={12} >
                      <div class="label-heading">
                        Existing Questions
                      </div>

                      <Table   >
                        <TableHead>
                          
                        </TableHead>
                        <TableBody>
                                <TableRow  >
                                  <TableCell align="left"  >
                                    <div class="div-QuestionTemplate">
                                      <div class="div-Question">{parse(QuestionName)}</div>
                                      <Table class="GridTable-user" >
                                            
                                            <TableBody>
                                                {Options &&
                                                Options.map(item=>{
                                                    return( 
                                                        <TableRow key={item.OptionText}>
                                                          
                                                          <TableCell class="OptionCheckbox">
                                                              <Checkbox  onChange={HandleCheckChange}>
                                                              </Checkbox>
                                                              
                                                            </TableCell>
                                                            
                                                            <TableCell>
                                                              
                                                              {parse(item.OptionText)}
                                                            </TableCell>
                                                            
                                                            
                                                            
                                                        </TableRow>
                                                    )
                                                })
                                                }
                                            </TableBody>
                                        </Table> 
                                    </div>
                                  </TableCell>
                                </TableRow>

                        </TableBody>
                      </Table>
                    
                    
                  
                </Grid>
                </div>

                <div>
                  <Grid item xs={12} sm={12}>
                          <Button
                              style={{
                                width:"200px",
                                backgroundColor:'green',
                                margin:"15px",
                                padding:"15px",
                              }}
                              onClick={fnfetchCurrentData}
                            >
                            <ExitToAppIcon></ExitToAppIcon>Next
                          </Button>
                      
                  </Grid>
                  <Grid item xs={12} sm={6}>
                      
                            
                      
                  </Grid>
                      
                </div>

                
                <div class="label-heading">

                </div>
              </div>
            </div>


          </div>
        )
    
}
export default QuestionDisplay