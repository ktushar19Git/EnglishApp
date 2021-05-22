import React from 'react'
import * as TiGroup from "react-icons/ti";

import Button from '@material-ui/core'
import AccessibleIcon from '@material-ui/icons/Accessible';
import Grid from '@material-ui/core/Grid';


function NounTypes() {
    return (

        <div class="section-outer-box">
            <div class="label-heading">
                <AccessibleIcon></AccessibleIcon>
                Types of Nouns
            </div>
            <div class="Content_desc">
                Nouns are classified into multiple types based on their uses. Following are some types of nouns
            </div>

            <div class="section-inner-box">
                <div class="label-sub-heading">
                    Types of Nouns
                </div>

                <div class="list_div">
                    <p>As you can see, Below are the types of Nouns based on their uses"</p>
                    <div class="section-inner-box">
                        <Grid container>
                                <Grid item xs={12} sm={3} >
                                    <div class="bg-blue Normal-mp color-white font-bold">
                                        Common Nouns
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={3} >
                                    <div class="bg-blue Normal-mp color-white font-bold">
                                        Concrete Nouns
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={3} >
                                    <div class="bg-blue Normal-mp color-white font-bold">
                                        Proper Nouns
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={3} >
                                    <div class="bg-blue Normal-mp color-white font-bold">
                                        Abstract Nouns
                                    </div>
                                </Grid>
                                
                            </Grid>

                            <Grid container>
                                <Grid item xs={12} sm={3} >
                                    <div class="bg-blue Normal-mp color-white font-bold">
                                        Collective Nouns
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={3} >
                                    <div class="bg-blue Normal-mp color-white font-bold">
                                        Coumpund Nouns
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={3} >
                                    <div class="bg-blue Normal-mp color-white font-bold">
                                        Countable Nouns
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={3} >
                                    <div class="bg-blue Normal-mp color-white font-bold">
                                        Un-Countable Nouns
                                    </div>
                                </Grid>
                                
                            </Grid>
                        </div>
                        

                    <ul class="un_ordered_list">
                        
                        <li>
                            <a href="#ComNoun">Common Nouns</a>
                        </li>
                        <li>
                            <a href="#ConcreteNoun">Concrete Nouns</a>
                        </li>
                        <li>
                            <a href="#PropNoun">Proper Nouns</a>
                        </li>
                        <li>
                            <a href="#AbsNoun">Abstaract Nouns</a>
                        </li>
                        <li>
                            <a href="#CollNoun">Collective Nouns</a>
                        </li>
                        <li>
                            <a href="#CompNoun">Compound Nouns</a>
                        </li>
                        <li>
                            <a href="#CountNoun">Countable Nouns</a>
                        </li>
                        <li>
                            <a href="#UncountNoun">Un-countable Nouns</a>
                        </li>
                    </ul>

                    <div id="ComNoun" class="div_sub_section_item">
                        <div class="label-sub-heading-item color-blue">Common Nouns</div>
                        <div class="internal_text">
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
                        <div class="label-sub-heading-item color-blue">Concrete Nouns</div>
                        <div class="internal_text">
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

                    <div id="PropNoun" class="div_sub_section_item">
                        <div class="label-sub-heading-item color-maroon">Proper Nouns</div>
                        <div class="internal_text">
                            <span>Proper Nouns</span> are specific names for paticular people, places and some things.
                            <ul>
                                <li>They always start with a capital letter no matter where they fall in a sentence.</li>
                                <li>Proper nouns take a basic common noun and they give it a special, specific name for it.</li>
                            </ul>

                            <p><span>For Example:</span></p>
                            <p> <span>Common Noun:</span> A woman <span>---{">"}</span> <span>Proper Noun:</span> Fiona</p>
                            <p>In the Example above, a common noun has been taken which is a woman. Then the proper noun took it and gave it a much more specific name like Fiona.
                            The proper noun actually gives us a bit more information about the woman, it shows that the woman's name is Fiona.
                               </p>
                        </div>
                    </div>

                    <div id="AbsNoun" class="div_sub_section_item">
                        <div class="label-sub-heading-item color-purple">Abstract Nouns</div>
                        <div class="internal_text">
                            <span>Abstract Nouns</span> are things you can’t see, hear, touch, smell or taste, like emotions or ideas.
                            <ul>
                                <li>Abstract Nouns don't exist in real life but it is imaginable and it is a thing.</li>
                            </ul>

                            <p><span>For Example:</span></p>
                            <ul>
                                <li>To be a really good friend, you have to have <span>loyalty</span>.</li>
                                <li>There was a lot of <span>chaos</span> at the mall.</li>
                                <li>Being more organised is my <span>goal</span>.</li>
                            </ul>
                            <p>In each sentence, there is one abstarct noun. In the first sentence the abstract noun is loyalty,
                            loyalty isn't an object that you can see, hear, touch, smell or taste but it is used in English.
                            </p>
                        </div>
                    </div>

                    <div id="CollNoun" class="div_sub_section_item">
                        <div class="label-sub-heading-item color-purple">Collective Nouns</div>
                        <div class="internal_text">
                            <span>Collective Nouns</span> are words referring to a group of things.
                            <ul>
                                <li>A Collective Noun takes a Common Noun and makes it a collection of things.</li>
                            </ul>

                            <p><span>For Example:</span></p>
                            <ul>
                                <li><span>Common Noun:</span> Singer(s) <span>---{">"}</span> <span>Collective Noun:</span> A <span>choir</span> of singers.</li>
                                <li><span>Common Noun:</span> Bird(s) <span>---{">"}</span> <span>Collective Noun:</span> A <span>flight</span> of birds.</li>
                                <li><span>Common Noun:</span> Cake(s) <span>---{">"}</span> <span>Collective Noun:</span> A <span>batch</span> of cakes.</li>
                            </ul>
                            <p>In each sentence there is one Collective Noun. There is one common noun, for example, singer, the common noun, singer, has turned into a group
                            of singers and a collective noun, such as choir, has been used to do so.
                            </p>
                        </div>
                    </div>

                    <div id="CompNoun" class="div_sub_section_item">
                        <div class="label-sub-heading-item color-blue">Compound Nouns</div>
                        <div class="internal_text">
                            <span>Compound Nouns</span> are words made with two or more words put together.
                            <ul>
                                <li>To make a Compound Noun, there are all sorts of combinations like, <span>[noun + noun]</span> or <span>[adjective + noun]</span> and so many more.</li>
                                <li>Not only are there normal Compound Nouns but there are also plural forms of Compound Nouns.</li>
                            </ul>

                            <p><span>For Example:</span></p>
                            <ul>
                                <li>Sea + Food = Seafood</li>
                                <li>Police + Man = Policeman</li>

                                <p><span>Plural forms of Compound Nouns:</span></p>

                                <li> a school teacher <span>---{">"}</span> three school teachers </li>
                                <li> a sergeant major <span>---{">"}</span> some sergeant majors </li>
                            </ul>
                            <p> Each of the examples above are not distinct at all. They are general nouns that don't give us much information.
                            </p>
                        </div>
                    </div>

                    <div id="CountNoun" class="div_sub_section_item">
                        <div class="label-sub-heading-item color-blue">Countable Nouns</div>
                        <div class="internal_text">
                            <span>Countable Nouns</span> are things that can be counted. They can either be singular or plural.
                            <ul>
                                <li>There can be either an 'a' or 'an' before the (singular) countable noun.</li>
                            </ul>

                            <p><span>For Example (Singular forms):</span></p>
                            <ul>
                                <li>An apple</li>
                                <li>A cup</li>
                                <li>A girl</li>

                                <p><span>Plural forms of Countable Nouns:</span></p>

                                <li> apples </li>
                                <li> cups </li>
                                <li> girls </li>
                            </ul>
                            <p> All the examples for countable nouns can all be individually counted. 
                                In the singular examples, it showed that there was only one of each and they either had an 'a' or 'an' however, 
                                the plural examples didn't have an 'a' or 'an' and it showed that were more than one of each.
                            </p>
                        </div>
                    </div>

                    <div id="UncountNoun" class="div_sub_section_item">
                        <div class="label-sub-heading-item color-blue">Un-countable Nouns</div>
                        <div class="internal_text">
                            <span>Un-countable Nouns</span> are things that aren't possible to be counted.
                            <ul>
                                <li>It is impossible for an Un-countable Noun to have a plural form, they are always singular.</li>
                                
                            </ul>

                            <p><span>For Example:</span></p>
                            <ul>
                                <li>Milk</li>
                                <li>Sugar</li>
                                <li>grass</li>
                                <li>Air</li>
                            </ul>
                            <p> Each example of Un-countable Nouns, cannot be counted because they don't have a plural form so there can only be one of each. </p>
                        </div>
                    </div>








                </div>
            </div>





        </div>




    )
}
export default NounTypes
