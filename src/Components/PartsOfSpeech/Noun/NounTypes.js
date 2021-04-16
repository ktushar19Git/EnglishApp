import React from 'react'
import * as TiGroup from "react-icons/ti";

import Button from '@material-ui/core'
import AccessibleIcon from '@material-ui/icons/Accessible';


function NounTypes() {
    return (

        <div>
            <div class="label-heading">
                <AccessibleIcon></AccessibleIcon>
                Types of Nouns
            </div>
            <div class="Content_desc">
                Nouns are classified into multiple types based on their uses. Following are some types of nouns
            </div>

            <div class="div_sub_section">
                <div class="label-sub-heading">
                    Types of Nouns
                </div>
                
            <div class="list_div">
                <p>As you can see, Below are the types of Nouns based on their uses"</p>
                    <ul class="un_ordered_list">
                        <li>
                            <a href="#PropNoun">Proper Nouns</a>
                        </li>
                        <li>
                            <a href="#ComNoun">Common Nouns</a>
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
                        <div class="label-sub-heading-item color-maroon">Abstract Nouns</div>
                        <div class="internal_text">
                            <span>Abstract Nouns</span> are things you can’t see, hear, touch, smell or taste, like emotions or ideas.
                            <ul>
                                <li>Abstract Nouns does't exist in real life but it is imaginable and it is a thing.</li>
                            </ul>
                            
                               <p><span>For Example:</span></p>
                               <ul>
                                        <li>To be a really good friend, you have to have <span>loyalty</span>.</li>
                                        <li>There was a lot of <span>chaos</span> at the mall.</li>
                                        <li>Being more organised is my <span>goal</span>.</li>
                                </ul>
                            <p>In the Example above, a common noun has been taken which is a woman. Then the proper noun took it and gave it a much more specific name like Fiona.
                            The proper noun actually gives us a bit more information about the woman, it shows that the woman's name is Fiona.
                               </p>
                        </div>
                    </div>

                    <div id="CollNoun" class= "div_sub_section_item">
                        <div class="label-sub-heading-item color-green">Collective Nouns</div>
                        <div class="internal_text">
                            Collective nouns name a group of things. No capital letter either.
                        </div>               
                    </div> 
                    <div id="CompNoun" class= "div_sub_section_item">
                        <div class="label-sub-heading-item color-green">Compound Nouns</div>
                        <div class="internal_text">
                            Proper Nouns are specific names for paticular people, places and some things. They always start with a capital letter.
                        </div>               
                    </div> 

            
            </div>
            </div> 

            
            
                
                
        </div>

        


    )
}
export default NounTypes
