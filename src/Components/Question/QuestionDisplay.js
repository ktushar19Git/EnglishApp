import React, {Component}  from 'react'

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

import Navbar from '../Navbar';
import Header from "../Header";
import Menu from "../Menu";



class QuestionDisplay extends Component
{
    constructor(props)
    {
        super(props);
        
        this.fnFetchData = this.fnFetchData.bind(this);
        this.fnfetchCurrentData = this.fnfetchCurrentData.bind(this);
        
        this.state = {
          QuestionName :"",
          Answer1Name:"",
          Answer2Name:"",
          Answer3Name:"",
          Answer4Name:"",
          CorrectAnswer:"",
            InputData: [],
            CurrentQuestion:[],
            querySnapshot:[],


        }
        this.fnFetchData();
        //this.fnfetchCurrentData();
    }
    
    fnFetchData() {
        //db.collection('InputData').doc(uid).get()
        
        
        //db.collection("Vocabulary").where("uid", "==", localStorage.getItem("g_user_id")).get()  
        
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
      }

      fnfetchCurrentData()
      {
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
      }
        

    render(){
        return(
          <div >
           
            <Menu></Menu>
            <div class="Main_div_content">
              <div>
                <div class="label-heading">

                </div>
                <Grid item xs={12} style={{textAlign:'center',}}>
                  <Paper >
                    <td style={{width:'100%',}}>
                      <h3 style={{ paddingBottom: "15px", color: "#034e9f", fontsize: "x-large", }}>Existing Questions</h3>
                      <Table aria-label=" table" size="small" >
                        <TableHead>
                          
                        </TableHead>
                        <TableBody>
                          {
                            this.state.InputData &&
                            this.state.InputData.map(InputData => {
                              return (
                                <TableRow >
                                  <TableCell align="left" >
                                    <div class="div-QuestionTemplate">
                                      <div class="div-Question">{InputData.Question}</div>
                                      <div class="div-Answer">{InputData.Answer1}</div>
                                      <div class="div-Answer">{InputData.Answer2}</div>
                                      <div class="div-Answer">{InputData.Answer3}</div>
                                      <div class="div-Answer">{InputData.Answer4}</div>
                                      <div class="div-Answer">{InputData.CorrectAnswer}</div>
                                      
                                    </div>
                                  </TableCell>
                                </TableRow>
                                

                              )
                            })

                          }

                        </TableBody>
                      </Table>
                    </td>
                    
                  </Paper>
                </Grid>
                <div>
                      <div>
                            <Button
                              style={{
                                width:"360px",
                                backgroundColor:'green',
                              }}
                            >
                            <ExitToAppIcon></ExitToAppIcon>Submit
                          </Button>
                      </div>
                </div>
                <div class="label-heading">

                </div>
              </div>
            </div>


          </div>
        )
    }
}
export default QuestionDisplay