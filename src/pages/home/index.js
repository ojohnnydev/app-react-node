import React, { Component } from 'react';
import Menu from '../../componentes/menu/index';
import { Container, Row, Col } from 'react-bootstrap';

import { Link, withRouter } from 'react-router-dom';
import api from '../../services/api';
import Computador from '../../assets/computador.svg';
import Celular from "../../assets/smartphone.svg";

class Home extends Component {

    state = {
        computadores: [],
        celulares: []
    }

    async componentDidMount(){
        const response_computadores = await api.get(`/computadores`);
        this.setState({ computadores: response_computadores.data });

        const response_celulares = await api.get(`/celulares`);
        this.setState({ celulares: response_celulares.data });
    }

    render() {

        const { computadores, celulares } = this.state;

        return (
            <Container fluid={"md"} style={{padding: 0}} >
                <Menu/>
                <Row style={{ marginTop: '50px' }}>
                    <Col style={{ display: 'flex', padding: '25px', textAlign: '-webkit-center' }}>
                        {this.state.computadores.slice(0, 5).map(computador => (
                            <span style={{ width: '60%' }}>
                                <img src={Computador} alt="Imagem ilustrativa" style={{ width: '160px', display: 'block' }} />
                                <span style={{ fontSize: '15px', display: 'block' }}><b>Armazenamento:</b> {computador.armazenamento}</span>
                                <span style={{ fontSize: '15px', display: 'block' }}><b>Memória:</b> {computador.memoria}</span>
                                <span style={{ fontSize: '15px', display: 'block' }}><b>Processador:</b> {computador.processador}</span>
                                <span style={{ fontSize: '15px', display: 'block' }}><b>Sistema Operacional:</b> {computador.sistema_operacional}</span>
                                <span style={{ fontSize: '15px', display: 'block' }}><b>Tamanho Tela:</b> {computador.tamanho_tela}</span>
                                <span style={{ fontSize: '15px', display: 'block' }}><b>Cor:</b> {computador.cor}</span>
                                <span style={{ fontSize: '15px', display: 'block' }}><b>Preço:</b> R$ {computador.preco.toLocaleString("pt-BR", {minimumFractionDigits: 2})}</span>
                            </span>
                        ))}
                    </Col>
                </Row>
                <Row style={{ marginTop: '50px' }}>
                    <Col style={{ display: 'flex', padding: '25px', textAlign: '-webkit-center' }}>
                        {this.state.computadores.slice(5, 10).map(computador => (
                            <span style={{ width: '60%' }}>
                                <img src={Computador} alt="Imagem ilustrativa" style={{ width: '160px', display: 'block' }} />
                                <span style={{ fontSize: '15px', display: 'block' }}><b>Armazenamento:</b> {computador.armazenamento}</span>
                                <span style={{ fontSize: '15px', display: 'block' }}><b>Memória:</b> {computador.memoria}</span>
                                <span style={{ fontSize: '15px', display: 'block' }}><b>Processador:</b> {computador.processador}</span>
                                <span style={{ fontSize: '15px', display: 'block' }}><b>Sistema Operacional:</b> {computador.sistema_operacional}</span>
                                <span style={{ fontSize: '15px', display: 'block' }}><b>Tamanho Tela:</b> {computador.tamanho_tela}</span>
                                <span style={{ fontSize: '15px', display: 'block' }}><b>Cor:</b> {computador.cor}</span>
                                <span style={{ fontSize: '15px', display: 'block' }}><b>Preço:</b> R$ {computador.preco.toLocaleString("pt-BR", {minimumFractionDigits: 2})}</span>
                            </span>
                        ))}
                    </Col>
                </Row>
                <Row style={{ marginTop: '50px' }}>
                    <Col style={{ display: 'flex', padding: '25px', textAlign: '-webkit-center' }}>
                        {this.state.celulares.slice(0, 5).map(celular => (
                            <span style={{ width: '60%' }}>
                                <img src={Celular} alt="Imagem ilustrativa" style={{ width: '160px', display: 'block', marginBottom: '15px' }} />
                                <span style={{ fontSize: '15px', display: 'block' }}><b>Marca:</b> {celular.marca}</span>
                                <span style={{ fontSize: '15px', display: 'block' }}><b>Modelo:</b> {celular.modelo}</span>
                                <span style={{ fontSize: '15px', display: 'block' }}><b>Cor:</b> {celular.cor}</span>
                                <span style={{ fontSize: '15px', display: 'block' }}><b>Preço:</b> R$ {celular.preco.toLocaleString("pt-BR", {minimumFractionDigits: 2})}</span>
                            </span>
                        ))}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default withRouter(Home);
