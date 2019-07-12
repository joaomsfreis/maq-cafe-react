import React from 'react';

export default class PasswordInput extends React.Component {
    //Verifica se a senha é valida
    handleClick1(event) {
        event.preventDefault()
        let pass = document.getElementById('pass').value
        this.props.ValidPassword(pass)
    }

    //Retorna ao estado inicial
    handleClick2(event) {
        event.preventDefault()
        this.props.Back()
    }

    //Representação em HTML
    render() {
        return (
            <div className="row">

                <div className="col-sm text-center">
                    <h6>Digite a senha: </h6>
                </div>
                <div className="col-sm text-center">
                    <input id='pass' type='password' size='40' placeholder='Digite a senha' />
                </div>
                <div className="col-sm text-center">
                    <button onClick={this.handleClick1.bind(this)} type="button" className="btn btn-dark">Entrar</button>  <button onClick={this.handleClick2.bind(this)} type="button" className="btn btn-success">Voltar</button>
                </div>
            </div>
        )
    }
}