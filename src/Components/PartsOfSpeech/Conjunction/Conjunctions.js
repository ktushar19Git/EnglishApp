import React from 'react'
import ConjunctionExamples from './ConjunctionExamples'
import ConjunctionTypes from './ConjunctionTypes'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import { FaHandMiddleFinger } from 'react-icons/fa';
import Navbar from '../../Navbar';
import Header from "../../Header";
import Menu from "../../Menu";

function Conjunctions()

{
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Menu></Menu>
            <div class="Main_div_content">
                <div>
                    <div class="label-heading">

                    </div>
                    <table class="FullTable">
                        <tr>
                            <td class="Def_title">
                                <div>
                                    Conjunctions<DoubleArrowIcon style={{ color: 'white', verticalAlign: 'middle', }}></DoubleArrowIcon>
                                </div>
                            </td>
                            <td >
                                <div class="Def_details">
                                    <p>Conjunctions are words that join two sentences to make one when you want to add more information in one sentence. Conjunctions could be known as sentence extenders.</p>

                                </div>
                                <div class="Def_details_desc">
                                    <p>Conjunctions are words that join two sentences to make one when you want to add more information in one sentence. Conjunctions could be known as sentence extenders.</p>

                                </div>

                            </td>
                        </tr>
                    </table>
                </div>

                <div>
                    <ConjunctionExamples></ConjunctionExamples>

                </div>

                <div>
                    <ConjunctionTypes></ConjunctionTypes>

                </div>
                <div class="label-heading">

                </div>

            </div>
        </div>
        
    )

} 
 
export default Conjunctions