import axios from "axios";
import { GET_PRODUCTS } from "../ActionTypes/ProductType";

export const get_product = () => async (dispatch) => {
  try {
    const res = await axios.get("/product/getproduct");

    dispatch({ type: GET_PRODUCTS, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
export const add_product = (data) => async (dispatch) => {
  try {
    await axios.post("/product/addproduct", data);
    dispatch(get_product());
  } catch (error) {
    console.log(error);
  }
};
export const delete_product = (id) => async (dispatch) => {
  try {
    await axios.delete(`/product/delproduct/${id}`);
    dispatch(get_product());
  } catch (error) {
    console.log(error);
  }
};
export const edit_product = (id, data) => async (dispatch) => {
  try {
    await axios.put(`/product/editproduct/${id}`, data);
    dispatch(get_product());
  } catch (error) {
    console.log(error);
  }
};
