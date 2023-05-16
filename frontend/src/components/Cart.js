import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { ADD_ITEM, DELETE_ITEM } from "../actions/types";

import { addItem } from "../actions/cartAction";

const Cart = () => {
  const dispatch = useDispatch();

  const state1 = useSelector((state) => state.cart);
  console.log("state1 - ", state1);

  const dispatchAPI = () => {
    console.log("start");
    var prdata = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("hy");
      }, 2000);
    });

    prdata.then((message) => {
      console.log(message);
    });
    console.log("End");

    dispatch(addItem());
  };

  return <div onClick={() => dispatchAPI()}>Cart</div>;
};

export default Cart;
