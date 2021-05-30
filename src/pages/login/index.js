import React, { Component } from 'react';
import { Link, withRouter  } from 'react-router-dom';
import api from '../../services/api';
/*import { login } from "../../services/auth";*/

import Logo from '../../assets/user.svg';
import { Form, Container } from './styles';
import Swal from 'sweetalert2';

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
                // const response = await api.get(`/usuarios/${nome}/${senha}`);
                await api.get(`/usuarios/${nome}/${senha}`);
                // login(response.data.token);
                this.props.history.push("/inicio");
            } catch (err) {

                Swal.fire({
                    title: 'Erro!',
                    text: 'Ocorreu um erro ao realizar o login!',
                    icon: 'error',
                    confirmButtonText: 'Ok',
                    confirmButtonColor: '#F05F70'
                })
            }
        }
    }

    render() {
        return (
            <Container>
                <Form onSubmit={this.handleLogin} autoComplete="off">
                    <img src={Logo} alt="Login logo" />

                    {this.state.error && <p>{this.state.error}</p>}
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

                    {/*<button type="button" id="btnCadastro">Realizar Cadastro</button>*/}
                    <Link to="/">Realizar Cadastro</Link>
                </Form>
            </Container>
        );
    }
}

export default withRouter(Login);
