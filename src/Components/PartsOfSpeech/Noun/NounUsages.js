import React from 'react'
import * as TiGroup from "react-icons/ti";

import Button from '@material-ui/core'
import AccessibleIcon from '@material-ui/icons/Accessible';
import Grid from '@material-ui/core/Grid';


function NounUsages() {
    return (

        <div class="section-outer-box">
            <div class="label-heading">
                <AccessibleIcon></AccessibleIcon>
                Usages of Nouns
            </div>
            <div class="Content_desc">
                Nouns are classified into multiple types based on their uses. Following are some types of nouns
            </div>

            <div class="section-inner-box">
                <div class="label-sub-heading">
                    Usages of Nouns
                </div>

                <div class="list_div">
                    <p>As you can see, Below are the types of Nouns based on their uses"</p>

                    <div id="ComNoun" class="div_sub_section_item">
                        <div class="internal_text bg-white">
                            <span>Common Nouns</span> are generic names given to people, places and some things, there are not specific in any  way.
                            <ul>
                                <li>Common nouns are generic and aren't specific so they are never capitalized unless if it's at the start of a sentence.</li>
                                <li>Common nouns are known as the basic non-specific words we use everyday.</li>
                            </ul>

                            <p><span>For Example:</span></p>
                            <ul>
                                <li>Car</li>
                                <li>Movie</li>
                                <li>Tea</li>
                                <li>Mountain</li>
                            </ul>
                            <p> Each of the examples above are not distinct at all. They are general nouns that don't give us much information.
                            </p>
                        </div>
                    </div>

                    <div id="ConcreteNoun" class="div_sub_section_item">
                        <div class="internal_text bg-white">
                            <span>Concrete Nouns</span> can be detected and felt by our five senses (See, Hear, Touch, Smell and Taste).
                            <ul>
                                <li>Concrete Nouns are very similiar to common nouns, there isn't a big difference between common and Concrete Nouns.</li>
                            </ul>

                            <p><span>For Example:</span></p>
                            <ul>
                                <li>Bottle</li>
                                <li>Hammer</li>
                                <li>Table</li>
                                <li>Ball</li>
                            </ul>
                            <p> All of the examples above, not only are they all Concrete Nouns but they are also known as Common Nouns. </p>
                        </div>
                    </div>

                    
                    








                </div>
            </div>





        </div>




    )
}
export default NounUsages
