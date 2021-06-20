import React from 'react'
import AdverbExamples from './AdverbExamples'
import AdverbTypes from './AdverbTypes'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import { FaHandMiddleFinger } from 'react-icons/fa';
import Navbar from '../../Navbar';
import Header from "../../Header";
import Menu from "../../Menu";
import Grid from '@material-ui/core/Grid';
import { GoTriangleRight } from 'react-icons/go'
import Footer from '../../Footer';

function Adverbs() {
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
                                        Adverbs <GoTriangleRight class="Def-Title-Next-Icon"></GoTriangleRight>

                                    </div>
                                    <div class="Def-Details-Outer">
                                        <div class="Def-Inner-Title">
                                            <p>Adverbs are words used to describe a specific action or actions (Verbs).</p>

                                        </div>
                                        <div class="Def_inner-desc">
                                            <p>Adverbs are words used to describe a specific action or actions (Verbs).</p>

                                        </div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={7} >
                                <div class="Adverbs-logo">

                                </div>
                            </Grid>
                        </Grid>
                    </div>












                </div>

                <div>
                    <AdverbExamples></AdverbExamples>

                </div>

                <div>
                    <AdverbTypes></AdverbTypes>

                </div>
                <div>
                    <Footer></Footer>
                </div>

            </div>
        </div>

    )

}

export default Adverbs