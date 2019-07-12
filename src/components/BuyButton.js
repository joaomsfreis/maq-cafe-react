//Componente do botão Comprar

import React from 'react';

export default class BuyButton extends React.Component {
    //Ao clicar no botão essa função emcaminha para o pagamento caso ouver os ingredientes necessários
    handleClick(event) {
        if (this.props.Option !== null) {
            if ((this.props.Option.value === 1 || this.props.Option.value === 2) && this.props.Coffe === 0) {
                alert('Falta café! Necessário recarregar.')
            } else if ((this.props.Option.value === 2 || this.props.Option.value === 3) && this.props.Milk === 0) {
                alert('Falta leite! Necessário recarregar.')
            } else if (this.props.Option.value === 3 && this.props.Toddy === 0) {
                alert('Falta toddy! Necessário recarregar.')
            } else {
                event.preventDefault()
                this.props.Enable(true, this.props.Option, this.props.Key)
            }

        }else {
            alert('Selecine um produto!')
        }
    }

    //Representação em HTML
    render() {
        return (
            <div>
                <button type="button" className={this.props.Option.color} onClick={this.handleClick.bind(this)}> {this.props.Option.label}</button>
            </div>
        )
    }
}

