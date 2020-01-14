import React, { Component } from 'react';
// import slugify from 'slugify';

class OrderItem extends Component {
    render() {
        return (
            <div key={this.props.itemHash} className="feature__item">
                <input
                    type="radio"
                    id={this.props.itemHash}
                    className="feature__option"
                    name={this.props.name}
                    checked={this.props.name === this.props.orderState.selected[this.props.feature].name}
                    onChange={e => this.props.updateFeature(this.props.feature, this.props.item)}
                />
                <label htmlFor={this.props.itemHash} className="feature__label">
                    {this.props.name} ({this.props.currency(this.props.item.cost)})
                </label>
            </div>
        );
    };
}

export default OrderItem;