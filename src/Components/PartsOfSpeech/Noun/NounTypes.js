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
                            <a href="#AttrAdj">Proper Nouns</a>
                        </li>
                        <li>
                            <a href="#PrdAdj">Common Nouns/Concrete Nouns</a>
                        </li>
                        <li>
                            <a href="#CompAdj">Abstaract Nouns</a>
                        </li>
                        <li>
                            <a href="#AttrAdj">Collective Nouns</a>
                        </li>
                        <li>
                            <a href="#CompNoun">Compound Nouns</a>
                        </li>
                        <li>
                            <a href="#AttrAdj">Proper Nouns</a>
                        </li>
                    </ul>

                    <div class= "div_sub_section_item">
                        <div class="label-sub-heading-item color-maroon">Proper Nouns</div>
                        <div class="internal_text">
                            <b>Proper Nouns</b> are specific names for paticular people, places and some things. They always start with a capital letter.
                        </div>               
                    </div> 

                    <div class= "div_sub_section_item">
                        <div class="label-sub-heading-item color-blue">Common Nouns/Concrete Nouns</div>
                        <div class="internal_text">
                            Proper Nouns are specific names for paticular people, places and some things. They always start with a capital letter.
                        </div>               
                    </div> 
                    <div class= "div_sub_section_item">
                        <div class="label-sub-heading-item color-green">Abstaract Nouns</div>
                        <div class="internal_text">
                            Proper Nouns are specific names for paticular people, places and some things. They always start with a capital letter.
                        </div>               
                    </div> 
                    <div id="CompNoun" class= "div_sub_section_item">
                        <div class="label-sub-heading-item color-green">Collective Nouns</div>
                        <div class="internal_text">
                            Proper Nouns are specific names for paticular people, places and some things. They always start with a capital letter.
                        </div>               
                    </div> 
                    <div class= "div_sub_section_item">
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
