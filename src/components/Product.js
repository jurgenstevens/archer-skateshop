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
          <div
            className="img-container p-5"
            onClick={console.log("You've clicked me")}
          >
            <Link to="/details"></Link>
            <img src={img} alt="product" className="card-img-top" />
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

const ProductWrapper = styled.div``;
