import React, { Component } from "react";
import Select from "react-select";
import BuyButton from "./BuyButton";

export default class Store extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: null
        };
    }

    alterSelectProduct = selectedOption => {
        this.setState({ selectedOption })
    }

    render() {
        const { selectedOption } = this.state
        return (
            <div className="container text-center">
                <div>
                    <Select options={this.props.Products}
                        placeholder='Selecione sua opção...' onChange={this.alterSelectProduct} />
                    <br />
                    <BuyButton Key={this.props.Key} Decrement={this.props.Decrement} Enable={this.props.Enable} Option={selectedOption}
                        Coffe={this.props.Coffe} Toddy={this.props.Toddy} Milk={this.props.Milk} />
                </div>

            </div>
        )
    }
}