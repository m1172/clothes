import React from "react";
import Table from "./Table";
import { useSelector } from "react-redux";
import TotalPrice from "../TotalPrice";
const TableItem = () => {

  const thead = ["Name", "Image", "Price", "Quantity", "X"];
  const { cart } = useSelector((s) => s);

  return (
    <div className="container mx-auto px-9 mt-36">
      <div className="flex items-start  justify-between">
      <div className="overflow-x-auto relative w-[70%]">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {thead.map((el, idx) => (
                <th key={idx} scope="col" className="py-3 px-6">
                  {el}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {cart.map((el, idx) => (
              <Table key={idx} item={el} idx={idx}/>
            ))}
          </tbody>
        </table>
      </div>
      <div className="w-[25%]">
        <TotalPrice/>
      </div>
      
      </div>
    </div>
  );
};

export default TableItem;
