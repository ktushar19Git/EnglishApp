import React from 'react'
import AdjectiveExamples from './AdjectiveExamples'
import AdjectiveTypes from './AdjectiveTypes'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import { FaHandMiddleFinger } from 'react-icons/fa';
import Navbar from '../../Navbar';
import Header from "../../Header";
import Menu from "../../Menu";
import Grid from '@material-ui/core/Grid';
import { GoTriangleRight } from 'react-icons/go'
import Footer from '../../Footer';

function Adjectives() {
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
                                        Adjectives <GoTriangleRight class="Def-Title-Next-Icon"></GoTriangleRight>

                                    </div>
                                    <div class="Def-Details-Outer">
                                        <div class="Def-Inner-Title">
                                            <p>Adjectives are words or phrases that modify or describe nouns or pronouns.</p>

                                        </div>
                                        <div class="Def_inner-desc">
                                            <p>A noun by itself does not offer much information. If a man wanted to buy a shirt in a shop, he would need to narrow down what he was looking for by using descriptive words like thin or silky. These words are known as adjectives.</p>

                                        </div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={7} >
                                <div class="Adjectives-logo">

                                </div>
                            </Grid>
                        </Grid>
                    </div>











                </div>

                <div>
                    <AdjectiveExamples></AdjectiveExamples>

                </div>

                <div>
                    <AdjectiveTypes></AdjectiveTypes>

                </div>
                <div>
                    <Footer></Footer>

                </div>

            </div>
        </div>

    )

}

export default Adjectives