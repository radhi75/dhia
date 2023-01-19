import { GET_PRODUCTS } from "../ActionTypes/ProductType";

const initialState = {
  products: [],
};

const productreducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS:
      return { ...state, products: payload.prod };
    default:
      return state;
  }
};

export default productreducer;
