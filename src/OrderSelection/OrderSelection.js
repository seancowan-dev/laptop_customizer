import React, {Component} from 'react';
import OrderCategory from './OrderCategory/OrderCategory';

class OrderSelection extends Component {
    
    render() {
        const categories = Object.keys(this.props.features).map((category, idx) => {
            const hash = category + "-" + idx;
            return (
                <OrderCategory
                    orderState={this.props.orderState}
                    key={hash}
                    sectionTitle={category} 
                    features={this.props.features}
                    updateFeature={this.props.updateFeature}
                    currency={this.props.currency}
                />
            );
        });
        return(
            <form className="main__form">
                <h2>{this.props.sectionTitle}</h2>
                {categories}
            </form>
        );
    }
};

export default OrderSelection;