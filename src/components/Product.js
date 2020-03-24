import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import PropTypes from "prop-types";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          {/* this div contains the image link, name, price and inCart status button */}
          <ProductConsumer>
            {value => (
              <div
                className="img-container p-5"
                onClick={() => value.handleDetail(id)}
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
                    value.addToCart(id);
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
            )}
          </ProductConsumer>
          {/* this will be the card footer */}
          <div className="card-footer d-flex justify-content-between">
            {/* name of the product goes here in the footer */}
            <p className="align-self-center mb-0">{title}</p>
            {/* this will be the price in the footer */}
            <h5 className="text-blue font-italic mb-0">
              <span className="mr-1">$</span>
              {price}
            </h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

// this makes sure that the prop types correlate to what they are set to
Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  // if cursor is hovering over the card
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 1s linear;
  }
  // image grows in scale by 1.2
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  // all of this is the css for the card button on the bottom right
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5 0 0 0;
    transform: translate(100%, 100%);
    transition: all 0.5s linear;
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
`;
