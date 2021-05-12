import React, {Component} from 'react'

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

import Navbar from '../Navbar';
import Header from "../Header";
import Menu from "../Menu";



class QuestionDisplay extends Component
{
    constructor(props)
    {
        super(props);
        
        this.fnFetchData = this.fnFetchData.bind(this);
        
        this.state = {
          QuestionName :"",
          Answer1Name:"",
          Answer2Name:"",
          Answer3Name:"",
          Answer4Name:"",
          CorrectAnswer:"",
            InputData: []


        }
        this.fnFetchData();
    }
    
    fnFetchData() {
        //db.collection('InputData').doc(uid).get()
        
        
        //db.collection("Vocabulary").where("uid", "==", localStorage.getItem("g_user_id")).get()  
        
        db.collection("Questions").get()
          .then(querySnapshot => {
              console.log(querySnapshot.docs);
            const InputData = []
            querySnapshot.forEach(doc => {
              const data = doc.data()
              InputData.push(data)
            });
            this.setState({InputData: InputData})
          });
      }
        

    render(){
        return(
          <div >
            <Navbar></Navbar>
            <Header></Header>
            <Menu></Menu>
            <div class="Main_div_content">
              <div>
                <div class="label-heading">

                </div>
                <Grid item xs={8}>
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
                                      <div>
                                            <Button
                                              style={{
                                                width:"360px",
                                              }}
                                            >
                                            <ExitToAppIcon></ExitToAppIcon>Submit
                                          </Button>
                                      </div>
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
                <div class="label-heading">

                </div>
              </div>
            </div>


          </div>
        )
    }
}
export default QuestionDisplay