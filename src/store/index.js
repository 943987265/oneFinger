import calculator from './calculator/index'
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

export default createStore(calculator, applyMiddleware(reduxThunk));