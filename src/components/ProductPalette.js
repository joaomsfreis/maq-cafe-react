import React from 'react';
import NumProducts from './NumProducts';
import PasswordInput from './PasswordInput';
import AddProducts from './AddProducts';

export default class ProductPallette extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            enableNum: true,
            enablePass: false,
            enableAdd: false,
        };
    }

    //Valida a senha digitada
    validPassword(password) {
        if (password === 'maqcafe') {
            this.enablePalette(false, false)
        } else {
            alert('Senha incorreta')
        }
    }

    //Solicita a senha
    enablePalette(newPass, newNum) {
        this.setState({
            enablePass: newPass,
            enableNum: newNum
        })
    }
    
    //Retorna ao estado inicial
    back() {
        this.setState({
            enableNum: true,
            enablePass: false,
            enableAdd: false,
        })
    }

    //Representação em HTML
    render() {
        const { enableNum, enablePass } = this.state
        return (
            <div>
                {
                    enableNum ?
                        <NumProducts Reload={this.props.Reload} Enable={this.enablePalette.bind(this)} Coffe={this.props.Coffe} Toddy={this.props.Toddy} Milk={this.props.Milk} /> :
                        enablePass ?
                            <PasswordInput Back={this.back.bind(this)} ValidPassword={this.validPassword.bind(this)} Enable={this.enablePalette.bind(this)} Coffe={this.props.Coffe} Toddy={this.props.Toddy} Milk={this.props.Milk} /> :
                            <AddProducts Reload={this.props.Reload} Enable={this.enablePalette.bind(this)} Coffe={this.props.Coffe} Toddy={this.props.Toddy} Milk={this.props.Milk} />
                }
            </div>
        )
    }
}
