import React from 'react'
import InterjectionExamples from './InterjectionExamples'
import InterjectionTypes from './InterjectionTypes'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import { FaHandMiddleFinger } from 'react-icons/fa';
import Navbar from '../../Navbar';
import Header from "../../Header";
import Menu from "../../Menu";
import Grid from '@material-ui/core/Grid';
import { GoTriangleRight } from 'react-icons/go'
import Footer from '../../Footer';

function Interjections() {
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
                                        Interjections <GoTriangleRight class="Def-Title-Next-Icon"></GoTriangleRight>

                                    </div>
                                    <div class="Def-Details-Outer">
                                        <div class="Def-Inner-Title">
                                            <p>Interjections are used to convey emotion in an abrupt or  exclamatory way. They express meaning or feeling in a word or two.</p>

                                        </div>
                                        <div class="Def_inner-desc">
                                            <p>Interjections are used to convey emotion in an abrupt or  exclamatory way. They express meaning or feeling in a word or two.</p>

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
                    <InterjectionExamples></InterjectionExamples>

                </div>

                <div>
                    <InterjectionTypes></InterjectionTypes>

                </div>
                <div>
                    <Footer></Footer>
                </div>

            </div>
        </div>

    )

}

export default Interjections
