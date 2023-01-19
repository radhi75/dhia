import authreducer from "./authreduce";
import { combineReducers } from "redux";
import ErrorReducer from "./ErrorReducer";
import productreducer from "./productreducer";
const rootreducer = combineReducers({
  authreducer,
  ErrorReducer,
  productreducer,
});

export default rootreducer;
