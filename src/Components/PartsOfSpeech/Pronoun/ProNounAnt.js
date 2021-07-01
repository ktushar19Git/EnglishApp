import React from 'react'
import * as TiGroup from "react-icons/ti";

import Button from '@material-ui/core'
import AccessibleIcon from '@material-ui/icons/Accessible';
import headingbullet from '../../../images/righthand.jpg'



function ProNounAnt() {
    return (

        <div class="section-outer-box bg-white">
            <div class="label-heading">
                <img src={headingbullet}></img>
                Types of Nouns
            </div>
            <div class="Content_desc">
                Pronouns are divided into various different types and all have their own uses. Following are six types of pronouns:
            </div>

            <div class="section-inner-box">
            <div class="table_type_3">
                    <table>
                        <tr>
                            <th>
                                Pronoun
                            </th>
                            <th>
                                Definition
                            </th>
                            <th>
                                Example
                            </th>
                            <th>
                                Sentence
                            </th>
                        </tr>
                        <tr>
                            <td>
                                Personal pronouns
                            </td>
                            <td>
                                Personal pronouns are used for a specific object or person to avoid using their name 
                                over and over again.
                            </td>
                            <td>
                                I, you, he, she, it, we, they
                            </td>
                            <td>
                                In my opinion, I think blue would look better.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Relative Pronouns
                            </td>
                            <td>
                                A relative pronoun is a pronoun that heads an adjective clause and is used in a 
                                relative clause. 
                            </td>
                            <td>
                                That, which, who, whom
                            </td>
                            <td>
                                My aunt bought a new vase that had a beautiful design printed on it.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Indefinite Pronouns
                            </td>
                            <td>
                                An indefinite pronoun does not refer to any specific person, thing or amount.  
                            </td>
                            <td>
                                All, any, each, few, many
                            </td>
                            <td>
                                Everyone was boiling in the sun so I got quite a few drinks for everyone.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Interrogative pronouns
                            </td>
                            <td>
                                An interrogative pronoun is used to make asking questions easy.  
                            </td>
                            <td>
                                What, who, whose, which
                            </td>
                            <td>
                                I bought a bottle which had a straw in it.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Posessive Pronouns
                            </td>
                            <td>
                                A possessive pronoun indicates possession or ownership.  
                            </td>
                            <td>
                                Mine, yours, his, hers, ours
                            </td>
                            <td>
                                My classmate stole a pen that was clearly mine.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Demonstrative Pronouns
                            </td>
                            <td>
                                Demonstrative pronouns point towards the noun it replaces, indicating it in time, space and distance. There are 4 of them. 
                            </td>
                            <td>
                                This, that, these, those
                            </td>
                            <td>
                                I don't remember buying these books.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Reflexive Pronouns
                            </td>
                            <td>
                                Reflexive pronouns are used when a person or thing is referring to the same person or thing.
                            </td>
                            <td>
                                Himself, herself, myself
                            </td>
                            <td>
                                I work a lot better by myself with no distractions.
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            </div>

            
        


    )
}
export default ProNounAnt
