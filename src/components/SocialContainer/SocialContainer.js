import React from 'react'
import {Row, Col} from 'react-bootstrap'
import GitContainer from '../GitContainer/GitContainer'
import LinkedInContainer from '../LinkedInContainer/LinkedInContainer'
class SocialContainer extends React.Component {
    render(){
        return(
            <Row className='row-fix social-container'>
                <Col md='6' className='col-fix'>
                    <GitContainer/>
                </Col>
                <Col md='6'>
                    <LinkedInContainer/>
                </Col>
            </Row>      
        )
    }
}

export default SocialContainer;