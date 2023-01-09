import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/Actions";
import Hero from "../hero/Hero";
import { data } from "../../utils/data";
import Categories from "./categories/Categories";
import Products from "./products/Products";
import axios from "axios";

const Home = () => {

  const dispatch = useDispatch();
  const { products } = useSelector((s) => s);
  const [filterNewItem, setFilterNewItem] = useState(products);

  const filterItem = (category) => {
    if (category === "ALL") {
      setFilterNewItem(products);
      return;
    }
    const newItem = products.filter((el) => el.category === category);
    setFilterNewItem(newItem);
  };

  useEffect(() => {
    axios("https://fakestoreapi.com/products").then(({ data }) => {
      dispatch(getProducts(data));
    });
  }, []);


  return (
    <div>
      <Hero />
      <div>
        <h1 className="gTitle font-bold py-4 text-2xl text-center ">FOR HIM</h1>
        <Categories filterItemFun={filterItem} />
        <div className="flex flex-wrap items-center justify-between p-9 sm:justify-center">
          {filterNewItem.length > 1 ? (
            filterNewItem.map((el, idx) => (
              <Products idx={idx} el={el} key={idx} />
            ))
          ) : (
            products.map((el, idx) => (
              <Products idx={idx} el={el} key={idx} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
