import React from "react";
import { useDispatch } from "react-redux";
import { DeleteIcon } from "../../../assets/icons/Icons";
import { deleteFromCart } from "./../../../redux/actions/Actions";
import Quantity from "./Quantity";

const Table = ({ item, idx }) => {
  const dispatch = useDispatch();

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {item.category}
      </th>
      <td className="py-4 px-6">
        <img src={item.image} alt={item.name} className="w-24 rounded" />
      </td>
      <td className="py-4 px-6 text-[18px]">{item.price * item.quantity} $</td>
      <td className="py-4 px-6">
        <Quantity item={item}/>
      </td>
      <td className="py-4 px-6">
        <button
          onClick={() => dispatch(deleteFromCart(item.id))}
          className="ml-auto bg-white text-gray-400 hover:text-gray-900 rounded-sm  p-1.5 hover:bg-gray-100 inline-flex dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <DeleteIcon />
        </button>
      </td>
    </tr>
  );
};

export default Table;
