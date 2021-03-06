import React from 'react'
import logoheader from '../images/LogoEnglish.png'
import { GoTriangleRight } from 'react-icons/go'
import { GoTriangleDown } from 'react-icons/go'




function Menu()

{
    return (
    
        
    
    <div class="Menu">
         
        <ul >
            
            
            <li><a href="">Grammar</a><GoTriangleDown class="Menu-Down-Icon"></GoTriangleDown>
                <div class="SubMenu">
                    <ul >
                        <li>
                            <a href="Nouns">Parts Of Speech </a> <GoTriangleRight class="Menu-Next-Icon"></GoTriangleRight> 
                                <div class="SubMenu-1">
                                    <ul>
                                        <li>
                                            <a href="Nouns">Nouns</a>
                                        </li>
                                        <li>
                                            <a href="ProNouns">Pronouns</a>
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

                        <li>
                            <a href="Nouns">Figure of Speech</a> <GoTriangleRight class="Menu-Next-Icon"></GoTriangleRight>
                            <div class="SubMenu-1">
                                    <ul>
                                        <li>
                                            <a href="Simile">Simile</a>
                                        </li>
                                        <li>
                                            <a href="Metaphor">Metaphor</a>
                                        </li>
                                        <li>
                                            <a href="Personification">Personification</a>
                                        </li>
                                        <li>
                                            <a href="Apostrophe">Apostrophe</a>
                                        </li>
                                        <li>
                                            <a href="Metonymy">Metonymy</a>
                                        </li>
                                        <li>
                                            <a href="Synecdoche">Synecdoche</a>
                                        </li>
                                        <li>
                                            <a href="Onomatopoeia">Onomatopoeia</a>
                                        </li>
                                        <li>
                                            <a href="Alliteration">Alliteration</a>
                                        </li>
                                        <li>
                                            <a href="Assonance">Assonance</a>
                                        </li>
                                        <li>
                                            <a href="Pun">Pun</a>
                                        </li>
                                        
                                        
                                    </ul>
                                </div>
                        </li>
                        <li>
                            <a href="Tenses">Tenses</a> 
                            
                        </li>
                        <li>
                            <a href="Nouns">Active/Passive Voice</a> <GoTriangleRight class="Menu-Next-Icon"></GoTriangleRight>
                            <div class="SubMenu-1">
                                    <ul>
                                        <li>
                                            <a href="Simile">Simile</a>
                                        </li>
                                        <li>
                                            <a href="Metaphor">Metaphor</a>
                                        </li>
                                        <li>
                                            <a href="Personification">Personification</a>
                                        </li>
                                        <li>
                                            <a href="Apostrophe">Apostrophe</a>
                                        </li>
                                        <li>
                                            <a href="Metonymy">Metonymy</a>
                                        </li>
                                        <li>
                                            <a href="Synecdoche">Synecdoche</a>
                                        </li>
                                        <li>
                                            <a href="Onomatopoeia">Onomatopoeia</a>
                                        </li>
                                        <li>
                                            <a href="Alliteration">Alliteration</a>
                                        </li>
                                        <li>
                                            <a href="Assonance">Assonance</a>
                                        </li>
                                        <li>
                                            <a href="Pun">Pun</a>
                                        </li>
                                        
                                        
                                    </ul>
                                </div>
                        </li>
                        

                        
                    </ul>
                </div>
            </li>

            

            
            <li><a href="">Vocabulary</a> <GoTriangleDown class="Menu-Down-Icon"></GoTriangleDown>
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
                            <a href="EdiomsDisplay">Idioms</a>
                        </li>
                        
                    </ul>
                </div>
            </li>
            <li><a href="">Practice</a> <GoTriangleDown class="Menu-Down-Icon"></GoTriangleDown>
                <div class="SubMenu">
                    <ul >
                        <li>
                            <a href="SubjectDisplay">Practice Questions by Subject</a>
                        </li>
                        <li>
                            <a href="QuestionDisplay">Practice Questions</a>
                        </li>
                    </ul>
                </div>
            </li>
            <li><a href="">Article</a></li>
        </ul>

    </div>


    
    )

} 
 
export default Menu