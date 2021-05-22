import React from 'react'
import VerbExamples from './VerbExamples'
import VerbTypes from './VerbTypes'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import { FaHandMiddleFinger } from 'react-icons/fa';
import Navbar from '../../Navbar';
import Header from "../../Header";
import Menu from "../../Menu";

function Verbs()

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
                                    Verbs<DoubleArrowIcon style={{ color: 'white', verticalAlign: 'middle', }}></DoubleArrowIcon>
                                </div>
                            </td>
                            <td >
                                <div class="Def_details">
                                    <p>Verbs are words about an action or describing a state of being.</p>

                                </div>
                                <div class="Def_details_desc">
                                    <p>Verbs are words about an action or describing a state of being.</p>
                                </div>

                            </td>
                        </tr>
                    </table>
                </div>

                <div>
                    <VerbExamples></VerbExamples>

                </div>

                <div>
                    <VerbTypes></VerbTypes>

                </div>
                <div class="label-heading">

                </div>

            </div>
        </div>
        
    )

} 
 
export default Verbs