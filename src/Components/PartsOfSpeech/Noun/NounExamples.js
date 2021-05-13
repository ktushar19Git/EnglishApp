import React from 'react'
import PlaceIcon from '@material-ui/icons/Place';
import {FcBusinessman, FcBusinesswoman, FcCloseUpMode} from 'react-icons/fc';
import {FcOrganization, FcGlobe, FcPlanner,FcInfo} from 'react-icons/fc';
import {FaCat} from 'react-icons/fa';
import {GiElephant} from 'react-icons/gi';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';


import { withStyles, makeStyles } from '@material-ui/core/styles';


const useStylesBootstrap = makeStyles((theme) => ({
    arrow: {
      color: theme.palette.common.black,
    },
    tooltip: {
      backgroundColor: theme.palette.common.black,
    },
  }));

  function BootstrapTooltip(props) {
    const classes = useStylesBootstrap();
  
    return <Tooltip arrow classes={classes} {...props} />;
  }

function NounExamples()

{
    return (

        <div class="EndofSection">
            <div class="label-heading">
                Examples of Nouns
            </div>
            <div class="Content_desc">
                Nouns are classified into multiple types based on their uses. Following are some types of nouns
            </div>

            <div >
                <ul class="horizontal_list">
                    <li class="List_item_red">
                        
                        <ul>
                            <li>
                                Person 
                                <BootstrapTooltip  title="Nouns are very useful components Bootstap" >
                                    <FcInfo class="iconinfo"></FcInfo>
                                </BootstrapTooltip >

                            </li>
                            <li>
                                <div>
                                    A noun that acts as a person is a human being regarded as an individual.
                                </div>
                                <div>
                                
                                    <FcBusinessman class="iconstandard"></FcBusinessman>
                                
                                    <FcBusinesswoman class="iconstandard"></FcBusinesswoman>
                                </div>
                            </li>
                            <li>
                                
                                    <ul>
                                        <span>Examples:</span>
                                        <li ><span>Josh</span> loves being a <span>pilot</span>.</li>
                                        <li ><span>Sarah</span> is an <span>engineer</span>.</li>
                                    </ul>
                                
                            </li>
                        </ul>
                    </li>
                    <li class="List_item_green">
                        
                        <ul>
                            <li>
                                Place <Tooltip title="Place Nouns are very useful components" TransitionComponent={Zoom}>
                                    <FcInfo class="iconinfo"></FcInfo>
                                </Tooltip>
                            </li>
                            <li>
                                <div>
                                    A noun that acts as a place is a location, point or area and tells the setting.
                                </div>
                                <div>
                                    <FcGlobe class="iconstandard"></FcGlobe>
                                    <FcOrganization class="iconstandard"></FcOrganization>
                                    
                                </div>
                            </li>
                            <li>
                                
                                    <ul>
                                        <span>Examples:</span>
                                        <li > A <span>globe</span> is a model of the <span>earth</span>.</li>
                                        <li> My <span>company</span> has rented an <span>office</span>.</li>
                                    </ul>
                                
                            </li>
                        </ul>
                    </li>
                    <li class="List_item_purple">
                        
                        <ul>
                            <li>
                                Animal 
                                <Tooltip title="Nouns are very useful components" aria-label="add">
                                    <FcInfo class="iconinfo"></FcInfo>
                                </Tooltip>
                            </li>
                            <li>
                                <div>
                                    A noun that acts as an animal is a creature, similiar to a human but has a different life.
                                </div>
                                <div>
                                    <FaCat class="iconstandard color_purple"></FaCat>
                                    <GiElephant class="iconstandard color_grey" ></GiElephant>
                                </div>
                            </li>
                            <li>
                                
                                    <ul>
                                        <span>Examples:</span>
                                        <li > <span>Cat</span> and <span>mouse</span> are enemies.</li>
                                        <li ><span>Elephant</span> is an incredible <span>animal</span>.</li>
                                    </ul>
                                
                            </li>
                        </ul>
                    </li>
                    <li class="List_item_blue">
                        
                        <ul>
                            <li>
                                Thing 
                                <Tooltip title="Nouns are very useful components" class="Tooltip" aria-label="add">
                                    <FcInfo class="iconinfo"></FcInfo>
                                </Tooltip>
                            </li>
                            <li>
                                <div>
                                    A noun that acts as a thing is an object that is not living.
                                </div>
                                <div>
                                    <FcPlanner class="iconstandard"></FcPlanner>
                                    <FcCloseUpMode class="iconstandard"></FcCloseUpMode>
                                </div>
                            </li>
                            <li>
                                
                                    <ul>
                                        <span>Examples:</span>
                                        <li > A <span>calendar</span> is very useful.</li>
                                        <li > There are many <span>flowers</span> in the garden.</li>
                                    </ul>
                                
                            </li>
                        </ul>
                    </li>

                    
                </ul>
            
            </div>





        </div>

    
    )
}
export default NounExamples
