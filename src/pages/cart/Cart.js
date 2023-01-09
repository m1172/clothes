import React from "react";
import { useSelector } from "react-redux";
import Notification from "./Notification";
import TableItem from "./table/TableItem";

const Cart = () => {
  const { cart } = useSelector((s) => s);

  return <div>{cart.length === 0 ? <Notification /> : <TableItem />}</div>;
};

export default Cart;
