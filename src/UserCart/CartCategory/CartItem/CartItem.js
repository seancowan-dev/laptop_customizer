import React, { Component } from 'react';

class CartItem extends Component {
    render() {
        return (
            <div className="summary__option" key={this.props.featureHash}>
                <div className="summary__option__label">{this.props.feature} </div>
                <div className="summary__option__value">{this.props.item}</div>
                <div className="summary__option__cost">
                {this.props.currency(this.props.price)}
                </div>
            </div>
        );
    }
};

export default CartItem;