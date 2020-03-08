import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";

export default class ProductList extends Component {
  // need state for the product
  state = {
    products: []
  };

  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="The" title="Gear" />
            <div className="row" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
