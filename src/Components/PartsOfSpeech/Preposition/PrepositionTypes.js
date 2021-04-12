import React from 'react'
import * as TiGroup from "react-icons/ti";

import Button from '@material-ui/core'
import AccessibleIcon from '@material-ui/icons/Accessible';
import headingbullet from '../../../images/righthand.jpg'



function PrepositionTypes() {
    return (

        <div>
            <div class="label-heading">
            <img src={headingbullet}></img>
                Types of Prepositions
            </div>
            
            <div class="list_div">
                <p>Following are the types of Prepositions based on their uses.</p>
                <ul class="un_ordered_list">
                    <li>
                        <a href="#AttrAdj">Attrubite Adjective</a>
                    </li>
                    <li>
                        <a href="#PrdAdj">Predicate Adjective</a>
                    </li>
                    <li>
                        <a href="#CompAdj">Coumpound Adjective</a>
                    </li>

                </ul>
            </div>

            <div id="AttrAdj" class="MarginNormal">
                <div class="label-sub-heading">
                    Attribute Adjective
                </div>
                <div class="Content_sub_desc">
                                This is Attribute ADjective. This is Attribute ADjective. This is Attribute ADjective. This is Attribute ADjective. This is Attribute ADjective.
                </div>
            </div>
            <div id="PrdAdj" class="MarginNormal">
                <div class="label-sub-heading">
                    Predicate Adjective
                </div>
                <div class="Content_sub_desc">
                                This is Attribute ADjective. This is Attribute ADjective. This is Attribute ADjective. This is Attribute ADjective. This is Attribute ADjective.
                </div>
            </div>
            <div id="CompAdj" class="MarginNormal">
                <div class="label-sub-heading">
                    Coumpound Adjective
                </div>
                <div class="Content_sub_desc">
                                This is Attribute ADjective. This is Attribute ADjective. This is Attribute ADjective. This is Attribute ADjective. This is Attribute ADjective.
                </div>
            </div>

        </div>


    )
}
export default PrepositionTypes
