import React, { Component } from 'react';
import CartCategory from './CartCategory/CartCategory';

class UserCart extends Component {
    render() {

        const cartOutput = Object.keys(this.props.userState.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.userState.selected[feature];
            
            return (
                <CartCategory 
                    key={featureHash}
                    featureHash={featureHash}
                    feature={feature}
                    selectedOpt={selectedOption}
                    currency={this.props.currency}
                />
            );
        
        });
        return cartOutput;
    };
};

export default UserCart;