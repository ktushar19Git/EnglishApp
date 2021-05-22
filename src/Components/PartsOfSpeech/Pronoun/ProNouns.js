import React from 'react'
import NounExamples from './ProNounExamples'
import NounTypes from './ProNounTypes'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import Navbar from '../../Navbar';
import Header from "../../Header";
import Menu from "../../Menu";
//import {AudioCard, VideoCard} from 'material-ui-player'
import PronounMp4 from '../../../Videos/Pronoun.mp4'
import ReactPlayer from 'react-player'

function ProNouns()

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
                                    ProNouns<DoubleArrowIcon style={{ color: 'white', verticalAlign: 'middle', }}></DoubleArrowIcon>
                                </div>
                            </td>
                            <td >
                                <div class="Def_details">
                                    <p>Pronoun means "for a noun", and a pronoun is a word that takes the place of a noun.</p>

                                </div>
                                <div class="Def_details_desc">
                                    <p>Without pronouns, spoken and written English would be very repetitive. Once a noun has been referred to by its actual name once, another word - a pronoun - can be used to stand for this name.</p>

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
                <div>
                    <div class="label-heading">
                        Watch the following video to have a clear unterstanding of pronouns:
                    </div>
                    <div class="video-player-div">
                        <ReactPlayer url={PronounMp4} controls="true"></ReactPlayer>
                    </div>
                    
                </div>
                

                <div class="label-heading">

                </div>

            </div>
        </div>

        
    )

} 
 
export default ProNouns