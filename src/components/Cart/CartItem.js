import React from "react";

export default function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <div className="row my-1 text-capitalize text-center">
      <div className="col--10 mc-auto col-lg-2">
        <img
          src={img}
          // this will limit the sie of the image to the specific size set below
          style={{ width: "5rem", height: "5rem" }}
          className="img-fluid"
          alt="product"
        />
      </div>
      <div className="col--10 mc-auto col-lg-2">
        <span className="d-lg-none"> product: {title}</span>
      </div>
      <div className="col--10 mc-auto col-lg-2">
        <span className="d-lg-none"> price: ${price}</span>
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          {/* this will be the decrement button */}
          <span className="btn btn-black mx-1" onClick={() => decrement(id)}>
            -
          </span>
          <span className="btn btn-black mx-1">{count}</span>
          {/* this will be the increment button */}
          <span className="btn btn-black mx-1" onClick={() => increment(id)}>
            +
          </span>
        </div>
      </div>
      {/*  */}
      <div className="col--10 mc-auto col-lg-2">
        <strong>item total: $ {total}</strong>
      </div>
    </div>
  );
}
