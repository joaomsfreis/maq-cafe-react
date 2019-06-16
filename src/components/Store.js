import React, { Component } from "react";
import Select from "react-select";
import BuyButton from "./BuyButton";

export default class Store extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: null,
            enableSpinner: false
        };
    }

    alterSelectProduct = selectedOption => {
        this.setState({ selectedOption })
    }

    enableTransaction(){
        this.setState({
            enableSpinner: true
        })
    }

    render() {
        const { selectedOption, enableSpinner } = this.state
        return (
            <div className="container text-center">
                {
                    enableSpinner ?
                        <p>Spiner</p> :
                        <div>
                            <Select options={this.props.Products}
                                placeholder='Selecione sua opção...' onChange={this.alterSelectProduct} />
                            <br />
                            <BuyButton Decrement={this.props.Decrement} Enable={this.props.Enable} Option={selectedOption}
                                Coffe={this.props.Coffe} Toddy={this.props.Toddy} Milk={this.props.Milk} Spinner={this.enableTransaction.bind(this)}/>
                        </div>
                }
            </div>
        )
    }
}