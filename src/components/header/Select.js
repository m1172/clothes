import React from 'react';
import { useDispatch } from 'react-redux';
import { changeCurrency } from '../../redux/actions/Actions';

const Select = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <select
        onChange={(e) => dispatch(changeCurrency(e.target.value))}
        id='countries'
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white mr-12 dark:focus:ring-blue-500 dark:focus:border-blue-500'
      >
        <option value='PLN'>PLN</option>
        <option value='USD'>USD</option>
        <option value='EUR'>EUR</option>
      </select>
    </div>
  );
};

export default Select;
