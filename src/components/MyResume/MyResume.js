import React from 'react'
import {Row, Col} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFileDownload} from '@fortawesome/free-solid-svg-icons'
import './MyResume.css'

class MyResume extends React.Component {
    render(){
        return(
            <Row className='my-resume-row'>
                <Col md='7'></Col>
                <Col md='3' className='col-fix py-2' id='resume-label-container'>
                    <h3 id='resume'>Download Resume</h3>

                </Col>
               
                <Col md='1' className='col-fix py-2'>
                <FontAwesomeIcon id='download-resume' icon={faFileDownload}/>

                </Col>
            </Row>
        )
    }
}

export default MyResume;