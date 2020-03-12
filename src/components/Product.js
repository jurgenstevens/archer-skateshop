import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-9-mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          {/* this div contains the image link, name, price and inCart status button */}
          <div
            className="img-container p-5"
            onClick={() => console.log("You've clicked me")}
          >
            {/* Image link to product details page */}
            <Link to="/details">
              <img src={img} alt="product" className="card-img-top" />
            </Link>
            {/* this is the button stating whether or not the item is in the cart */}
            <button
              className="cart-btn"
              // if in cart is true then it's going to return true, if not, then false. State is false by defaults
              disabled={inCart ? true : false}
              // on click the console will state if item has been added to the cart
              onClick={() => {
                console.log("Item has been added to the cart.");
              }}
            >
              {/* checking the inCart value w/ ternary operator, change w bootstrap & html */}
              {inCart ? (
                <p className="text-capitalize mb-0" disabled>
                  {" "}
                  In Cart
                </p>
              ) : (
                // cart icon for the else
                <i className="fas fa-cart-plus" />
              )}
            </button>
          </div>
          {/* this will be the card footer */}
          <div className="card-footer.d-flex.justify-content-between">
            {/* name of the product goes here in the footer */}
            <p className="align-self-center mb-0">{title}</p>
            {/* this will be the price in the footer */}
            <h5 className="text-blue font-italic mb-0">
              <span className="mr-1">${price}</span>
            </h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

const ProductWrapper = styled.div``;
