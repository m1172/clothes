import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addCart, deleteFromWishlist } from "../../redux/actions/Actions";
import { Cart } from "../../assets/icons/Icons";

const WishlistItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex relative productBlock m-1">
      <div className="mb-6 rounded">
        <img
          src={item.image}
          alt={item.title}
          className="w-[290px] h-[300px]"
        />
        <div className="flex items-center justify-between py-2">
          <Link to="/" className="text-black">
            <span className="text-sm font-normal hover:underline">
              {item.name}
            </span>
          </Link>
          <span className="text-sm font-normal">{item.price}som</span>
        </div>
      </div>
      <div className="absolute top-44 left-[243px] iconsBlock">
        <div
          onClick={() => dispatch(addCart(item))}
          className="icons bg-white rounded-full p-2 mb-2 hover:bg-gray-900"
        >
          <Cart />
        </div>
        <div
          onClick={() => dispatch(deleteFromWishlist(item))}
          className="icons bg-white rounded-full  py-3 mb-2 hover:bg-gray-900"
        >
          <span className="icon flex items-center justify-center text-sm text-gray-300 cursor-pointer">X</span>
        </div>
      </div>
    </div>
  );
};

export default WishlistItem;
