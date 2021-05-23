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


class VocabularyDisplay extends Component
{
    constructor(props)
    {
        super(props);
        
        this.fnFetchData = this.fnFetchData.bind(this);
        this.fnFetchVocabCategory = this.fnFetchVocabCategory.bind(this);
        
        this.state = {
            VocabCategory :"",
            Vocabulary:"",
            VocabMeaning:"",
            VocabSentence1:"",
            VocabSentence2:"",
            strErrMessage:"",
            InputData: []


        }
        this.fnFetchData();
    }
    fnFetchVocabCategory(e)
    {
        let localVocabCategory = "";        
        if(e == 1)
        {
          localVocabCategory = "Hospital";
        }
        else if(e == 2)
        {
          localVocabCategory = "House";
        }
        else if(e == 3)
        {
          localVocabCategory = "School";
        }
        else if(e == 4)
        {
          localVocabCategory = "Education";
        }
        else if(e == 5)
        {
          localVocabCategory = "Business";
        }
        
        return localVocabCategory;
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
            
            <Header></Header>
            <div class="Main_div_content">
              <div style={{textAlign:"center"}}>
                <div class="label-heading">
                      Vocaubulary
                </div>
                <GridList cols={4} style={{alignItems:"center"}}>
                  
                  {
                            this.state.InputData &&
                            this.state.InputData.map(InputData => {
                              return (
                                
                                    <div class="div-Vocaulary">
                                      <div class="div-Vocaulary-Text">{InputData.Vocabulary}</div>
                                      <div>
                                        <table>
                                          <td class="div-Vocaulary-image-td">
                                            <FcBusinessman class="div-Vocaulary-image"></FcBusinessman>
                                            
                                          </td>
                                          <td class="div-Vocaulary-Meaning-Examples-td">
                                            <div class="div-Vocaulary-Meaning">{InputData.VocabMeaning}</div>
                                            <div class="div-Vocaulary-examples">
                                              <ul>
                                                <li>
                                                  {InputData.VocabSentence1}
                                                </li>
                                                <li>
                                                  {InputData.VocabSentence2}
                                                </li>
                                              </ul>
                                            </div>
                                          </td>
                                        </table>

                                      </div>
                                    </div>
                                  
                              )
                            })

                          }

                  
                

                </GridList>


                
                <div class="label-heading">

                </div>
              </div>
            </div>


          </div>
        )
    }
}
export default VocabularyDisplay