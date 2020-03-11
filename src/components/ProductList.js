import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { storeProducts } from "../data";
import { ProductConsumer } from "../context";

export default class ProductList extends Component {
  // need state for the product
  state = {
    products: storeProducts
  };

  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="The" title="Gear" />
            <div className="row"></div>
            <ProductConsumer>
              {value => {
                // this is the object containing all of the products we will map through
                return value.products.map(product => {
                  return (
                    <Product
                      key={product.id}
                      product={product}
                      handleDetail={value.name}
                    />
                  );
                });
              }}
            </ProductConsumer>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
