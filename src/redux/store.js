import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { homeReducer } from "./home/reducer";
import { contactReducer } from "./contact/reducer";
import { createContactReducer } from "./create-contact/reducer";
import { editContactReducer } from "./edit-contact/reducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  data: homeReducer,
  dataById: contactReducer,
  create: createContactReducer,
  edit: editContactReducer,
});

export const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);
