import React from 'react';

export default class BuyButton extends React.Component {
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
                this.props.Enable(true, this.props.Option)
            }

        }else {
            alert('Selecine um produto!')
        }
    }

    render() {
        return (
            <div>
                <button type="button" className="btn btn-dark" onClick={this.handleClick.bind(this)}> Comprar</button>
            </div>
        )
    }
}

