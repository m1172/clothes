import React from "react";
import { useSelector } from "react-redux";
import Notification from "../cart/Notification";
import WishlistItem from "./WishlistItem";

const Wishlist = () => {
  const { wishlist } = useSelector((s) => s);
  console.log(wishlist);
  return (
    <div className="mt-36">
      <div className="container mx-auto px-9  ">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white my-4">
          Your Wishlist
        </h1>
        {wishlist.length === 0 ? (
          <Notification />
        ) : (
          <div className="flex flex-wrap">
            {wishlist.map((el) => (
              <WishlistItem item={el} key={el.id}/>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
