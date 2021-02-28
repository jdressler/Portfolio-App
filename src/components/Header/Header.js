import React from 'react'
import {Row, Col, Button} from 'react-bootstrap'
import SocialContainer from '../SocialContainer/SocialContainer'
import './Header.css'

class Header extends React.Component {
    render() {
        return (
            <Row className='row-fix header-container'>
                <Col md='5'></Col>
                <Col md='2' className='py-2 d-flex justify-content-center'>
                    <div className='contact-button-container'>
                        <Button className='vertical-align-initial' variant='success' href='/contact' id='contact-button-header'>Contact Me</Button>
                    </div>
                </Col>
                <Col md='3'></Col>
                <Col md='1'>
                    <SocialContainer/>
                </Col>
                <Col md='1'></Col>
            </Row>
        )
    }
}

export default Header;