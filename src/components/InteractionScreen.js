import React, { Component } from "react";
import Store from "./Store";
import ProductPallette from "./ProductPalette";
import InsertCoin from "./InsertCoin";

export default class InteractionScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantCoffe: 1,
            quantToddy: 1,
            quantMilk: 1,
            products: [
                { value: 1, label: 'Café', time: 5 },
                { value: 2, label: 'Café com Leite', time: 6 },
                { value: 3, label: 'Leite com Toddy', time: 7 }
            ],
            option: {},
            enableCoin: false,
            enableSpinner1: false

        };
    }

    decrement(product) {
        if (product.value === 1) {
            this.setState({ quantCoffe: this.state.quantCoffe - 1 })
        } else if (product.value === 2) {
            this.setState({ quantCoffe: this.state.quantCoffe - 1, quantMilk: this.state.quantMilk - 1 })
        } else if (product.value === 3) {
            this.setState({ quantToddy: this.state.quantToddy - 1, quantMilk: this.state.quantMilk - 1 })
        }
    }

    reload(coffe = 0, milk = 0, toddy = 0) {
        this.setState({
            quantCoffe: coffe + this.state.quantCoffe,
            quantMilk: milk + this.state.quantMilk,
            quantToddy: toddy + this.state.quantToddy
        })
    }

    enableInteraction(newCoin, newOption) {
        this.setState({
            enableCoin: newCoin,
            option: newOption
        })
    }

    render() {
        const { quantCoffe, quantMilk, quantToddy, products, enableCoin, option, enableSpinner1 } = this.state
        return (
            <div>
                <ProductPallette Reload={this.reload.bind(this)} Coffe={quantCoffe} Toddy={quantToddy} Milk={quantMilk} />
                <br />
                {
                    enableCoin ?
                        <InsertCoin Option={option} Enable={this.enableInteraction.bind(this)} Decrement={this.decrement.bind(this)} /> :
                        <div className="row">
                            <div className="col-sm">
                                {
                                    enableSpinner1 ?
                                        <p>deu bom</p> :
                                        <Store Decrement={this.decrement.bind(this)} Enable={this.enableInteraction.bind(this)} Products={products} Coffe={quantCoffe} Toddy={quantToddy} Milk={quantMilk} />
                                }
                            </div>
                            <div className="col-sm">
                                <Store Decrement={this.decrement.bind(this)} Enable={this.enableInteraction.bind(this)} Products={products} Coffe={quantCoffe} Toddy={quantToddy} Milk={quantMilk} />
                            </div>
                        </div>
                }
            </div>
        )
    }
}
