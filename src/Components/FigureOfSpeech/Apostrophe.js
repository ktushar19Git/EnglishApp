import React from 'react'

import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import { FaHandMiddleFinger } from 'react-icons/fa';
import Navbar from '../Navbar';
import Header from "../Header";
import Menu from "../Menu";
import Grid from '@material-ui/core/Grid';
import { ImNext } from 'react-icons/im';
import { FcNext } from 'react-icons/fc';
import { GrNext } from 'react-icons/gr'
import { GoTriangleRight } from 'react-icons/go'
import Footer from '../Footer';

function Simile() {
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
                                        Apostrophe <GoTriangleRight class="Def-Title-Next-Icon"></GoTriangleRight>

                                    </div>
                                    <div class="Def-Details-Outer">
                                        <div class="Def-Inner-Title">
                                            <p>An apostrophe is an expressive and exclamatory figure of speech! It takes place when a speaker breaks off from addressing the audience.</p>

                                        </div>
                                        <div class="Def_inner-desc">
                                            <p>An apostrophe is an expressive and exclamatory figure of speech! It takes place when a speaker breaks off from addressing the audience.</p>

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
                    

                </div>

                <div>
                    

                </div>
                <div>
                    <Footer></Footer>
                </div>

            </div>
        </div>

    )

}

export default Simile