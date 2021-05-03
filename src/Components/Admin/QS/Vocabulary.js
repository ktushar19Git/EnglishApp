import React, {Component} from 'react'




import Menu from '../Menu'
import Header from '../../Header'


class Vocabulary extends Component
{

        

    render(){
        return(
            <div >
                
                <Header></Header>

                <table >
                    <tr>
                        <td >
                            
                            
                            <Menu></Menu>
                                
                            
                            
                        </td>
                        <td style={{verticalAlign:'top'}}>
                            
                            <div style={{verticalAlign:'top'}}>
                                Vocabulary Management
                            </div>
                            
                            <div >
                            <div >
                                Basic Details
                                <div >
                                    <div >
                                        This is a Content Section

                                    </div>
                                    <div class='MarginNormal'>
                                        
                                    </div>
                                    
                                </div>
                            </div>
                            </div>

                            <div >
                                This is a Details Section
                            </div>
                            
                        </td>
                    </tr>
                    
                </table>
                
            </div>
        )
    }
}
export default Vocabulary