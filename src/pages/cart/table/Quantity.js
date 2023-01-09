import React from 'react'
import { useDispatch } from 'react-redux';
import { DecIcon } from "../../../assets/icons/Icons";
import { IncIcon } from "../../../assets/icons/Icons";
import { addCart, incCartItem } from "./../../../redux/actions/Actions";
import { decCartItem } from "./../../../redux/actions/Actions";

const Quantity = ({item}) => {
	const dispatch = useDispatch();
	return (
		<div className="flex items-center w-[100px]">
          <div className="flex items-center">
            <button
              onClick={() => dispatch(decCartItem(item))}
              className="ml-auto  bg-white text-gray-400 hover:text-gray-900 rounded-sm  p-1 hover:bg-gray-100 inline-flex dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
              aria-label="Close"
            >
              <DecIcon />
            </button>
            <span className="text-[20px] mx-6">{item.quantity}</span>
            <button
              onClick={() => dispatch(addCart(item))}
              className="ml-auto bg-white text-gray-400 hover:text-gray-900 rounded-sm  p-1 hover:bg-gray-100 inline-flex dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
              aria-label="Close"
            >
              <IncIcon />
            </button>
          </div>
        </div>
	)
}

export default Quantity