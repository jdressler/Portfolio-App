import React from 'react';
import {Row, Col} from 'react-bootstrap'
import MainPanel from '../MainPanel/MainPanel'
import './MainContainer.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

class MainContainer extends React.Component {

    render() {
        return (
        <Row className='row-fix main-container-row'>
            <Col md='12'>
            <Router>
                <Switch>
                    <Route exact path='/' component={MainPanel}/>
                </Switch>
            </Router>
            </Col>
        </Row>
    


      )
  }
}
export default MainContainer; 