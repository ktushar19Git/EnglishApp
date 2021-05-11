import React, {Component} from 'react'

import firebase from '../../services/firebase';

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



class VocabularyDisplay extends Component
{
    constructor(props)
    {
        super(props);
        
        this.fnFetchData = this.fnFetchData.bind(this);
        
        this.state = {
            VocabCategory :"",
            Vocabulary:"",
            VocabMeaning:"",
            strErrMessage:"",
            InputData: []


        }
        this.fnFetchData();
    }
    
    fnFetchData() {
        //db.collection('InputData').doc(uid).get()
        
        
        //db.collection("Vocabulary").where("uid", "==", localStorage.getItem("g_user_id")).get()  
        
        db.collection("Vocabulary").get()
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
                <Grid item xs={12}>
                  <Paper >
                    <td class="tdHalf">
                      <h3 style={{ paddingBottom: "15px", color: "#034e9f", fontsize: "x-large", }}>Existing Data</h3>
                      <Table aria-label=" table" size="small" >
                        <TableHead>
                          <TableRow>
                            <TableCell align="left">Category</TableCell>
                            <TableCell align="left">Text</TableCell>
                            <TableCell align="left">Meaning</TableCell>

                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {
                            this.state.InputData &&
                            this.state.InputData.map(InputData => {
                              return (
                                <TableRow key={InputData.name}>
                                  <TableCell align="left" >{InputData.VocabCategory}</TableCell>
                                  <TableCell align="left" >{InputData.Vocabulary}</TableCell>
                                  <TableCell align="left" >{InputData.VocabMeaning}</TableCell>

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
export default VocabularyDisplay