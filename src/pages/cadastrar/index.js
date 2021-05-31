import React, { Component } from 'react';
import { Link, withRouter  } from 'react-router-dom';
import api from '../../services/api';

import Logo from '../../assets/login.svg';
import { Form } from './styles';
import Swal from 'sweetalert2';
import { Container, Row, Col } from 'react-bootstrap';

import Menu from '../../componentes/menu/index';

class Cadastrar extends Component {
    state = {
        nome: '',
        email: '',
        senha: ''
    }

    handleCadastro = async  e => {
        e.preventDefault();

        const { nome, email, senha } = this.state;

        if (!nome || !email || !senha) {
            Swal.fire({
                title: 'Atenção!',
                text: 'Preencha os campos para se cadastrar!',
                icon: 'warning',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#2778C4'
            })
        } else {
            try {
                await api.post("/usuarios", { nome, email, senha });
                this.props.history.push("/login");
            } catch (err) {
                console.log(err);
                Swal.fire({
                    title: 'Erro!',
                    text: 'Ocorreu um erro ao realizar o cadastro!',
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

                <Menu/>

                <Row>
                    <Form onSubmit={this.handleCadastro} autoComplete="off">

                        <img src={Logo} alt="Login logo" />

                        <input
                            type="text"
                            placeholder="Nome de usuário"
                            onChange={e => this.setState({ nome: e.target.value })}
                        />
                        <input
                            type="email"
                            placeholder="Endereço de e-mail"
                            onChange={e => this.setState({ email: e.target.value })}
                        />
                        <input
                            type="password"
                            placeholder="Senha"
                            onChange={e => this.setState({ senha: e.target.value })}
                        />
                        <button type="submit">Cadastrar</button>

                        <hr/>

                        <Link to="/login">Fazer login</Link>
                    </Form>
                </Row>
            </Container>
        );
    }
}

export default withRouter(Cadastrar);
