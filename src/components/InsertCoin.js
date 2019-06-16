import React from 'react';

export default class InsertCoin extends React.Component {
    handleClick(event) {
        event.preventDefault()
        let coin = document.getElementById('coin').value

        if (coin === '1') {
            event.preventDefault()
            this.props.Decrement(this.props.Option)
            this.props.Enable(false, true)

        } else alert('erro')
    }

    render() {
        return (
            <div className="text-center">
                <h6>Insira a moeda:</h6>
                <input id='coin' type='number' style={{ width: '90px' }} />
                <br /><br />
                <button type="button" className="btn btn-dark" onClick={this.handleClick.bind(this)}>Ir</button>
            </div>
        )
    }
}