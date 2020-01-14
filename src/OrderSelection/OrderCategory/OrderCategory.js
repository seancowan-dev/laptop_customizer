import React, { Component } from 'react';
import OrderItem from './OrderItem/OrderItem';
import slugify from 'slugify';

class OrderCategory extends Component {
    render() {
            const options = this.props.features[this.props.sectionTitle].map(item => {
              const itemHash = slugify(JSON.stringify(item));
              return (
                  <OrderItem
                    orderState={this.props.orderState}
                    key={itemHash} 
                    itemHash={itemHash}
                    name={slugify(item.name)}
                    checked={item.name}
                    feature={this.props.sectionTitle}
                    item={item}
                    updateFeature={this.props.updateFeature}
                    currency={this.props.currency}
                  />
              );
            });
          return (
            <fieldset className="feature_category">
              <legend className="feature__name">
                <h3>{this.props.sectionTitle}</h3>
              </legend>
              {options}
            </fieldset>
          );
    }
};

export default OrderCategory;