import React from 'react'
import * as TiGroup from "react-icons/ti";

import Button from '@material-ui/core'
import AccessibleIcon from '@material-ui/icons/Accessible';


function InterjectionTypes() {
    return (

        <div>
            <div class="label-heading">
                <AccessibleIcon></AccessibleIcon>
                Types of Interjections
            </div>
            <div class="Content_desc">
                Nouns are classified into multiple types based on their uses. Following are some types of nouns
            </div>

            <div class="Types-div-div">
                
                <ul>
                    <li>
                        <div class="Types-circle-div">
                            <TiGroup.TiGroup></TiGroup.TiGroup>
                        </div>
                        <div class='Types-div'>
                        
                            <div class='div_header'>Proper Nouns</div>

                            <div class='div_header_types'>
                                Proper Nouns are the names of <span class="Highlighters">people, places or things</span>.<br></br><br></br>They always start with a capital letter.

                            </div>

                            <div class='div_header_types'>
                                icons
                                
                            </div>
                        </div>
                    </li>

                    <li>
                        <div class="Types-circle-div">
                            <TiGroup.TiGroup></TiGroup.TiGroup>
                        </div>
                        <div class='Types-div'>
                        <div class='div_header'>Common Nouns</div>

                        <div class='div_header_types'>
                            Common nouns are names for <span class="Highlighters">people</span> or <span class="Highlighters">things</span> in <span class="Highlighters">general</span>.
                                <div>
                                    They never start with a capital letter.
                                </div>                           
                        </div>

                        <div class='div_header_types'>
                            icons
            </div>
                    </div></li>

                    
                    <li>
                        <div class="Types-circle-div">
                            <TiGroup.TiGroup></TiGroup.TiGroup>
                        </div>
                        <div class='Types-div'>
                        
                            <div class='div_header'>Abstract Nouns</div>

                            <div class='div_header_types'>
                                Abstract Nouns are the names of things that you <span class="Highlighters">can't see</span>, <span class="Highlighters">hear</span>, <span class="Highlighters">touch</span> or <span class="Highlighters">smell</span>, like <span class="Highlighters">emotions</span> or <span class="Highlighters">ideas</span>.
                            </div>

                            <div class='div_header_types'>
                                icons
                            </div>
                        </div>
                    
                    </li>

                    



                </ul>
            </div>

            <div class="Types-div-div">
                
                <ul>
                    <li>
                        <div class="Types-circle-div">
                            <TiGroup.TiGroup></TiGroup.TiGroup>
                        </div>
                        <div class='Types-div'>
                        
                            <div class='div_header'>Possesive Nouns</div>

                            <div class='div_header_types'>
                                Possesive Nouns are nouns that show posession. <br></br><br></br> Possesive nouns are used to show ownership and they are usually used with an apostrophe and +s.
                            </div>

                            <div class='div_header_types'>
                                icons
                            </div>
                        </div>
                    
                    </li>
                    <li>
                        <div class="Types-circle-div">
                            <TiGroup.TiGroup></TiGroup.TiGroup>
                        </div>
                        <div class='Types-div'>
                        
                            <div class='div_header'>Collective Nouns</div>

                            <div class='div_header_types'>
                                Proper Nouns are the names of people, places or things.<br></br><br></br>They always start with a capital letter.
                            </div>

                            <div class='div_header_types'>
                                icons
                            </div>
                        </div>
                    
                    </li>

                    <li class="list-item">
                        <div class="Types-circle-div">
                            <TiGroup.TiGroup></TiGroup.TiGroup>
                        </div>
                        <div class='Types-div'>
                        
                            <div class='div_header'>Cocrete Nouns</div>

                            <div class='div_header_types'>
                                A person is an individual human being.
                                For Example:
                            </div>

                            <div class='div_header_types'>
                                icons
                            </div>
                        </div>
                    
                    </li>

                </ul>
            </div>

        </div>


    )
}
export default InterjectionTypes
