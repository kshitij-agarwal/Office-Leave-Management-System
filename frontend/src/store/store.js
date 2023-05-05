import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistCombineReducers } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import { composeWithDevTools } from "@redux-devtools/extension";

import rootReducer from "../reducers";
// import cartReducer from "./reducers/cartReducer";

export default function configureStore() {
  const initialState = {};
  const middleware = [thunk];
  const persistConfig = {
    key: "office-leave-management-system",
    storage,
    whitelist: ["auth"],
  };

  const reducer = persistCombineReducers(persistConfig, rootReducer);

  const store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(...middleware)
      // composeWithDevTools(applyMiddleware(...middleware))
    )
  );

  const persistor = persistStore(store);
  return { persistor, store };
}
