import React, { Component } from 'react';
import Banner from './Banner/Banner';
import OrderSelection from './OrderSelection/OrderSelection';
import UserCart from './UserCart/UserCart';
import './App.css';
import CartTotal from './UserCart/CartTotal/CartTotal';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selected: {
        Processor: {
          name: '17th Generation Intel Core HB (7 Core with donut spare)',
          cost: 700
        },
        'Operating System': {
          name: 'Ubuntu Linux 16.04',
          cost: 200
        },
        'Video Card': {
          name: 'Toyota Corolla 1.5v',
          cost: 1150.98
        },
        Display: {
          name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
          cost: 1500
        }
      }
    };
  }

  currencyFormat = (price) => {
    return "$" + price.toFixed(2);
  }

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    return (
      <div className="App">
          <Banner 
            pageTitle = "ELF Computing | Laptops"
          />
        <main>
          <OrderSelection
            orderState={this.state}
            features={this.props.features} 
            sectionTitle="Customize your laptop"
            updateFeature={this.updateFeature}
            currency={this.currencyFormat}
          />
          <section className="main__summary">
            <h2>Your cart</h2>
            <UserCart 
                  userState={this.state}
                  currency={this.currencyFormat}
            />
            <CartTotal
              cartState={this.state}
              currency={this.currencyFormat}
            />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
