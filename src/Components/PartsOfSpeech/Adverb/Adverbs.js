import React from 'react'
import AdverbExamples from './AdverbExamples'
import AdverbTypes from './AdverbTypes'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import { FaHandMiddleFinger } from 'react-icons/fa';
import Navbar from '../../Navbar';
import Header from "../../Header";
import Menu from "../../Menu";

function Adverbs()

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
                                    Adverbs<DoubleArrowIcon style={{ color: 'white', verticalAlign: 'middle', }}></DoubleArrowIcon>
                                </div>
                            </td>
                            <td >
                                <div class="Def_details">
                                    <p>Adverbs are words used to describe a specific action or actions (Verbs).</p>

                                </div>
                                <div class="Def_details_desc">
                                    <p>Adverbs are words used to describe a specific action or actions (Verbs).</p>

                                </div>

                            </td>
                        </tr>
                    </table>
                </div>

                <div>
                    <AdverbExamples></AdverbExamples>

                </div>

                <div>
                    <AdverbTypes></AdverbTypes>

                </div>
                <div class="label-heading">

                </div>

            </div>
        </div>
        
    )

} 
 
export default Adverbs