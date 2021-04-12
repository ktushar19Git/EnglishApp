import React from 'react'

function Menu()

{
    return (

    <div class="Menu">
        <ul >

            <li><a>Grammar</a>
                <div class="SubMenu">
                    <ul >
                        <li>
                            <a href="Nouns">Nouns</a>
                        </li>
                        <li>
                            <a href="ProNouns">ProNouns</a>
                        </li>
                        <li>
                            <a href="Adjectives">Adjectives</a>
                        </li>
                        <li>
                            <a href="Verbs">Verbs</a>
                        </li>
                        <li>
                            <a href="Adverbs">Adverbs</a>
                        </li>
                        <li>
                            <a href="Prepositions">Prepositions</a>
                        </li>
                        <li>
                            <a href="Conjunctions">Conjunctions</a>
                        </li>
                        <li>
                            <a href="Interjections">Interjections</a>
                        </li>

                        
                    </ul>
                </div>
            </li>

            <li><a>Spelling</a>
                <div class="SubMenu">
                    <ul>
                        <li>Spelling</li>
                        <li>ProNouns</li>
                        <li>Addjectives</li>
                        <li>Verbs</li>
                    </ul>
                </div>
            </li>
            <li><a>Punctuation</a>
                <div class="SubMenu">
                    <ul >
                        <li>Basic Punctuation</li>
                        <li>Commas</li>
                        <li>Colons and semi-colons</li>
                        <li>Exclamation marks</li>
                    </ul>
                </div>
            </li>


            <li>Spelling</li>
            <li>Punctuation</li>
            <li>Vocabulary</li>
            <li>Article</li>
        </ul>

    </div>
    )

} 
 
export default Menu