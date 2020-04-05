import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <div className="themed-grid-col">
          <Link to="/" className="nav-link col-md-4">
            HOME
          </Link>
          <Link to="/">
            <img
              src={logo}
              alt="store"
              className="navbar-brand col-md-4 text-center"
            />
          </Link>
          <Link to="/cart" className="ml-auto col-md-4">
            <ButtonContainer>
              <span className="mr-2">
                <i className="fas fa-cart-plus" />
              </span>
              my cart
            </ButtonContainer>
          </Link>
        </div>
        {/* this will be added later once we have more links to add besides one */}
        {/* <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              HOME
            </Link>
          </li>
        </ul> */}
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: black;
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
