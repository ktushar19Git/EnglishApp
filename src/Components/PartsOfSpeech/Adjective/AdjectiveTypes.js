import React from 'react'
import * as TiGroup from "react-icons/ti";

import Button from '@material-ui/core'
import AccessibleIcon from '@material-ui/icons/Accessible';
import headingbullet from '../../../images/righthand.jpg'



function AdjectiveTypes() {
    return (

        <div>
            <div class="label-heading">
            <img src={headingbullet}></img>
                Types of Ajectives
            </div>
            
            <div class="list_div">
                <p>Following are the types of Adjectives based on their uses.</p>
                <ul class="un_ordered_list">
                    <li>
                        <a href="#AttrAdj">Attrubite Adjective</a>
                    </li>
                    <li>
                        <a href="#PrdAdj">Predicate Adjective</a>
                    </li>
                    <li>
                        <a href="#CompAdj">Compound Adjective</a>
                    </li>

                </ul>
            </div>

        <div class="brg_div">
            <div id="AttrAdj">
                <div class="adj_head">
                    Attribute Adjective
                </div>
                <div class="adj_desc">
                    An Attribute Adjective comes before a noun and it directly modifies it.
                    <p>Below are a few examples of Attribute Adjectives to help you understand a bit more.</p>
                    <ul>
                        <li>That's a very <span>big</span> bag.</li>
                        <li>The weights at the gym were very <span>heavy</span></li>
                        <li>That's an <span>expensive</span> watch.</li>
                        <li>Some animals can be extremely <span>clever</span> at times.</li>
                    </ul>
                </div>
            </div>
            <div id="Prdadj">
                <div class="adj_head">
                    Predicate Adjective
                </div>
                <div class="adj_desc">
                    A predicate adjective follows a linking verb and it takes the subject in the sentence and then modifies it. Once it is modified, 
                    the subject will have a description about its appearance or condition.
                    <p>Below are a few examples of Attribute Adjectives to help you understand a bit more.</p>
                    <ul>
                        <li>That TV show was <span>hilarious</span>.</li>
                        <li>The wall is <span>purple</span>.</li>
                        <li>That's an <span>expensive</span> watch.</li>
                        <li>This trip will be <span>risky</span>.</li>
                    </ul>
                </div>
            </div>
            <div id="CompAdj">
                <div class="adj_head">
                    Compound Adjective
                </div>
                <div class="adj_desc">
                    An Attribute Adjective comes before a noun and it directly modifies it.
                    <p>Below are a few examples of Attribute Adjectives to help you understand a bit more.</p>
                    <ul>
                        <li>That's a very <span>big</span> bag.</li>
                        <li>The weights at the gym were very <span>heavy</span></li>
                        <li>That's an <span>expensive</span> watch.</li>
                        <li>Some animals can be extremely <span>clever</span> at times.</li>
                    </ul>
                </div>
            </div>
        </div>

        </div>


    )
}
export default AdjectiveTypes
