import { createStore } from "redux";
import Reducer from "../reducer/reducer";
import { composeWithDevTools } from 'redux-devtools-extension';
export const index = createStore(Reducer, composeWithDevTools()) 
