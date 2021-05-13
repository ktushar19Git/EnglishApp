import React from 'react'
import NounExamples from './NounExamples'
import NounTypes from './NounTypes'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import { FaHandMiddleFinger } from 'react-icons/fa';
import Navbar from '../../Navbar';
import Header from "../../Header";
import Menu from "../../Menu";

function Nouns()

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
                                    Nouns<DoubleArrowIcon style={{ verticalAlign: 'middle', }}></DoubleArrowIcon>
                                </div>
                            </td>
                            <td >
                                <div class="Def_details">
                                    <p>Nouns are naming words for people,animals and places</p>

                                </div>
                                <div class="Def_details_desc">
                                    <p>Nouns are often known as "naming" words. Every sentence must include at least one noun or pronoun. Most nouns can be either singular or plural, and can be devided into two main groups: common and propoer nouns</p>

                                </div>

                            </td>
                        </tr>
                    </table>
                </div>

                <div>
                    <NounExamples></NounExamples>

                </div>

                <div>
                    <NounTypes></NounTypes>

                </div>
                <div class="label-heading">

                </div>

            </div>
        </div>
        
    )

} 
 
export default Nouns