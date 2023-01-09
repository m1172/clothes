import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Categories = ({ filterItemFun }) => {
  const [item, setItem] = useState(0);

  const data = [
    { id: 1, name: 'ALL', category: 'ALL' },
    { id: 2, name: 'Electronics', category: 'electronics' },
    { id: 3, name: 'Jewelery', category: 'jewelery' },
    { id: 4, name: "Men's clothing", category: "men's clothing" },
    { id: 5, name: "Women's clothing", category: "women's clothing" },
  ];

  return (
    <div>
      <div className='flex items-center justify-center my-9 sm:overflow-auto '>
        {data?.map((el) => (
          <button
            key={el.id}
            className={
              el.id === item
                ? 'text-gray-50  border-gray-800 bg-gray-900 focus:outline-none focus:ring-gray-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 uppercase transition-all sm:w-[200px]'
                : 'text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-gray-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 uppercase transition-all sm:w-96'
            }
            onClick={() => {
              filterItemFun(el.category);
              setItem(el.id);
            }}
          >
            {el.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
