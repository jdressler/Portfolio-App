import React from 'react'
import {Row, Col} from 'react-bootstrap'
import MyInformation from '../MyInformation/MyInformation'
import MyResume from '../MyResume/MyResume'
import './Footer.css'
import CanadaFlag from '../../images/canada-flag.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFileDownload} from '@fortawesome/free-solid-svg-icons'

class Footer extends React.Component {
    render() {
        return (
            <Row className='row-fix footer'>
                <Col md='1'></Col>
                <Col md='1' id='footer-flag-icon'>
                    <img src={CanadaFlag} id='canada-flag'/>
                </Col>
                <Col md='2'></Col>
                <Col md='4' id='footer-my-information'>
                    <MyInformation/>
                </Col>
                <Col md='2'></Col>
                <Col md='2'>
                    <MyResume/>
                   

                </Col>
              
              
            
            </Row>
        )
    }
}

export default Footer;