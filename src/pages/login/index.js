import React, { Component } from 'react';
import { Link, withRouter  } from 'react-router-dom';
import api from '../../services/api';
import { login } from "../../services/auth";

import Logo from '../../assets/user.svg';
import { Form } from './styles';
import Swal from 'sweetalert2';
import { Container, Row, Col } from 'react-bootstrap';

class Login extends Component {
    state = {
        nome: '',
        senha: '',
        error: ''
    }

    handleLogin = async  e => {
        e.preventDefault();

        const { nome, senha } = this.state;

        if (!nome || !senha) {
            Swal.fire({
                title: 'Atenção!',
                text: 'Preencha os campos para realizar o login!',
                icon: 'warning',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#2778C4'
            })
        } else {
            try {
                const response = await api.get(`/usuarios/${nome}/${senha}`);

                // Criando um token básico para o usuário

                let header = {
                    "typ": "JWT",
                    "alg": "HS256"
                }

                header = JSON.stringify(header);
                header = Buffer.from(header).toString('base64');

                let payload = {
                    "iss": 'tiagooliveira.com',
                    "iat": new Date().toLocaleString(),
                    "exp": new Date().setMinutes(60).toLocaleString(),
                    "acl" : ['coordenador', 'desenvolvedor'],
                    "username": response.data[0]['nome'],
                    "email": response.data[0]['email']
                };

                payload = JSON.stringify(payload);
                payload = Buffer.from(payload).toString('base64');

                let token = header + "." + payload;

                if (response.data.length === 0) {
                    Swal.fire({
                        title: 'Atenção!',
                        text: 'Usuário não cadastrado!',
                        icon: 'warning',
                        confirmButtonText: 'Ok',
                        confirmButtonColor: '#f05f70'
                    });
                } else {
                    login(token);
                    this.props.history.push("/minha-pagina");
                }
            } catch (err) {
                Swal.fire({
                    title: 'Erro!',
                    text: 'Ocorreu um erro ao realizar o login!',
                    icon: 'error',
                    confirmButtonText: 'Ok',
                    confirmButtonColor: '#F05F70'
                });
            }
        }
    }

    render() {
        return (

            <Container fluid={"md"} style={{ padding: 0 }}>

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

                <Row>
                    <Form onSubmit={this.handleLogin} autoComplete="off">

                        <img src={Logo} alt="Login logo" />

                        <input
                            type="text"
                            placeholder="Nome de usuário"
                            onChange={e => this.setState({ nome: e.target.value })}
                        />
                        <input
                            type="password"
                            placeholder="Senha"
                            onChange={e => this.setState({ senha: e.target.value })}
                        />
                        <button type="submit">Logar</button>

                        <hr/>

                        <Link to="/cadastrar">Realizar Cadastro</Link>
                    </Form>
                </Row>
            </Container>
        );
    }
}

export default withRouter(Login);
