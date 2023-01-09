import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addCart, deleteFromWishlist } from "../../../redux/actions/Actions";
import { Cart } from "./../../../assets/icons/Icons";
import { Heart } from "./../../../assets/icons/Icons";
import { addToWishlist } from "../../../redux/actions/Actions";
import { AiFillHeart } from "react-icons/ai";
import { BiCheck } from "react-icons/bi";
import ShowNotification from "./ShowNotification";

const Products = ({ el, idx }) => {
  const dispatch = useDispatch();

  const {
    wishlist,
    cart,
    currencies,
    currencySymbol,
    defaultCurrency,
    defaultSymbol,
  } = useSelector((state) => state);

  const item = wishlist.find((item) => item.id === el.id);
  const inCartProduct = cart.find((item) => item.id === el.id);
  const cost = (currencies[defaultCurrency] * el.price).toFixed(2);
  const [notification, setNotification] = useState(false);

  const showNotif = (item) => {
    setNotification(item);
    setTimeout(() => {
      setNotification(false);
    }, 2000);
  };

  useEffect(() => {}, [dispatch]);

  return (
    <>
      <div className="mt-6">
        <div className="relative productBlock">
          <div className="min-h-80 aspect-w-1 aspect-h-1 w-[250px] overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
            <Link to={`/products/products-info/${el.id}`}>
            <img
              src={el.image}
              alt={el.title}
              className="h-full w-full object-contain p-4 object-center lg:h-full lg:w-full"
            />
            </Link>
          </div>
          <div className="absolute top-48 right-1 iconsBlock z-20">
          <div
            onClick={() => {
              dispatch(addCart(el));
              showNotif(true);
            }}
            className="icons bg-white rounded-full p-2 mb-2 hover:bg-gray-900"
          >
            {inCartProduct ? (
              <BiCheck className="flex items-center justify-center text-green-600 text-2xl" />
            ) : (
              <Cart />
            )}
          </div>
          <div
            onClick={() => {
              return item
                ? item.liked
                  ? dispatch(deleteFromWishlist(el))
                  : ""
                : dispatch(addToWishlist(el));
            }}
            className="icons bg-white p-2 w-fit rounded-full hover:bg-gray-900"
          >
            <AiFillHeart
              className={`${
                item
                  ? item.liked
                    ? "text-red-600 text-2xl flex items-center justify-center"
                    : "text-gray-200 text-2xl flex items-center justify-center"
                  : "text-gray-200 text-2xl flex items-center justify-center"
              }`}
            />
          </div>
        </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm text-gray-700">
                <Link to={`/products/products-info/${el.id}`}>
                  <span ariaHidden="true" className="absolute inset-0"></span>
                  {el.title.slice(0, 10)}
                </Link>
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                {el.category}
              </p>
            </div>
            <p className="text-sm font-medium text-gray-900">
            {cost} {currencySymbol[defaultCurrency]}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
