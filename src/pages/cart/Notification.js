import React from "react";
import { useSelector } from "react-redux";
import emptyCart from "./../../assets/empty cart.png";
const Notification = () => {
  const {cart, wishlist} = useSelector(s => s)
  return (
    <div className="pt-28 flex items-center justify-center ">
      <div
        id="toast-success"
        className="bg-gray-100 flex items-center p-4 mb-4 w-full max-w-[250px] text-gray-500 rounded-sm shadow dark:text-gray-400 dark:bg-gray-800"
        role="alert"
      >
        <div className="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
          <img src={emptyCart} alt="cart icon" width="20px" />
        </div>
        <div className="ml-3 text-[18px] font-normal text-gray-800">{`Your ${cart.length === 0 ? "wishlist" : "basket"} is empty`}</div>
      </div>
    </div>
  );
};

export default Notification;
