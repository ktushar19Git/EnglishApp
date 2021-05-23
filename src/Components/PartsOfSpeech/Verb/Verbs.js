import React from 'react'
import VerbExamples from './VerbExamples'
import VerbTypes from './VerbTypes'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import { FaHandMiddleFinger } from 'react-icons/fa';
import Navbar from '../../Navbar';
import Header from "../../Header";
import Menu from "../../Menu";
import Grid from '@material-ui/core/Grid';
import { GoTriangleRight } from 'react-icons/go'

function Verbs() {
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
                                        Verbs <GoTriangleRight class="Def-Title-Next-Icon"></GoTriangleRight>

                                    </div>
                                    <div class="Def-Details-Outer">
                                        <div class="Def-Inner-Title">
                                            <p>Verbs are words about an action or describing a state of being.</p>

                                        </div>
                                        <div class="Def_inner-desc">
                                            <p>Verbs are words about an action or describing a state of being. Any word that demonstrates an action that we can do and any word that shows the state of being, is called a Verb.</p>
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
                    <VerbExamples></VerbExamples>

                </div>

                <div>
                    <VerbTypes></VerbTypes>

                </div>
                <div class="label-heading">

                </div>

            </div>
        </div>

    )

}

export default Verbs