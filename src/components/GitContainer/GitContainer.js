import React from 'react'
import {Row, Col} from 'react-bootstrap'
import {faGithubSquare} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './GitContainer.css'

class GitContainer extends React.Component {
    render(){
        return(
            <a href='#'>
                <div className='git-container py-1' style = {{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <FontAwesomeIcon id='git-icon' icon={faGithubSquare}/>
                </div>
            </a>
          
        )
    }
}

export default GitContainer;