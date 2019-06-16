import React from 'react';

export default class AddProducts extends React.Component {
    handleClick(event) {
        event.preventDefault()
        let coffe = parseInt(document.getElementById('coffe').value)
        let milk = parseInt(document.getElementById('milk').value)
        let toddy = parseInt(document.getElementById('toddy').value)
        this.props.Reload(coffe, milk, toddy)
        this.props.Enable(false, true)
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm text-center">
                    <h6>
                        <input id='coffe' type='number' maxlength='2' style={{ width: '45px' }} min="0" max="99" defaultValue="0"/> Café
                    </h6>
                </div>
                <div className="col-sm text-center">
                    <h6>
                        <input id='milk' type='number' maxlength='2' style={{ width: '45px' }} min="0" max="99"  defaultValue="0"/> Leite
                     </h6>
                </div>
                <div className="col-sm text-center">
                    <h6>
                        <input id='toddy' type='number' maxlength='2' style={{ width: '45px' }} min="0" max="99" defaultValue="0"/> Toddy
                    </h6>
                </div>
                <div className="col-sm text-center">
                    <button type="button" className="btn btn-dark" onClick={this.handleClick.bind(this)}>Recarregar</button>
                </div>
            </div>
        )
    }
}