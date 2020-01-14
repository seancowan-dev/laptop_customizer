import React, { Component } from 'react';

class Banner extends Component {
    render() {
        return(
        <header>
            <h1>{this.props.pageTitle}</h1>
        </header>
        );
    };
};

export default Banner;
