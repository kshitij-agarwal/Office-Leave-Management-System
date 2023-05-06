import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ADD_ITEM, DELETE_ITEM } from "../actions/types";

const Cart = () => {
  const state1 = useSelector((state) => state.cart);
  console.log("state1 - ", state1);

  return <div>Cart</div>;
};

export default Cart;
