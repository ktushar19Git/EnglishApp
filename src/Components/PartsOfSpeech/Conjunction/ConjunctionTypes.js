import React from 'react'
import * as TiGroup from "react-icons/ti";

import Button from '@material-ui/core'
import AccessibleIcon from '@material-ui/icons/Accessible';
import headingbullet from '../../../images/righthand.jpg'
import {GiMagnifyingGlass} from 'react-icons/gi';



function AdverbTypes() {
    return (

        <div>
            <div class="label-heading">
            <img src={headingbullet}></img>
                Types of Conjunctions
            </div>

            <div>
                <ul class="Exp_items">
                    <li class="og_header Exp_list_item"> <GiMagnifyingGlass class="icon_style"></GiMagnifyingGlass> Coordinating Conjuntions
                        <div class="og_typing">
                            
                        </div>
                        
                    </li>
                    <li class="og_header Exp_list_item"> <GiMagnifyingGlass class="icon_style"></GiMagnifyingGlass> Subordinating Conjunctions</li>
                    <li class="og_header Exp_list_item"> <GiMagnifyingGlass class="icon_style"></GiMagnifyingGlass> Correlative Conjunctions</li>
                    <li class="og_header Exp_list_item"> <GiMagnifyingGlass class="icon_style"></GiMagnifyingGlass> Compound Conjunctions</li>
                </ul>
            </div>

        </div>


    )
}
export default AdverbTypes
