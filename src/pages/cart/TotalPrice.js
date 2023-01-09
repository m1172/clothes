import React from "react";
import { useSelector } from "react-redux";

const TotalPrice = () => {

  const {cart} = useSelector(s => s)
  const totalPrice = cart.reduce((acc, el) => {
      return el.price * el.quantity + acc
  },0)
  return (
    <div className="p-6 max-w-[300px] bg-white rounded-sm border border-gray-200  dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-between items-center">
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          Total Price:
        </h5>
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
          {Math.floor(totalPrice)}$
        </span>
      </div>
    </div>
  );
};

export default TotalPrice;
