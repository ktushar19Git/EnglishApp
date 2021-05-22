import React from 'react'
import AdjectiveExamples from './AdjectiveExamples'
import AdjectiveTypes from './AdjectiveTypes'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import { FaHandMiddleFinger } from 'react-icons/fa';
import Navbar from '../../Navbar';
import Header from "../../Header";
import Menu from "../../Menu";

function Adjectives()

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
                                    Adjectives<DoubleArrowIcon style={{ color: 'white', verticalAlign: 'middle', }}></DoubleArrowIcon>
                                </div>
                            </td>
                            <td >
                                <div class="Def_details">
                                    <p>Adjectives are words or phrases that modify or describe nouns or pronouns.</p>

                                </div>
                                <div class="Def_details_desc">
                                    <p>A noun by itself does not offer much information. If a man wanted to buy a shirt in a shop, he would need to narrow down what he was looking for by using descriptive words like thin or silky. These words are known as adjectives.</p>

                                </div>

                            </td>
                        </tr>
                    </table>
                </div>

                <div>
                    <AdjectiveExamples></AdjectiveExamples>

                </div>

                <div>
                    <AdjectiveTypes></AdjectiveTypes>

                </div>
                <div class="label-heading">

                </div>

            </div>
        </div>
        
    )

} 
 
export default Adjectives