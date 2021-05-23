import React from 'react'
import ConjunctionExamples from './ConjunctionExamples'
import ConjunctionTypes from './ConjunctionTypes'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import { FaHandMiddleFinger } from 'react-icons/fa';
import Navbar from '../../Navbar';
import Header from "../../Header";
import Menu from "../../Menu";
import Grid from '@material-ui/core/Grid';
import { GoTriangleRight } from 'react-icons/go'
import Footer from '../../Footer';

function Conjunctions() {
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
                                        Conjunctions <GoTriangleRight class="Def-Title-Next-Icon"></GoTriangleRight>

                                    </div>
                                    <div class="Def-Details-Outer">
                                        <div class="Def-Inner-Title">
                                            <p>Conjunctions are words that join two sentences to make one when you want to add more information in one sentence. Conjunctions could be known as sentence extenders.</p>

                                        </div>
                                        <div class="Def_inner-desc">
                                            <p>Conjunctions are words that join two sentences to make one when you want to add more information in one sentence. Conjunctions could be known as sentence extenders.</p>

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
                    <ConjunctionExamples></ConjunctionExamples>

                </div>

                <div>
                    <ConjunctionTypes></ConjunctionTypes>

                </div>
                <div>
                    <Footer></Footer>
                </div>

            </div>
        </div>

    )

}

export default Conjunctions