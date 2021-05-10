import React from 'react'
import PlaceIcon from '@material-ui/icons/Place';
import headingbullet from '../../../images/righthand.jpg'
import {GiMagnifyingGlass} from 'react-icons/gi';


function AdverbExamples()

{
    return (

        <div class="EndofSection">
            <div class="label-heading">
               <img src={headingbullet}></img> Examples of Adverbs
            </div>
            <div>
                <ul class="Exp_items">
                    <li class="og_header Exp_items_coral"> <GiMagnifyingGlass class="icon_style"></GiMagnifyingGlass> How?</li>
                    <li class="og_header Exp_items_blue"> <GiMagnifyingGlass class="icon_style"></GiMagnifyingGlass> When?</li>
                    <li class="og_header Exp_items_green"> <GiMagnifyingGlass class="icon_style"></GiMagnifyingGlass> Where?</li>
                    <li class="og_header Exp_items_purple"> <GiMagnifyingGlass class="icon_style"></GiMagnifyingGlass> How Much?</li>
                    <li class="og_header Exp_items_orange"> <GiMagnifyingGlass class="icon_style"></GiMagnifyingGlass> How Often?</li>
                </ul>
            </div>

            







        </div>

    
    )
}
export default AdverbExamples
