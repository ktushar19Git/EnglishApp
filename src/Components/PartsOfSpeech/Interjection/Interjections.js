import React from 'react'
import InterjectionExamples from './InterjectionExamples'
import InterjectionTypes from './InterjectionTypes'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import { FaHandMiddleFinger } from 'react-icons/fa';
import Navbar from '../../Navbar';
import Header from "../../Header";
import Menu from "../../Menu";

function Interjections()

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
                                    Interjections<DoubleArrowIcon style={{ color: 'white', verticalAlign: 'middle', }}></DoubleArrowIcon>
                                </div>
                            </td>
                            <td >
                                <div class="Def_details">
                                    <p>Interjections are used to convey emotion in an abrupt or  exclamatory way. They express meaning or feeling in a word or two.</p>

                                </div>
                                <div class="Def_details_desc">
                                    <p>Interjections are used to convey emotion in an abrupt or  exclamatory way. They express meaning or feeling in a word or two.</p>

                                </div>

                            </td>
                        </tr>
                    </table>
                </div>

                <div>
                    <InterjectionExamples></InterjectionExamples>

                </div>

                <div>
                    <InterjectionTypes></InterjectionTypes>

                </div>
                <div class="label-heading">

                </div>

            </div>
        </div>
        
    )

} 
 
export default Interjections
