import React, { Component } from 'react';
/*import { Link } from 'react-router-dom';*/
import Logo from '../../assets/login.svg';
import { Form, Container } from './styles';

class Cadastrar extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        error: ''
    }

    handleLogin = e => {
        e.preventDefault();
        alert("Você deve se cadastrar!");
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
                        onChange={e => this.setState({ username: e.target.value })}
                    />
                    <input
                        type="email"
                        placeholder="Endereço de e-mail"
                        onChange={e => this.setState({ email: e.target.value })}
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        onChange={e => this.setState({ password: e.target.value })}
                    />
                    <button type="submit">Cadastrar</button>

                    <hr/>

                    <button type="button" id="btnLogin">Fazer login</button>
                </Form>
            </Container>
        );
    }
}

export default Cadastrar;
