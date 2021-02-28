import React from 'react'
import {Row, Col} from 'react-bootstrap'

class MainPanel extends React.Component {
    render(){
        return(
            <Row id='main-panel-row' className='row-fix'>
            <Col md='6'>
                <Row>
                    <Col md='12'>
                    </Col>
                </Row>
                <Row>
                    <Col md='12'></Col>
                </Row>
            </Col>
            <Col md='6'>
                <Row>
                    <Col md='12'>
                    </Col>    
                </Row>   
            </Col>
            
            
        </Row>
        )
    }
}

export default MainPanel;