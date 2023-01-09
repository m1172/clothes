import { ADD_TO_CART, ADD_TO_WISHLIST, CHANGE_CURRENCY, DECREASE_FROM_CART, DELETE_FROM_BASKET, DELETE_FROM_WISHLIST, GET_PRODUCTS, GET_SINGLE_PRODUCT } from "../types/Types"

export const getProducts = (data) => {
  return{type: GET_PRODUCTS, payload: data}
}

export const addCart = (data) => {

  let basket = JSON.parse(localStorage.getItem("cart")) || [];
  const findItem = basket?.find(el => el.id === data.id);

  if(findItem){
    basket = basket.map((el) =>
    el.id === data.id
      ? { ...el, quantity: el.quantity + 1 }
      : el
  )
  }else{
    basket = [...basket, {...data, quantity: 1}]
  }
  localStorage.setItem("cart", JSON.stringify(basket))
  return{type: ADD_TO_CART, payload: data}
}

export const incCartItem = (data) => {
  return {type: ADD_TO_CART, payload: data}
}
export const decCartItem = (data) => {

  let basket = JSON.parse(localStorage.getItem("cart")) || [];
  const findItem = basket?.find(el => el.id === data.id);
  if(findItem){
    basket = basket.map((el) =>
    el.id === data.id
      ? { ...el, quantity: el.quantity - 1 }
      : el
  )
  }else{
    basket = [...basket, {...data, quantity: 1}]
  }
  localStorage.setItem("cart", JSON.stringify(basket))
  return {type: DECREASE_FROM_CART, payload: data}
}

export const deleteFromCart = (id) => {
  return {type: DELETE_FROM_BASKET, payload: id}
}

export const addToWishlist = (data) => {
  return {type: ADD_TO_WISHLIST, payload: data}
}

export const deleteFromWishlist = (id) => {
  return {type: DELETE_FROM_WISHLIST, payload: id}
}

export const changeCurrency = (data) => {
  console.log(data);
  return {type: CHANGE_CURRENCY, payload: data}
}

export const getSingleProduct = (data) => {
  return {type: GET_SINGLE_PRODUCT, payload: data}
}