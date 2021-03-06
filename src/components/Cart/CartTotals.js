import React from "react";
import { Link } from "react-router-dom";
import PayPalButton from "./PayPalButton";

export default function CartTotals({ value, history }) {
  const { cartSubtotal, cartTax, cartTotal, clearCart } = value;
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            {/* this is the clear cart button */}
            <Link to="/">
              <button
                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                type="button"
                onClick={() => clearCart()}
              >
                clear cart
              </button>
            </Link>
            {/* below is the subtotal before tax */}
            <h5>
              <span className="text-title">subtotal :</span>
              <strong>$ {cartSubtotal}</strong>
            </h5>
            <h5>
              <span className="text-title">tax :</span>
              <strong>$ {cartTax}</strong>
            </h5>
            <h5>
              <span className="text-title">total :</span>
              <strong>$ {cartTotal}</strong>
            </h5>
            {/* this is the paypal button and importing the following props from the Cart component */}
            <PayPalButton
              total={cartTotal}
              clearCart={clearCart}
              history={history}
            ></PayPalButton>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
