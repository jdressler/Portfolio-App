import React from 'react'
import {Row, Col} from 'react-bootstrap'
import './Footer.css'
import CanadaFlag from '../../images/canada-flag.png'

class Footer extends React.Component {
    render() {
        return (
            <Row id='header-row' className='row-fix'>
                <Col md='1' id='header-flag-icon'>
                    <img src={CanadaFlag} id='canada-flag'/>
                </Col>
                <Col md='4' id='header-information'>
                    <Row id='header-information-row'>
                        <Col md='3 ' id='header-information-location'>
                            <h3 id='location'>Toronto, Ontario</h3>
                        </Col>
                        <Col md='3' id='header-information-name'>
                            <h3 id='number'>416-820-5139</h3>
                        </Col> 
                        <Col md='3' id='header-information-email'>
                            <h3 id='email'>joshua.dressler.dev@outlook.com</h3>
                        </Col>
                    </Row>
                </Col>
                <Col md='1' id='linked-in-icon'>
                    
                </Col>
            
            </Row>
        )
    }
}

export default Footer;