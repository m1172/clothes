import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import Select from './Select';
import { IoMdCart } from 'react-icons/io';
import { FaHeart } from 'react-icons/fa';
const Header = () => {
  const { cart, wishlist } = useSelector((s) => s);

  return (
    <nav className='flex items-center justify-between flex-wrap bg-gray-100 p-6 fixed top-0 left-0 right-0 w-full z-50'>
      <NavLink to='/'>
        <div className='flex items-center flex-shrink-0 text-gray-800 mr-6'>
          <span className='font-semibold text-xl tracking-tight uppercase underline'>
            Clothes Store
          </span>
        </div>
      </NavLink>

      {/* menu */}

      <div className='block lg:hidden'>
        <button className='flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white'>
          <svg
            className='fill-current h-3 w-3'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Menu</title>
            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
          </svg>
        </button>
      </div>

      <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto sm:hidden'>
        <div className='text-sm lg:flex-grow my-3'>
          <NavLink
            to='/'
            className='text-gray-900 border-transparent flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium mr-4'
          >
            Home
          </NavLink>
          <NavLink
            to='/about'
            className='text-gray-900 border-transparent flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium mr-4'
          >
            About
          </NavLink>
          <NavLink
            to='/cart'
            className='text-gray-900 border-transparent flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium mr-4'
          >
            Cart
          </NavLink>
          <NavLink
            to='/wishlist'
            className='text-gray-900 border-transparent flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium'
          >
            Wishlist
          </NavLink>
        </div>
        <Select />
        <div className='flex items-center justify-between w-[100px] lg: mt-3'>
          {cart.length === 0 ? (
            <div className='w-[40px] h-[35px]'>
              <NavLink
                to='/cart'
                type='button'
                className='border border-gray-300 px-2 py-1 rounded'
              >
                <IoMdCart className='text-2xl' />
              </NavLink>
            </div>
          ) : (
            <div className='relative w-[40px] h-[35px]'>
              <div className='absolute ml-[1.5rem] mt-[2px] text-[10px] w-3.5 h-3.5 bg-indigo-600 rounded-full flex items-center justify-center text-white'>
                {cart.length}
              </div>
              <NavLink
                to='/cart'
                type='button'
                className='border border-gray-300 px-2 py-1 rounded'
              >
                <IoMdCart className='text-2xl' />
              </NavLink>
            </div>
          )}

          {wishlist.length === 0 ? (
            <NavLink
              to='/wishlist'
              className='border border-gray-300 px-2.5 py-1.5 rounded'
            >
              <FaHeart className='text-xl' />
            </NavLink>
          ) : (
            <div className='relative w-[40px] h-[35px]'>
              <div className='absolute ml-[1.5rem] mt-[2px] text-[10px] w-3.5 h-3.5 bg-indigo-600 rounded-full flex items-center justify-center text-white'>
                {wishlist.length}
              </div>
              <NavLink
                to='/wishlist'
                type='button'
                className='border border-gray-300 px-2.5 py-1.5 rounded'
              >
                <FaHeart className='text-xl' />
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
