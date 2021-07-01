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
                Nouns are a very vital portion of english however it's no use if you don't know how to use them in daily English so in the section below you will learn the exact usage of nouns.
            </div>


            <div class="section-inner-box">
                <div class="label-sub-heading">
                    Usages of Nouns
                </div>

                <div class="list_div">
                    <p>As you can see, Below are the types of Nouns based on their uses"</p>

                    <div class="outer-style">
                        <div id="ComNoun" class="div_sub_section_item">
                            <div class="font-bold bg-white p-m color-teal">Nouns as the Subject</div>
                            <div class="internal_text bg-white">
                                There is not even one sentence (that we speak or write) that does not feature at least one subject, which will be the noun of that sentence. Each sentence must contain a subject as the noun in English. The subject of the sentence, meaning the main person, place or thing that does the action (verb) in the sentence. Take a look at some of the sentences given below:
                                <ul>
                                    <li><b>Mary</b> is wonderful and beautiful.</li>
                                    <li>The <b>baseball</b> got hit far away.</li>
                                </ul>

                                <p><span>The subjects in the sentences above:</span></p>
                                <ul>
                                    <li>Mary</li>
                                    <li>baseball</li>
                                </ul>
                                <p> Each of the examples above have a main thing in the sentence which is the focus of the sentence and then it shows the action. The focus of the sentence is the subject and the examples 'Mary' and 'baseball' are both nouns as the subject.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="outer-style">
                        <div id="ComNoun" class="div_sub_section_item">
                            <div class="font-bold bg-white p-m color-teal">Nouns as the Object</div>
                            <div class="internal_text bg-white">
                                In most sentences, there can also be a use of object nouns. Object of the sentence is the noun that recieves the action(verb) performed by the subject which we learnt above. The object can either be an indirect object or a direct object. Have a look at the sentences below:
                                <ul>
                                    <li>John spotted a <b>panda</b>.</li>
                                    <li>Jen fed the <b>kid</b>.</li>
                                </ul>

                                <p><span>The objects in the sentences above:</span></p>
                                <ul>
                                    <li>Panda</li>
                                    <li>Kid</li>
                                </ul>
                                <p> Each of the examples above had an action(verb) done by the subject and then comes the object which is the one recieving the action. "Panda" and "kid" are the objects of the sentence.
                                </p>
                            </div>
                        </div>
                    </div>










                </div>
            </div>





        </div>




    )
}
export default NounUsages
