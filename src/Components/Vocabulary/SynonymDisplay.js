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

import { FcBusinessman } from 'react-icons/fc';
import GridList from '@material-ui/core/GridList';



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
            
            
            <Header></Header>
            <div class="Main_div_content">
              <div>

              <div class="section-outer-box">
                <div class="label-heading">
                      Synonyms
                </div>
                <div>
                <GridList cols={4} >
                  
                  {
                            this.state.InputData &&
                            this.state.InputData.map(InputData => {
                              return (
                                
                                    <div class="div-Vocaulary">
                                      <div class="div-Vocaulary-Text">{InputData.SName}</div>
                                      <div>
                                        <table>
                                          <td class="div-Vocaulary-image-td">
                                            <FcBusinessman class="div-Vocaulary-image"></FcBusinessman>
                                            
                                          </td>
                                          <td class="div-Vocaulary-Meaning-Examples-td">
                                            <div class="div-Vocaulary-Meaning">{InputData.Synonym1}</div>
                                            <div class="div-Vocaulary-examples">
                                              <ul>
                                                <li>
                                                  {InputData.Synonym2}
                                                </li>
                                                <li>
                                                  {InputData.Synonym3}
                                                </li>
                                              </ul>
                                            </div>
                                          </td>
                                        </table>

                                      </div>
                                      <div class="div-Vocaulary-Footer-Text">https://cleverlyenglish.com</div>
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


          </div>
        )
    }
}
export default SynonymDisplay