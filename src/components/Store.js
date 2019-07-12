import React, { Component } from "react";
import Select from "react-select";
import BuyButton from "./BuyButton";

export default class Store extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: null,
            products: [
                { value: 1, label: 'Café', time: 2, price: '1', color: 'btn btn-dark' },
                { value: 2, label: 'Café com Leite', time: 10, price: '3', color: 'btn btn-dark' },
                { value: 3, label: 'Leite com Toddy', time: 15, price: '5', color: 'btn btn-dark' }
            ]
        };
    }

    alterSelectProduct = selectedOption => {
        console.log(selectedOption)
        this.setState({ selectedOption })
    }

    render() {
        const { selectedOption, products } = this.state
        return (
            <div className="container text-center">
                <div>
                    <BuyButton Key={this.props.Key} Decrement={this.props.Decrement} Enable={this.props.Enable} Option={products[2]}
                        Coffe={this.props.Coffe} Toddy={this.props.Toddy} Milk={this.props.Milk} />
                    <br/>
                    <BuyButton Key={this.props.Key} Decrement={this.props.Decrement} Enable={this.props.Enable} Option={products[1]}
                        Coffe={this.props.Coffe} Toddy={this.props.Toddy} Milk={this.props.Milk} />
                    <br/>
                    <BuyButton Key={this.props.Key} Decrement={this.props.Decrement} Enable={this.props.Enable} Option={products[0]}
                        Coffe={this.props.Coffe} Toddy={this.props.Toddy} Milk={this.props.Milk} />
                        
                </div>

            </div>
        )
    }
}