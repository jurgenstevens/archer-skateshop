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
      <div className="col--10 mc-auto col-lg-2"></div>
    </div>
  );
}
