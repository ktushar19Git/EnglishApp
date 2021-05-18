import React, {Component} from 'react'

import firebase from '../../services/firebase';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
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

import logoheader from '../../../src/images/LogoEnglish.png'
import { Height } from '@material-ui/icons';
import { FcBusinessman } from 'react-icons/fc';



class SubjectDisplay extends Component
{
    constructor(props)
    {
        super(props);
        
        this.fnFetchData = this.fnFetchData.bind(this);
        
        
        this.state = {
            SubjectName :"",
            
            strErrMessage:"",
            InputData: []


        }
        this.fnFetchData();
    }
    
    
    fnFetchData() {
        //db.collection('InputData').doc(uid).get()
        
        
        //db.collection("Vocabulary").where("uid", "==", localStorage.getItem("g_user_id")).get()  
        
        db.collection("Subjects").get()
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
            
            <Menu></Menu>
            <div class="Main_div_content">
              <div >
                <div class="label-heading">
                      Choose Subject/Chapter
                </div>
                <div >
                <GridList cols={3} >
                  
                  {
                            this.state.InputData &&
                            this.state.InputData.map(InputData => {
                              return (
                                
                                    <div class="div-Subject">
                                      <div class="div-Subject-Text">{InputData.SubjectName}</div>
                                      
                                    </div>
                                  
                              )
                            })

                          }

                  
                

                </GridList>
                </div>


                
                <div class="label-heading">

                </div>
              </div>
            </div>


          </div>
        )
    }
}
export default SubjectDisplay