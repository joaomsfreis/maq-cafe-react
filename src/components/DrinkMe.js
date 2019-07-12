//Componente que representa o fim da produção do produto
import React, { Component } from "react";
import gif from '../img/drinkme2.gif';

export default class DrinkMe extends Component {
    constructor(props) {
        super(props);
    }

    //Ao clicar no botão ok essa função retorna as opções de compra
    handleClick(event) {
        event.preventDefault()
        this.props.Return(this.props.Key)
    }

    //Representação em HTML
    render() {
        return (
            <div className="container text-center">
                <img src={gif} style={{ width: '25%', height: '25%', position: 'center', left: '47%' }} alt="logo" />
                <h6>Retire a sua bebida</h6>
                <button type="button" className="btn btn-dark" onClick={this.handleClick.bind(this)}> Ok</button>
            </div>
        )
    }
}