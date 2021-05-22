import React from 'react'
import PrepositionExamples from './PrepositionExamples'
import PrepositionTypes from './PrepositionTypes'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import { FaHandMiddleFinger } from 'react-icons/fa';
import Navbar from '../../Navbar';
import Header from "../../Header";
import Menu from "../../Menu";

function Prepositions()

{
    return (
        <div>
            
            <Header></Header>
            
            <div class="Main_div_content">
                <div>
                    <div class="label-heading">

                    </div>
                    <table class="FullTable">
                        <tr>
                            <td class="Def_title">
                                <div>
                                    Prepositions<DoubleArrowIcon style={{ color: 'white', verticalAlign: 'middle', }}></DoubleArrowIcon>
                                </div>
                            </td>
                            <td >
                                <div class="Def_details">
                                    <p>Prepositions are words or phrases that helps provide more information to a sentence such as where something is located.</p>

                                </div>
                                <div class="Def_details_desc">
                                    <p>Prepositions are words or phrases that helps provide more information to a sentence such as where something is located.</p>

                                </div>

                            </td>
                        </tr>
                    </table>
                </div>

                <div>
                    <PrepositionExamples></PrepositionExamples>

                </div>

                <div>
                    <PrepositionTypes></PrepositionTypes>

                </div>
                <div class="label-heading">

                </div>

            </div>
        </div>
        
    )

} 
 
export default Prepositions