import React from 'react'
import logoheader from '../images/LogoEnglish.png'


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

            <li>Punctuation</li>
            <li><a>Vocabulary</a>
                <div class="SubMenu">
                    <ul >
                        <li>
                            <a href="VocabularyDisplay">Vocabulary</a>
                        </li>
                        <li>
                            <a href="SynonmsDisplay">Synonyms</a>
                        </li>
                        <li>
                            <a href="AntonymsDisplay">Antonyms</a>
                        </li>
                        <li>
                            <a href="PhrasesDisplay">Phrases</a>
                        </li>
                        <li>
                            <a href="EdiomsDisplay">Edioms</a>
                        </li>
                        
                    </ul>
                </div>
            </li>
            <li><a>Practice</a>
                <div class="SubMenu">
                    <ul >
                        <li>
                            <a href="QuestionDisplay">Practice Questions</a>
                        </li>
                    </ul>
                </div>
            </li>
            <li>Article</li>
        </ul>

    </div>
    )

} 
 
export default Menu