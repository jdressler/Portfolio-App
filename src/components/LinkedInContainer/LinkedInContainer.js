import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import './LinkedInContainer.css'
class LinkedInContainer extends React.Component {
    render(){
        return(
            <a href='#'>
                <div className='linkedin-container py-1' style = {{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <FontAwesomeIcon id='linkedin-icon' icon={faLinkedin}/>
                </div>
            </a>
           
        )
    }
}

export default LinkedInContainer;