import React, { Component } from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "../../context";

export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            // this is checking what's in the cart
            const { cart } = value;
            // if there is more than zero items in the cart..
            if (cart.length > 0) {
              //.. then render the title Your Cart and the columns of categories for the product
              return (
                <React.Fragment>
                  <Title name="your" title="cart" />
                  <CartColumns />
                </React.Fragment>
              );
              // or else just display the empty cart message
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}
