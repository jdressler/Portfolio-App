import React from 'react'
import {Row, Col} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFileDownload, faHandPointRight} from '@fortawesome/free-solid-svg-icons'
import './MyResume.css'

class MyResume extends React.Component {
    render(){
        return(
            <Row className='my-resume-row'>
                <Col md='4' className='' id='resume-label-container'>
                    <h3 id='resume'>Download Resume</h3>
                </Col>
                <Col md='2' className='py-2'>
                    <FontAwesomeIcon id='resume-hand-icon' icon={faHandPointRight}/>
                </Col>
                <Col md='3' className='py-2'>
                    <FontAwesomeIcon id='download-resume' icon={faFileDownload}/>
                </Col>
                <Col md='2'></Col>
            </Row>
        )
    }
}

export default MyResume;