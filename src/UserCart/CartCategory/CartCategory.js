import React, { Component } from 'react';
import CartItem from './CartItem/CartItem';

class CartCategory extends Component {
    render() {
        return (
            <CartItem
                featureHash={this.props.featureHash}
                feature={this.props.feature}
                item={this.props.selectedOpt.name}
                price={this.props.selectedOpt.cost}
                currency={this.props.currency}
            />
        );
    }
}

export default CartCategory;