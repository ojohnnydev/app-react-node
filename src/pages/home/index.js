import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { Link, withRouter } from 'react-router-dom';
import api from '../../services/api';

class Home extends Component {

    render() {
        return (
            <Container fluid={"md"}
                       style={{padding: 0}} >
                <Row style={{ backgroundColor: '#1770C3', height: '53px'}}>
                    <Col style={{padding: 12}}>
                        <span style={{ color: '#FFFFFF', fontSize: '25px', fontFamily: 'Arial' }}>
                            <Link
                                style={{ color: '#FFFFFF', textDecoration: 'none' }}
                                to="/">DevStore</Link>
                        </span>
                        <span
                            style={{ color: '#FFFFFF', fontSize: '15px', fontFamily: 'Arial', float: 'right', marginTop: '5px', marginLeft: '15px', marginRight: '15px' }}>
                            <Link
                                style={{ color: '#FFFFFF', textDecoration: 'none' }}
                                to="/login">Login</Link>
                        </span>
                        <span
                            style={{ color: '#FFFFFF', fontSize: '15px', fontFamily: 'Arial', float: 'right', marginTop: '5px' }}>
                            <Link
                                style={{ color: '#FFFFFF', textDecoration: 'none' }}
                                to="/cadastrar">Cadastrar</Link>
                        </span>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default withRouter(Home);
