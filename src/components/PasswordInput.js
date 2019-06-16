import React from 'react';

export default class PasswordInput extends React.Component {
    handleClick(event) {
        event.preventDefault()
        let pass = document.getElementById('pass').value
        this.props.ValidPassword(pass)
    }

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
                    <button onClick={this.handleClick.bind(this)} type="button" className="btn btn-dark">Entrar</button>
                </div>
            </div>
        )
    }
}