import React from 'react'
import {Row, Col} from 'react-bootstrap'
import './MyInformation.css'
class MyInformation extends React.Component {
    render(){
        return(
            <Row id='my-information-row'>
                <Col md='3 ' id='my-information-location'>
                    <h3 id='location'>Toronto, Ontario</h3>
                </Col>
                <Col md='3' id='my-information-name'>
                    <h3 id='number'>416-820-5139</h3>
                </Col> 
                <Col md='3' id='my-information-email'>
                    <h3 id='email'>joshua.dressler.dev@outlook.com</h3>
                </Col>
            </Row>
        )
    }
}

export default MyInformation;