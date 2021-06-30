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

import Grid from '@material-ui/core/Grid';
import { GoTriangleRight } from 'react-icons/go'
import Footer from '../../Footer';

function ProNouns() {
    return (

        <div>

            <Header></Header>


            <div class="Main_div_content">
                <div>

                    <div class="section-outer-box">
                        <Grid container>
                            <Grid item xs={12} sm={5} >
                                <div>
                                    <div class="Def-Title">
                                        ProNouns <GoTriangleRight class="Def-Title-Next-Icon"></GoTriangleRight>

                                    </div>
                                    <div class="Def-Details-Outer">
                                        <div class="Def-Inner-Title">
                                            <p>Pronoun means "for a noun", and a pronoun is a word that takes the place of a noun.</p>

                                        </div>
                                        <div class="Def_inner-desc">
                                            <p>Without pronouns, spoken and written English would be very repetitive. Once a noun has been referred to by its actual name once, another word - a pronoun - can be used to stand for this name.</p>

                                        </div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={7} >
                                <div class="Pronouns-logo">

                                </div>
                            </Grid>
                        </Grid>
                    </div>


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
                <div>
                    <Footer></Footer>
                </div>




            </div>
        </div>



    )

}

export default ProNouns