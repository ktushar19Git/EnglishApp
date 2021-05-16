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

import parse from 'html-react-parser';



import Navbar from '../Navbar';
import Header from "../Header";
import Menu from "../Menu";



class SynonymDisplay extends Component
{
    constructor(props)
    {
        super(props);
        
        this.fnFetchData = this.fnFetchData.bind(this);
        
        
        this.state = {
            SynonymLevel : "1",
            SynonymCategory : "1",
            SName :"",
            Synonym1:"",
            Synonym2:"",
            Synonym3:"",
            strErrMessage:"",
            QRichText : "",
            InputData: []


        }
        this.fnFetchData();
    }

    
    
    fnFetchData() {
        //db.collection('InputData').doc(uid).get()
        
        
        //db.collection("Vocabulary").where("uid", "==", localStorage.getItem("g_user_id")).get()  
        
        db.collection("Synonyms").get()
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
                            <TableCell align="left" style={{ paddingBottom: "15px", color: "#034e9f", fontsize: "x-large", }}>Name</TableCell>
                            <TableCell align="left" style={{ paddingBottom: "15px", color: "#034e9f", fontsize: "x-large", }}>Name 1</TableCell>
                            <TableCell align="left" style={{ paddingBottom: "15px", color: "#034e9f", fontsize: "x-large", }}>Name 2</TableCell>
                            <TableCell align="left" style={{ paddingBottom: "15px", color: "#034e9f", fontsize: "x-large", }}>Name 3</TableCell>
                            <TableCell align="left" style={{ paddingBottom: "15px", color: "#034e9f", fontsize: "x-large", }}>Name 3</TableCell>

                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {
                            this.state.InputData &&
                            this.state.InputData.map(InputData => {
                              return (
                                <TableRow key={InputData.name}>
                                  <TableCell align="left" >{InputData.SName}</TableCell>
                                  <TableCell align="left" >{InputData.Synonym1}</TableCell>
                                  <TableCell align="left" >{InputData.Synonym2}</TableCell>
                                  <TableCell align="left" >{InputData.Synonym3}</TableCell>
                                  <TableCell align="left" >{parse(InputData.QRichText)}</TableCell>

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
export default SynonymDisplay