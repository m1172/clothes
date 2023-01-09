import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Heart } from '../../assets/icons/Icons';
import { getSingleProduct } from '../../redux/actions/Actions';

const SingleProduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { singleProduct } = useSelector((s) => s);

  useEffect(() => {
    axios(`https://fakestoreapi.com/products/${id}`).then(({ data }) =>
      dispatch(getSingleProduct(data))
    );
  }, []);

  return (
    <div className='container mx-auto px-9 pt-[8rem]'>
      {singleProduct?.map((el) => (
        <div className='flex item-start' key={el.id}>
          <img
            className='w-[400px] h-[600px] object-contain'
            src={el.image}
            alt={el.title}
          />
          <div className='pl-[3rem] w-1/2'>
            <div className=''>
              <h1 className='text-gray-900 text-[4rem] font-bold'>
                {el.category}
              </h1>
              <p className='text- gray-900 pb-4'>{el.description}</p>
              <span className='text-xl'>${Math.floor(el.price)}</span>
              {el.rating.rate > 0 ? (
                <div className='flex items-center mt-4'>
                  <svg
                    aria-hidden='true'
                    className='w-5 h-5 text-yellow-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <title>First star</title>
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                  </svg>
                  <span>{el.rating.rate}</span>
                </div>
              ) : (
                <svg
                  aria-hidden='true'
                  class='w-5 h-5 text-gray-300 dark:text-gray-500'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <title>Fifth star</title>
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                </svg>
              )}
            </div>
            <div className='my-4'>
              <span>Color</span>
              <div className='flex items-center pt-4'>
                <div className='w-8 h-8 mr-2 rounded-full bg-red-700'></div>
                <div className='w-8 h-8 mr-2 rounded-full bg-gray-700'></div>
                <div className='w-8 h-8 mr-2 rounded-full bg-pink-600'></div>
              </div>
            </div>
            <div className='flex items-center'>
              <button
                type='button'
                className='text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800'
              >
                <svg
                  aria-hidden='true'
                  className='mr-2 -ml-1 w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z'></path>
                </svg>
                Buy now
              </button>
              <Heart />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SingleProduct;
