import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'react-bootstrap'

import './MainContainer.css';

class MainContainer extends React.Component {
  render() {
      return (
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
export default MainContainer; 