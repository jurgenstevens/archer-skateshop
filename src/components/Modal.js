import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";

export default class Modal extends Component {
  render() {
    return (
      <div>
        <ProductConsumer>
          {/* this will be the conditional of whether the modal is open or not */}
          {value => {
            const { modalOpen, closeModal } = value;
            const { img, title, price } = value.modalProduct;
            if (!modalOpen) {
              return null;
            } else {
              // if the modal IS open then...
              return (
                <ModalContainer>
                  <div className="container">
                    <div className="row">
                      <div
                        id="modal"
                        className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5"
                      >
                        <h5>Item added to the cart</h5>
                        <img
                          src={img}
                          className="img-fluid"
                          alt="product"
                        ></img>
                        <h5>{title}</h5>
                        <h5 className="text-muted">price: $ {price}</h5>
                        <Link to="/">
                          <ButtonContainer onClick={() => closeModal()}>
                            Continue shopping
                          </ButtonContainer>
                        </Link>
                        <Link to="/cart">
                          <ButtonContainer onClick={() => closeModal()}>
                            Go to cart
                          </ButtonContainer>
                        </Link>
                      </div>
                    </div>
                  </div>
                </ModalContainer>
              );
            }
          }}
        </ProductConsumer>
      </div>
    );
  }
}

// this is for the modal's positioning
const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`;
