import React from 'react';

export default class NumProducts extends React.Component {
    //Abilita o recarregamento do produto
    handleClick(event) {
        event.preventDefault()
        this.props.Enable(true, false)
    }
    
    //Representação em HTML
    render() {
        return (
            <div className="row">
                <div className="col-sm text-center">
                    <h6>{this.props.Coffe} Café</h6>
                </div>
                <div className="col-sm text-center">
                    <h6>{this.props.Milk} Leite</h6>
                </div>
                <div className="col-sm text-center">
                    <h6>{this.props.Toddy} Toddy</h6>
                </div>
                <div className="col-sm text-center">
                    <button type="button" className="btn btn-dark" onClick={this.handleClick.bind(this)}>Recarregar</button>
                </div>
            </div>
        )
    }
}