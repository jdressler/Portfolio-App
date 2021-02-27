import React from 'react'
import {Row, Col, Button} from 'react-bootstrap'

import './Header.css'
class Header extends React.Component {
    render() {
        return (
            <Row className='row-fix py-2'>
                <Col md='5'></Col>
                <Col md='2' className="d-flex">
                <div style = {{display: 'flex', flexDirection: 'column', alignItems: 'center'}} id='contact-button-container'>
                  <Button className='vertical-align-initial' variant='success' href='/contact' id='contact-button-header'>Contact Me</Button>
                </div>
                </Col>
                <Col md='5'></Col>
            </Row>
        )
    }
}

export default Header;