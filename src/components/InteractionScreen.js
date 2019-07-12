//Componente que agrupa os componentes que interagem com usuario 
import React, { Component } from "react";
import Store from "./Store";
import ProductPallette from "./ProductPalette";
import LoadingDiv from "./LoadingDiv";
import DrinkMe from "./DrinkMe";

export default class InteractionScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantCoffe: 1,
            quantToddy: 1,
            quantMilk: 1,
            products: [
                { value: 1, label: 'Café', time: 2, price: '1' },
                { value: 2, label: 'Café com Leite', time: 10, price: '3' },
                { value: 3, label: 'Leite com Toddy', time: 15, price: '5' }
            ],
            option: {},
            enableCoin: false,
            enableSpinner1: false,
            enableSpinner2: false,
            currentSpinner: 1,
            remove1: false,
            remove2: false,
            time1: 2,
            time2: 2
        };
    }
    
    //Decrementa o produto
    decrement(product) {
        if (product.value === 1) {
            this.setState({ quantCoffe: this.state.quantCoffe - 1 })
        } else if (product.value === 2) {
            this.setState({ quantCoffe: this.state.quantCoffe - 1, quantMilk: this.state.quantMilk - 1 })
        } else if (product.value === 3) {
            this.setState({ quantToddy: this.state.quantToddy - 1, quantMilk: this.state.quantMilk - 1 })
        }
    }

   //Incrementa os produtos 
    reload(coffe = 0, milk = 0, toddy = 0) {
        this.setState({
            quantCoffe: coffe + this.state.quantCoffe,
            quantMilk: milk + this.state.quantMilk,
            quantToddy: toddy + this.state.quantToddy
        })
    }

    //Abilita o pagamento
    enableInteraction(newCoin, newOption, newSpinner, key) {
        if (newSpinner === '1') {
            this.setState({
                enableCoin: newCoin,
                option: newOption,
                time1: newOption.time,
                currentSpinner: newSpinner
            })
        } else if (newSpinner === '2') {
            this.setState({
                enableCoin: newCoin,
                option: newOption,
                time2: newOption.time,
                currentSpinner: newSpinner
            })
        }

    }

    //Começa a produção do produto
    enableTransaction(newCoin) {
        if (this.state.currentSpinner === '1') {
            this.setState({
                enableCoin: newCoin,
                enableSpinner1: true
            })
        } else {
            this.setState({
                enableCoin: newCoin,
                enableSpinner2: true
            })
        }
    }

    //A clicar no botão Ir começa a produção do produto se a moeda inserida for válida
    handleClick(event) {
        event.preventDefault()
        let coin = document.getElementById('coin').value

        if (coin === this.state.option.price) {
            event.preventDefault()
            this.decrement(this.state.option)
            this.enableTransaction(false)

        } else alert('Insira um valor válido!!!')
    }

    //Verifica o processo de loading do produto 
    delay(id) {
        if (id === 1) {
            setTimeout(() => {
                this.setState({
                    enableSpinner1: false,
                    remove1: true
                })
            }, this.state.time1 * 1000);
        } else if (id === 2) {
            setTimeout(() => {
                this.setState({
                    enableSpinner2: false,
                    remove2: true
                })
            }, this.state.time2 * 1000);
        }
    }

    //Sinaliza o fim da produção
    returnKey(key) {
        if (key === '1') {
            this.setState({ remove1: false })
        } else if (key === '2') this.setState({ remove2: false })
    }

    //Retorna ao estado inicial
    back() {
        this.setState({
            enableCoin: false
        })
    }

    //Representação em HTML
    render() {
        const { quantCoffe, option, quantMilk, quantToddy, products, enableCoin, enableSpinner1, enableSpinner2, remove1, remove2 } = this.state
        if (enableSpinner1 === true) {
            this.delay(1)
        }
        if (enableSpinner2 === true) {
            this.delay(2)
        }
        return (
            <div>
                <ProductPallette Reload={this.reload.bind(this)} Coffe={quantCoffe} Toddy={quantToddy} Milk={quantMilk} />
                <br />
                {
                    enableCoin ?
                        <div className="text-center">
                            <h6>Insira R${option.price},00:</h6>
                            <input id='coin' type='number' style={{ width: '90px' }} />
                            <br /><br />
                            <button type="button" className="btn btn-dark" onClick={this.handleClick.bind(this)}>Ir</button>  <button type="button" className="btn btn-success" onClick={this.back.bind(this)}>Voltar</button>
                        </div> :
                        <div className="row">
                            <div className="col-sm">
                                {
                                    enableSpinner1 ?
                                        <LoadingDiv /> :
                                        remove1 ?
                                            <DrinkMe Return={this.returnKey.bind(this)} Key="1" /> :
                                            <Store Key="1" Decrement={this.decrement.bind(this)} Enable={this.enableInteraction.bind(this)} Products={products} Coffe={quantCoffe} Toddy={quantToddy} Milk={quantMilk} />
                                }
                            </div>
                            <div className="col-sm">
                                {
                                    enableSpinner2 ?
                                        <LoadingDiv /> :
                                        remove2 ?
                                            <DrinkMe Return={this.returnKey.bind(this)} Key="2" /> :
                                            <Store Key="2" Decrement={this.decrement.bind(this)} Enable={this.enableInteraction.bind(this)} Products={products} Coffe={quantCoffe} Toddy={quantToddy} Milk={quantMilk} />
                                }
                            </div>
                        </div>
                }
            </div>
        )
    }
}
