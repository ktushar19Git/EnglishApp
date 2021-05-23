import React from 'react'
import PrepositionExamples from './PrepositionExamples'
import PrepositionTypes from './PrepositionTypes'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import { FaHandMiddleFinger } from 'react-icons/fa';
import Navbar from '../../Navbar';
import Header from "../../Header";
import Menu from "../../Menu";
import Grid from '@material-ui/core/Grid';
import { GoTriangleRight } from 'react-icons/go'
import Footer from '../../Footer';

function Prepositions() {
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
                                        Prepositions <GoTriangleRight class="Def-Title-Next-Icon"></GoTriangleRight>

                                    </div>
                                    <div class="Def-Details-Outer">
                                        <div class="Def-Inner-Title">
                                            <p>Prepositions are words or phrases that helps provide more information to a sentence and the words connect to do so, some of them show things such as where something is located.</p>
                                        </div>
                                        <div class="Def_inner-desc">
                                            <p>Prepositions can be words or phrases that connect the nouns, pronouns, phrases together and they help to provide extra information.</p>

                                        </div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={7} >
                                <div class="Nouns-logo">

                                </div>
                            </Grid>
                        </Grid>
                    </div>

                </div>

                <div>
                    <PrepositionExamples></PrepositionExamples>

                </div>

                <div>
                    <PrepositionTypes></PrepositionTypes>

                </div>
                <div>
                    <Footer></Footer>
                </div>

            </div>
        </div>

    )

}

export default Prepositions